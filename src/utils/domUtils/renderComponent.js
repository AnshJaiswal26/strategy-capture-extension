import { createRoot } from "react-dom/client";

export function renderComponent(
  id,
  component,
  appendToBody = false,
  shadow = false,
  cssText
) {
  const wrapper = document.createElement("div");
  wrapper.id = id;

  let mountNode = wrapper;

  if (shadow) {
    const shadowRoot = wrapper.attachShadow({ mode: "open" });

    // INLINE CSS instead of <link>
    const style = document.createElement("style");
    style.textContent = cssText;

    const innerContainer = document.createElement("div");

    shadowRoot.appendChild(style);
    shadowRoot.appendChild(innerContainer);

    mountNode = innerContainer;
  }

  if (appendToBody) {
    const interval = setInterval(() => {
      if (document.body) {
        document.body.appendChild(wrapper);
        clearInterval(interval);
      }
    }, 200);
  }

  const root = createRoot(mountNode);
  root.render(component);

  return wrapper;
}
