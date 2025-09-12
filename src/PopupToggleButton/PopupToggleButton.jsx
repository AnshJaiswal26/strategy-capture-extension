import { useRef } from "react";
import { useExtensionStore } from "@store";
import "./PopupToggleButton.css";

export default function PopupToggleButton({ _IS_EXTENSION_BUILD_ = false }) {
  const hoverTimeOutRef = useRef();
  const updatePopupUI = useExtensionStore((s) => s.updatePopupUI);
  const updateTooltipUI = useExtensionStore((s) => s.updateTooltipUI);
  const isPopupOpen = useExtensionStore((s) => s.popupUI.isPopupOpen);

  const handleMouseEnter = (e) => {
    hoverTimeOutRef.current = setTimeout(() => {
      const buttonRect = e.target.getBoundingClientRect();
      updateTooltipUI({
        isVisible: true,
        positionX: buttonRect.left - 145,
        positionY: buttonRect.height / 2 + buttonRect.top,
      });
    }, 400);
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
      onMouseEnter={(e) => handleMouseEnter(e)}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={
          _IS_EXTENSION_BUILD_
            ? chrome.runtime.getURL("audit.png")
            : "audit.png"
        }
        className="backtest-button-img"
      />
    </button>
  );
}
