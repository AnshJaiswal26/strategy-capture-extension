import { readCanvasAndSync } from "./canvasScrapper";
import { renderComponent } from "./renderComponent";
import { injectStylesInIframe } from "./stylesInjector";

/**
 * Injects a custom "Capture" button into the TradingView
 * Risk/Reward popup (the popup that appears when click on Risk Mangement tool)
 *
 * This listens to DOM mutations inside TradingView’s overlap manager
 * and adds a cloned button next to Cancel/OK buttons.
 */
const injectButtonInRiskRewardPopup = (doc) => {
  let isObservingRoot = false;

  // MutationObserver: used to detect whenever TradingView opens a popup
  const observer = new MutationObserver(() => {
    const popupRoot = doc.getElementById("overlap-manager-root");
    if (!popupRoot) return;

    // Once we detect the popup root, switch observer to listen INSIDE it
    if (!isObservingRoot) {
      observer.disconnect();
      observer.observe(popupRoot, { subtree: true, childList: true });
      isObservingRoot = true;
    }

    const isButtonInjected = doc.getElementById(
      "find-my-edge-extension-capture-btn"
    );

    // If Capture button is already injected → prevent duplicates
    // Only inject when the popup contains "Account size" text
    if (isButtonInjected || !popupRoot?.textContent.includes("Account size"))
      return;

    // Risk Reward popup buttons in sequence:
    const buttons = popupRoot.getElementsByTagName("button");
    const cancelBtn = buttons[buttons.length - 2]; // Cancel button
    const okBtn = buttons[buttons.length - 1]; // OK button

    // Clone "Cancel" button → convert it into your custom Capture button
    const addBtn = cancelBtn.cloneNode(true);
    addBtn.id = "find-my-edge-extension-capture-btn";
    addBtn.textContent = "Capture";
    addBtn.style.fontSize = "16px";
    addBtn.style.marginRight = "12px";
    addBtn.style.marginLeft = "12px";

    /**
     * When Capture is clicked:
     * 1. Read values from popup inputs
     * 2. Extract 3 inputs from popup (Entry Price, Profit Level Price, Stoploss Level Price)
     * 3. Send data to (canvas scrapper) readCanvasAndSync()
     * 4. Auto-click OK to close popup
     */
    addBtn.onclick = async () => {
      addBtn.textContent = "Adding..";

      const inputs = popupRoot.getElementsByTagName("input");
      if (inputs.length === 0) return;

      // Passing values to canvas scrapper: [Entry Price, Profit Level Price, Stoploss Level Price]
      await readCanvasAndSync(doc, [
        inputs[4]?.value, // Entry Price
        inputs[6]?.value, // Profit Level Price
        inputs[8]?.value, // Stoploss Level Price
      ]);

      okBtn.click();
    };

    // Insert "Capture" button before Cancel button
    cancelBtn.parentElement.prepend(addBtn);
    console.log("Capture Button Added");
  });

  // Start observing TradingView’s body for popup
  observer.observe(doc.body, { childList: true });
};

// --- injecting button to toggle strategy capture popup ---
export function injectButtonInIframe(button, isZerodha = false) {
  let count = 0;
  let iframeFound = false;

  const btnWrapper = renderComponent(
    "find-my-edge-extension-button-root",
    button
  );

  setTimeout(() => {
    const injectorInterval = setInterval(() => {
      count++;

      const iframe = document.body.querySelector("iframe");
      const contentDocument = isZerodha
        ? iframe?.contentDocument.querySelector("iframe")?.contentDocument
        : iframe?.contentDocument;

      if (count > 70) {
        clearInterval(injectorInterval);
        alert(
          "Strategy Capture Extensions: The extension is taking longer than expected to load. Please refresh the page and try again."
        );
        return;
      }

      if (contentDocument) {
        if (!iframeFound) {
          console.log("Iframe loaded");
          iframeFound = true;
        }

        const toolbar = contentDocument.getElementById("drawing-toolbar");
        console.log("Searching for toolbar...");

        if (toolbar) {
          console.log("Toolbar found, injecting button");
          clearInterval(injectorInterval);

          injectStylesInIframe(contentDocument);
          injectButtonInRiskRewardPopup(contentDocument);

          const group = toolbar.querySelector(`[class*="group-"]`);

          group.prepend(btnWrapper);

          console.log("Button injected");
        }
      }
    }, 200);
  }, 1500);
}
