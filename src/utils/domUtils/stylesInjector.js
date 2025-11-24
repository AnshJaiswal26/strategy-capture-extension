import buttonCss from "../../PopupToggleButton/PopupToggleButton.css?raw";

export const injectStylesInIframe = (iframeDoc) => {
  const styleEle = document.createElement("style");
  styleEle.id = "find-my-edge-extension-styles";
  styleEle.textContent = buttonCss;
  iframeDoc.head.appendChild(styleEle);
};
