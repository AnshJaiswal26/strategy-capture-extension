import { useCallback, useRef } from "react";

export default function Header({ updatePopupUI, popupRef }) {
  const initial = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    popupRef.current.style.left = `${e.clientX - initial.current.x}px`;
    popupRef.current.style.top = `${e.clientY - initial.current.y}px`;
  }, []);

  const handleMouseUp = () => {
    isDragging.current = false;
    window.top.removeEventListener("mousemove", handleMouseMove);
    window.top.removeEventListener("mouseup", handleMouseUp);
  };

  const handleMouseDown = (e) => {
    if (e.target.closest(".backtesting-popup-close-btn")) return;

    const rect = popupRef.current.getBoundingClientRect();
    initial.current.x = e.clientX - rect.left;
    initial.current.y = e.clientY - rect.top;
    isDragging.current = true;

    window.top.addEventListener("mousemove", handleMouseMove);
    window.top.addEventListener("mouseup", handleMouseUp);
  };

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
