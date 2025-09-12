import { readCanvasAndSync } from "./canvasScrapper";
import { renderComponent } from "./renderComponent";
import { injectStylesInIframe } from "./stylesInjector";

const injectButtonInRiskRewardPopup = (doc) => {
  let isOverlapObserved = false;

  const observer = new MutationObserver(() => {
    const popupRoot = doc.getElementById("overlap-manager-root");
    if (!popupRoot) return;

    if (!isOverlapObserved) {
      observer.disconnect();
      observer.observe(popupRoot, { subtree: true, childList: true });
      isOverlapObserved = true;
    }

    const isButtonInjected = doc.getElementById(
      "find-my-edge-extension-capture-btn"
    );
    if (isButtonInjected || !popupRoot?.textContent.includes("Account size"))
      return;

    const buttons = popupRoot.getElementsByTagName("button");
    const cancelBtn = buttons[4];
    const okBtn = buttons[5];

    const addBtn = cancelBtn.cloneNode(true);

    addBtn.id = "find-my-edge-extension-capture-btn";
    addBtn.textContent = "Capture";
    addBtn.style.fontSize = "16px";
    addBtn.style.marginRight = "12px";

    addBtn.onclick = async () => {
      addBtn.textContent = "Adding..";

      const inputs = popupRoot.getElementsByTagName("input");
      if (inputs.length === 0) return;

      await readCanvasAndSync(doc, [
        inputs[4]?.value,
        inputs[6]?.value,
        inputs[8]?.value,
      ]);
      okBtn.click();
    };

    cancelBtn.parentElement.prepend(addBtn);
    console.log("Capture Button Added");
  });

  observer.observe(doc.body, { childList: true });
};

// const injectButtonInToolbar = (doc, buttonWrapper) => {
//   let isButtonInjected = false;

//   const observer = new MutationObserver((mutations) => {
//     for (const mutation of mutations) {
//       for (const node of mutation.addedNodes) {
//         if (node.nodeType === Node.ELEMENT_NODE && !isButtonInjected) {
//           const toolbar = node.querySelector(`div[data-name="right-toolbar"]`);

//           if (toolbar) {
//             console.log("Toolbar found, trying to inject button...");
//             const filler = toolbar?.lastChild;
//             toolbar.insertBefore(buttonWrapper, filler);

//             isButtonInjected = true;
//             observer.disconnect();
//           }
//         }
//       }
//     }
//   });
//   observer.observe(doc.body, { childList: true, subtree: true });
// };

export function injectButtonAndTooltipInIframe(button, tooltip) {
  let isIframeFound = false;
  let isIframeLoaded = false;
  let isButtonInjected = false;

  const btnWrapper = renderComponent(
    "find-my-edge-extension-button-root",
    button
  );
  const tooltipWrapper = renderComponent("find-my-edge-tooltip-root", tooltip);

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (node.nodeType === Node.ELEMENT_NODE) {
          if (!isIframeFound && node.tagName === "IFRAME") {
            console.log("Iframe found...");
            isIframeFound = true;
            observer.disconnect();

            node.addEventListener("load", () => {
              const contentDocument = node.contentDocument;

              console.log("Iframe loaded");
              isIframeLoaded = true;
              observer.observe(contentDocument.body, {
                childList: true,
                subtree: true,
              });

              contentDocument.body.appendChild(tooltipWrapper);
              injectStylesInIframe(contentDocument);
              injectButtonInRiskRewardPopup(contentDocument);
            });
          }

          if (!isButtonInjected) {
            const toolbar = node.querySelector(
              `div[data-name="right-toolbar"]`
            );

            if (toolbar) {
              console.log("Toolbar found, trying to inject button...");
              isButtonInjected = true;

              const filler = toolbar?.lastChild;
              toolbar.insertBefore(btnWrapper, filler);

              observer.disconnect();
            }
          }
        }
      }
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
}
