import { useRef } from "react";
import { useExtensionStore } from "../stores/useExtensionStore";
import "./BacktestingPopup.css";
import { Header, TabSelector, Content, Footer } from "./components/index";

export default function BacktestingPopup() {
  const popupRef = useRef(null);

  const isPopupOpen = useExtensionStore((s) => s.popupUI.isPopupOpen);
  const updatePopupUI = useExtensionStore((s) => s.updatePopupUI);

  return (
    <div
      ref={popupRef}
      className="backtesting-popup"
      style={{
        display: isPopupOpen ? "block" : "none",
      }}
    >
      <Header updatePopupUI={updatePopupUI} popupRef={popupRef} />
      <TabSelector tabs={["Recent", "All"]} updatePopupUI={updatePopupUI} />
      <Content
        inputArray={[
          ["Time", 0],
          ["Time Frame", 0],
          ["Pnl", 0],
          ["Risk/Reward", 0],
          ["Strategy", 0],
        ]}
      />
      <Footer />
    </div>
  );
}
