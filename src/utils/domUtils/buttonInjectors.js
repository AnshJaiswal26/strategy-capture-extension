import { readCanvasAndSync } from "./canvasScrapper";
import { renderComponent } from "./renderComponent";
import { injectStylesInIframe } from "./stylesInjector";

const injectButtonInRiskRewardPopup = (doc) => {
  let isObservingRoot = false;

  const observer = new MutationObserver(() => {
    const popupRoot = doc.getElementById("overlap-manager-root");
    if (!popupRoot) return;

    if (!isObservingRoot) {
      observer.disconnect();
      observer.observe(popupRoot, { subtree: true, childList: true });
      isObservingRoot = true;
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

export function injectButtonAndTooltipInIframe(button, tooltip) {
  let count = 0;

  const btnWrapper = renderComponent(
    "find-my-edge-extension-button-root",
    button
  );
  const tooltipWrapper = renderComponent("find-my-edge-tooltip-root", tooltip);
  tooltipWrapper.style.position = "absolute";

  setTimeout(() => {
    const injectorInterval = setInterval(() => {
      count++;

      const iframe = document.body.querySelector("iframe");
      const contentDocument = iframe?.contentDocument;

      if (count > 70) {
        clearInterval(injectorInterval);
        console.log("Please refresh the page taking longer than expected");
        return;
      }

      if (contentDocument) {
        console.log("Iframe loaded");

        const toolbar = contentDocument.querySelector(
          `div[data-name="right-toolbar"]`
        );
        console.log("Searching for toolbar...");

        if (toolbar) {
          console.log("Toolbar found, injecting button");
          clearInterval(injectorInterval);

          contentDocument.body.appendChild(tooltipWrapper);
          injectStylesInIframe(contentDocument);
          injectButtonInRiskRewardPopup(contentDocument);

          const filler = toolbar?.lastChild;
          toolbar.insertBefore(btnWrapper, filler);

          const btnRect = btnWrapper.getBoundingClientRect();

          tooltipWrapper.style.left = `${btnRect.left - 3}px`;
          tooltipWrapper.style.top = `${btnRect.top + btnRect.height / 2}px`;
          console.log("Button injected");
        }
      }
    }, 200);
  }, 1500);
}
