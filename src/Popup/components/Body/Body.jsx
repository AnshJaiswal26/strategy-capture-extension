import { useExtensionStore } from "@store";
import RecentTab from "./components/RecentTab";
import AllCapturesTab from "./components/AllCapturesTab/AllCapturesTab";
import CalculatorTab from "./components/CalculatorTab/CalculatorTab";
import "./Body.css";
import SheetsTab from "./components/SheetsTab";
import { Toast } from "@/components";

export default function Body({ updateStore }) {
  const activeTabIndex = useExtensionStore((s) => s.activeTabIndex);

  return (
    <div
      id="extension-popup-content"
      className={activeTabIndex === 1 ? "tab-2-padding" : ""}
    >
      {activeTabIndex === 0 && <RecentTab updateStore={updateStore} />}
      {activeTabIndex === 1 && <AllCapturesTab updateStore={updateStore} />}
      {/* {activeTab === "Charges Calculator" && <CalculatorTab />} */}
      {activeTabIndex === 2 && <SheetsTab updateStore={updateStore} />}
    </div>
  );
}
