import { createRoot } from "react-dom/client";
import { preProcessCanvasForOCR } from "./creaters";
import { extractTextAndSync } from "./canvasToText";
import tooltipCss from "../components/InfoTooltip/InfoTooltip.css?raw";
import buttonCss from "../BacktestingButton/BacktestingButton.css?raw";

export function injectElementInDom(component) {
  const container = document.createElement("div");
  container.id = "backtesting-extension-root";
  document.body.appendChild(container);
  const root = createRoot(container);
  root.render(component);
}

export function injectElementStyle(cssText, iframeDoc) {
  const styleEle = document.createElement("style");
  styleEle.textContent = cssText;
  if (iframeDoc) {
    console.log("iframe found injecting styles");
  }
  if (iframeDoc?.head) {
    console.log("iframe head found injecting styles");
  }
  iframeDoc.head.appendChild(styleEle);
}

let isIframeInjected = false;
let isButtonInjected = false;

const injectButtonInToolbar = (doc, buttonWrapper, outerObserver) => {
  const observer = new MutationObserver((mlist) => {
    for (const m of mlist) {
      for (const added of m.addedNodes) {
        if (added.nodeType === Node.ELEMENT_NODE && !isButtonInjected) {
          const toolbar = added.querySelector(`div[data-name="right-toolbar"]`);

          if (toolbar) {
            console.log(`toolbar found, trying to inject button...`);
            const filler = toolbar?.lastChild;
            toolbar.insertBefore(buttonWrapper, filler);

            isButtonInjected = true;
            observer.disconnect();
            outerObserver.disconnect();
          }
        }
      }
    }
  });
  observer.observe(doc.body, { childList: true, subtree: true });
};

const renderComponents = (id, component) => {
  const wrapper = document.createElement("div");
  wrapper.id = id;
  const root = createRoot(wrapper);
  root.render(component);

  return wrapper;
};

export function injectButtonAndTooltipInDom(button, tooltip) {
  const buttonWrapper = renderComponents(
    "backtest-button-extension-root",
    button
  );
  const tooltipWrapper = renderComponents(
    "backtest-button-tooltip-extension-root",
    tooltip
  );

  const observer = new MutationObserver((mutations) => {
    if (isIframeInjected) return;

    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (node.nodeType === Node.ELEMENT_NODE && node.tagName === "IFRAME") {
          console.log("DOM changed, trying to inject button...");

          isIframeInjected = true;
          node.addEventListener("load", () => {
            console.log("iframe found, trying to inject button...");

            const doc = node.contentDocument;
            doc.body.appendChild(tooltipWrapper);

            const cssText = `${buttonCss}\n${tooltipCss}`;
            injectElementStyle(cssText, doc);

            // fallback observer inside iframe
            injectButtonInToolbar(doc, buttonWrapper, observer);
          });
        }
      }
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
}

// if (iframe && toolbar) {
//   const inputPopup = document.getElementById("floatingPopupPrice");
//   const closePrice = iframe.contentDocument
//     .querySelector('div[data-name="legend-series-item"]')
//     .lastChild.textContent.match(/C(\d+\.\d{2})/)[1];

//   if (inputPopup) inputPopup.value = closePrice;
// }\

export async function readCanvasAndSync(updater) {
  console.time("Canvas Process");
  const iframe = document.querySelector("iframe");
  const allCanvas = iframe.contentDocument.querySelectorAll("canvas");

  const canvasPrice = allCanvas[3];
  const canvasTime = allCanvas[5];

  const topToolbar =
    iframe.contentDocument.querySelector(`div[role="toolbar"]`);
  const tF = topToolbar
    .querySelectorAll("button")[2]
    .getAttribute("aria-label");

  const filteredPriceCanvas = preProcessCanvasForOCR(canvasPrice);
  const filteredTimeCanvas = preProcessCanvasForOCR(canvasTime, "time");

  await extractTextAndSync(
    filteredPriceCanvas,
    filteredTimeCanvas,
    tF,
    updater
  );

  console.timeEnd("Canvas Process");
}

//document.querySelector("iframe").contentDocument.querySelectorAll(`div[data-section-name="Risk/RewardlongAccountSize"]`)[0].parentElement.parentElement.parentElement.lastChild.querySelectorAll("button")[1].click()
