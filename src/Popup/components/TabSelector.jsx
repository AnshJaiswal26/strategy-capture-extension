import { useExtensionStore } from "@store";
import { useState, useRef, useLayoutEffect } from "react";

export default function TabSelector({ tabs, updateStore }) {
  const [indicator, setIndicator] = useState({
    width: 52,
    translateX: 0,
  });
  const activeTabIndex = useExtensionStore((s) => s.activeTabIndex);

  const tabRefs = useRef([]);

  useLayoutEffect(() => {
    const tabEl = tabRefs.current[activeTabIndex];
    if (!tabEl) return;

    setIndicator((p) => ({
      width: tabEl?.offsetWidth || p.width,
      translateX: tabEl.offsetLeft || 0,
    }));
  }, [activeTabIndex]);

  return (
    <div className="tab-selector">
      <div className="tab-track-container">
        <div className="tab-container">
          {tabs.map((tab, index) => (
            <button
              key={index}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              className={`tab${activeTabIndex === index ? " active" : ""}`}
              onClick={() =>
                updateStore((s) => {
                  s.activeTabIndex = index;
                })
              }
              disabled={activeTabIndex === index}
            >
              {tab}
            </button>
          ))}

          <div
            className="active-tab-indicator"
            style={{
              width: `${indicator.width}px`,
              transform: `translateX(${indicator.translateX}px)`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
