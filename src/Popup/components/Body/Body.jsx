import { useExtensionStore } from "@store";
import RecentTab from "./components/RecentTab/RecentTab";
import AllCapturesTab from "./components/AllCapturesTab/AllCapturesTab";
import CalculatorTab from "./components/CalculatorTab/CalculatorTab";
import "./Body.css";

export default function Body() {
  const activeTab = useExtensionStore((s) => s.popupUI.Tab.currentTab);

  return (
    <div className="backtesting-popup-content">
      {activeTab === "Recent" && <RecentTab />}
      {activeTab === "All Captures" && <AllCapturesTab />}
      {/* {activeTab === "Charges Calculator" && <CalculatorTab />} */}
    </div>
  );
}
