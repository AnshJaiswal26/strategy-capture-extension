import { createElement, useEffect, useRef, useState } from "react";
import { useExtensionStore } from "../stores/useExtensionStore";
import { injectElementStyle } from "../utils/injectElementStyles";
import "./BacktestingButton.css";
import buttonCss from "./BacktestingButton.css?raw";
import tooltipCss from "../components/InfoTooltip/InfoTooltip.css?raw";

const cssText = `${buttonCss}\n${tooltipCss}`;

export default function BacktestButton({ _IS_EXTENSION_BUILD_ = false }) {
  const hoverTimeOutRef = useRef();
  const buttonRef = useRef();
  const updatePopupUI = useExtensionStore((s) => s.updatePopupUI);
  const updateTooltipUI = useExtensionStore((s) => s.updateTooltipUI);

  useEffect(() => {
    if (_IS_EXTENSION_BUILD_) injectElementStyle(cssText);
    const buttonRect = buttonRef.current.getBoundingClientRect();

    updateTooltipUI({
      positionX: buttonRect.left - 145,
      positionY: buttonRect.height / 2 + buttonRect.top,
    });
  }, []);

  const handleMouseEnter = (e) => {
    hoverTimeOutRef.current = setTimeout(() => {
      updateTooltipUI({ isVisible: true });
    }, 400);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeOutRef.current);
    updateTooltipUI({ isVisible: false });
  };

  return (
    <button
      ref={buttonRef}
      className={`toggle-popup-button ${_IS_EXTENSION_BUILD_ ? "" : "web-app"}`}
      onClick={() => updatePopupUI({ isPopupOpen: true })}
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
