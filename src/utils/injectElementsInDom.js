import { createRoot } from "react-dom/client";

export function injectElementInDom(component) {
  const container = document.createElement("div");
  container.id = "backtesting-extension-root";
  document.body.appendChild(container);
  const root = createRoot(container);
  root.render(component);
}

export function injectButtonAndTooltipInDom(component, tooltip) {
  const buttonWrapper = document.createElement("div");
  buttonWrapper.id = "backtest-button-extension-root";

  const tooltipWrapper = document.createElement("div");
  tooltipWrapper.id = "backtest-button-tooltip-extension-root";

  const observer = new MutationObserver(() => {
    console.log("DOM changed, trying to inject button...");
    const iframe = document.querySelector("iframe");

    if (iframe) {
      iframe.contentDocument.body.appendChild(tooltipWrapper);
      const tooltipRoot = createRoot(tooltipWrapper);
      tooltipRoot.render(tooltip);
    }

    const toolbar = iframe?.contentDocument.querySelector(
      `div[data-name="right-toolbar"]`
    );

    const buttons = toolbar?.querySelectorAll("button");
    if (buttons?.length > 0) {
      const lastButton = buttons[buttons.length - 1];
      lastButton.insertAdjacentElement("afterend", buttonWrapper);
      const root = createRoot(buttonWrapper);
      root.render(component);
    }

    // if (iframe && toolbar) {
    //   const inputPopup = document.getElementById("floatingPopupPrice");
    //   const closePrice = iframe.contentDocument
    //     .querySelector('div[data-name="legend-series-item"]')
    //     .lastChild.textContent.match(/C(\d+\.\d{2})/)[1];

    //   if (inputPopup) inputPopup.value = closePrice;
    // }

    if (iframe && toolbar) observer.disconnect();
  });

  observer.observe(document.body, { childList: true, subtree: true });
}
