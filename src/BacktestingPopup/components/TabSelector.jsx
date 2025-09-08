import { useCallback, useRef } from "react";
import { useExtensionStore } from "@store";

export default function TabSelector({ tabs, updatePopupUI }) {
  const prevI = useRef(0);
  const activeTab = useExtensionStore((s) => s.popupUI.activeTab);

  const updateIndicator = useCallback((e, tab) => {
    const currentTab = e.target;
    const tabContainer = currentTab?.parentElement;
    const activeTabRect = currentTab?.getBoundingClientRect();
    const tabContainerRect = tabContainer?.getBoundingClientRect();
    const underLine = tabContainer?.querySelector(".active-tab-indicator");

    if (!activeTabRect || !tabContainerRect || !underLine) return;

    const leftSpace = activeTabRect.left - tabContainerRect.left;
    underLine.style.width = `${activeTabRect.width}px`;
    underLine.style.transform = `translateX(${leftSpace}px)`;

    updatePopupUI({ activeTab: tab });
  }, []);

  return (
    <div className="backtesting-popup-content-tab-selector">
      <div className="backtesting-popup-content-tab-track-container">
        <div className="backtesting-popup-content-tab-container">
          {tabs.map((tab, index) => (
            <div
              className={`tab ${activeTab === tab ? "active" : ""}`}
              key={index}
              onClick={(e) => {
                if (index === prevI.current) return;
                updateIndicator(e, tab);
                prevI.current = index;
              }}
            >
              {tab}
            </div>
          ))}

          <div className="active-tab-indicator"></div>
        </div>
      </div>
    </div>
  );
}
