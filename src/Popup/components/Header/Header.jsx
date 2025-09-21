import { useRef } from "react";
import { handleMouseDown } from "./handlers";

export default function Header({ updatePopupUI, popupRef }) {
  return (
    <div className="backtesting-popup-header-wrapper">
      <div className="backtesting-popup-header" onMouseDown={handleMouseDown}>
        <div className="backtesting-popup-header-title">
          <span>Strategy Capture</span>
        </div>

        <div className="backtesting-popup-close-btn-wrapper">
          <button
            className="backtesting-popup-close-btn"
            onClick={() => {
              updatePopupUI({ isPopupOpen: false });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 18"
              width="18"
              height="18"
            >
              <path
                stroke="currentColor"
                strokeWidth="1.2"
                d="m1.5 1.5 15 15m0-15-15 15"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
