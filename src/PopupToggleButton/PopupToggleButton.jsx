import { useExtensionStore } from "@store";
import "./PopupToggleButton.css";
import { NotebookPen } from "lucide-react";

export default function PopupToggleButton({ _IS_EXTENSION_BUILD_ = false }) {
  const isPopupOpen = useExtensionStore((s) => s.isPopupOpen);

  const updateStore = useExtensionStore((s) => s.updateStore);

  return (
    <button
      data-tooltip="Capture your Strategies"
      className={`toggle-popup-button apply-common-tooltip common-tooltip-vertical ${
        isPopupOpen ? "active" : ""
      } ${_IS_EXTENSION_BUILD_ ? "" : "web-app"}`}
      onClick={() =>
        updateStore((s) => {
          s.isPopupOpen = !s.isPopupOpen;
        })
      }
    >
      <span>
        <NotebookPen strokeWidth={1} />
      </span>
    </button>
  );
}
