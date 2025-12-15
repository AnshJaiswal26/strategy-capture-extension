import { handleChange } from "@/Popup/components/Body/components/RecentTab/handlers";
import { renderComponent } from "./renderComponent";
import { useExtensionStore } from "@store";
import buttonCss from "@/PopupToggleButton/PopupToggleButton.css?inline";

export const injectScript = (src) => {
  const script = document.createElement("script");
  script.src = src;
  script.onload = () => script.remove();
  document.documentElement.appendChild(script);
};

export const injectStyle = (doc, cssText) => {
  const styleEle = document.createElement("style");
  styleEle.textContent = cssText;
  doc.head.appendChild(styleEle);
};

// --- injecting button to toggle strategy capture popup ---
export function injectButtonInIframe(button) {
  let count = 0;
  let iframeFound = false;

  const btnWrapper = renderComponent("extension-button-root", button);

  setTimeout(() => {
    const injectorInterval = setInterval(() => {
      count++;

      const iframe = document.body.querySelector("iframe");
      const contentDocument = iframe?.contentDocument;

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

          injectStyle(contentDocument, buttonCss);

          window.addEventListener("message", (event) => {
            if (
              event.data.sender === "FIND_MY_EDGE" &&
              event.data.type === "TOOL_DATA"
            ) {
              console.log("message recieved..");
              const data = event.data.payload;

              const updateStore = useExtensionStore.getState().updateStore;

              updateStore((s) => {
                data.Pnl = s.riskAmount * data["Risk/Reward"];
                s.tradeInputs.fields.forEach(({ mappedWith }, index) => {
                  if (data?.[mappedWith])
                    handleChange(mappedWith, data[mappedWith], s, index);
                });
                s.isPopupOpen = true;
              });
            }
          });

          const group = toolbar.querySelector(`[class*="group-"]`);
          group.prepend(btnWrapper);

          console.log("Button injected");
        }
      }
    }, 200);
  }, 1500);
}
