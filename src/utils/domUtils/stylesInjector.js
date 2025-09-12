import tooltipCss from "../../components/Tooltip/Tooltip.css?raw";
import buttonCss from "../../PopupToggleButton/PopupToggleButton.css?raw";

export const injectStylesInIframe = (iframeDoc) => {
  const cssText = `${buttonCss}\n${tooltipCss}`;

  const styleEle = document.createElement("style");
  styleEle.id = "find-my-edge-extension-styles";
  styleEle.textContent = cssText;
  iframeDoc.head.appendChild(styleEle);
};
