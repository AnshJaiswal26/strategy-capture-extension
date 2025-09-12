import { createRoot } from "react-dom/client";

export function renderComponent(id, component, appendToBody = false) {
  const wrapper = document.createElement("div");
  wrapper.id = id;
  if (appendToBody) document.body.appendChild(wrapper);
  const root = createRoot(wrapper);
  root.render(component);
  return wrapper;
}
