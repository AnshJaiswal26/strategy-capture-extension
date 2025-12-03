export const highlightRow = (index = null) => {
  requestAnimationFrame(() => {
    const shadowRootWrapper = document.getElementById(
      "extension-shadow-root-wrapper"
    );

    const section = shadowRootWrapper
      ? shadowRootWrapper.shadowRoot.getElementById("extension-popup-content")
      : document.getElementById("extension-popup-content");

    const childNodes = section.lastChild.childNodes;

    const targetIndex = index !== null ? index : childNodes.length - 1;

    const targetNode = childNodes[targetIndex];

    targetNode.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    targetNode.classList.add("highlighted-row");

    setTimeout(() => {
      targetNode.classList.remove("highlighted-row");
    }, 600);
  });
};
