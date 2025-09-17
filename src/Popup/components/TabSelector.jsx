import { useExtensionStore } from "@store";

export const moveIndicator = (e, tab, updater) => {
  const currentTab = e.target;
  const tabContainer = currentTab?.parentElement;
  const activeTabRect = currentTab?.getBoundingClientRect();
  const tabContainerRect = tabContainer?.getBoundingClientRect();
  const indicator = tabContainer?.lastElementChild;

  if (!activeTabRect || !tabContainerRect || !indicator) return;

  const leftSpace = activeTabRect.left - tabContainerRect.left;
  indicator.style.width = `${activeTabRect.width}px`;
  indicator.style.transform = `translateX(${leftSpace}px)`;

  updater([{ name: "activeTab", payload: tab }]);
};

export default function TabSelector({ tabs, updatePopupUI }) {
  const activeTab = useExtensionStore((s) => s.popupUI.activeTab);

  return (
    <div className="backtesting-popup-content-tab-selector">
      <div className="backtesting-popup-content-tab-track-container">
        <div className="backtesting-popup-content-tab-container">
          {tabs.map((tab, index) => (
            <button
              id={`tab-${tab.toLowerCase().split(" ").join("-")}`}
              className={`tab${activeTab === tab ? " active" : ""}`}
              key={index}
              onClick={(e) => moveIndicator(e, tab, updatePopupUI)}
              disabled={activeTab === tab}
            >
              {tab}
            </button>
          ))}

          <div className="active-tab-indicator"></div>
        </div>
      </div>
    </div>
  );
}
