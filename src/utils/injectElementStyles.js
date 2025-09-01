export function injectElementStyle(cssText) {
  const injectStyles = () => {
    const styleEle = document.createElement("style");
    styleEle.textContent = cssText;
    const iframe = document.querySelector("iframe");

    if (iframe && iframe.contentDocument?.readyState === "complete") {
      iframe.contentDocument.head.appendChild(styleEle);
    } else {
      iframe.addEventListener("load", () => {
        iframe.contentDocument.head.appendChild(styleEle);
      });
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectStyles);
  } else injectStyles();
}
