import { useExtensionStore } from "@store";

export const moveIndicator = (e, tab, updater) => {
  const currentTab = e.target;
  const tabContainer = currentTab?.parentElement;
  const activeTabRect = currentTab?.getBoundingClientRect();
  const tabContainerRect = tabContainer?.getBoundingClientRect();

  if (!activeTabRect || !tabContainerRect) return;

  const leftSpace = activeTabRect.left - tabContainerRect.left;

  updater([
    {
      name: "Tab",
      payload: {
        currentTab: tab,
        width: `${activeTabRect.width}px`,
        transform: `translateX(${leftSpace}px)`,
      },
    },
  ]);
};

export default function TabSelector({ tabs, updatePopupUIBatch }) {
  const activeTab = useExtensionStore((s) => s.popupUI.Tab.currentTab);
  const width = useExtensionStore((s) => s.popupUI.Tab.width);
  const transform = useExtensionStore((s) => s.popupUI.Tab.transform);

  return (
    <div className="backtesting-popup-content-tab-selector">
      <div className="backtesting-popup-content-tab-track-container">
        <div className="backtesting-popup-content-tab-container">
          {tabs.map((tab, index) => (
            <button
              id={`tab-${tab.toLowerCase().split(" ").join("-")}`}
              className={`tab${activeTab === tab ? " active" : ""}`}
              key={index}
              onClick={(e) => moveIndicator(e, tab, updatePopupUIBatch)}
              disabled={activeTab === tab}
            >
              {tab}
            </button>
          ))}

          <div
            className="active-tab-indicator"
            style={{ width: width, transform: transform }}
          ></div>
        </div>
      </div>
    </div>
  );
}
