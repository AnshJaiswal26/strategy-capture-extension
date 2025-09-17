import { useEffect, useRef } from "react";
import { useExtensionStore } from "@store";
import "./PopupToggleButton.css";
import { NotebookPen } from "lucide-react";

export default function PopupToggleButton({ _IS_EXTENSION_BUILD_ = false }) {
  const hoverTimeOutRef = useRef();
  const updatePopupUI = useExtensionStore((s) => s.updatePopupUI);
  const updateTooltipUI = useExtensionStore((s) => s.updateTooltipUI);
  const isPopupOpen = useExtensionStore((s) => s.popupUI.isPopupOpen);

  const handleMouseEnter = () => {
    hoverTimeOutRef.current = setTimeout(
      () => updateTooltipUI({ isVisible: true }),
      400
    );
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeOutRef.current);
    updateTooltipUI({ isVisible: false });
  };

  return (
    <button
      className={`toggle-popup-button ${isPopupOpen ? "active" : ""} ${
        _IS_EXTENSION_BUILD_ ? "" : "web-app"
      }`}
      onClick={() => updatePopupUI({ isPopupOpen: !isPopupOpen })}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <NotebookPen strokeWidth={1} />
    </button>
  );
}
