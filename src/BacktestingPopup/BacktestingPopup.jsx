import { useRef } from "react";
import { useExtensionStore } from "@store";
import { Header, TabSelector, Content, Footer } from "./components/index";
import "./BacktestingPopup.css";

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
      <TabSelector
        tabs={["Recent", "All Captures"]}
        updatePopupUI={updatePopupUI}
      />
      <Content
        inputArray={[
          { label: "Time", value: 0, type: "time" },
          { label: "Date", value: 0, type: "date" },
          { label: "Time Frame", value: 0, type: "input" },
          { label: "Pnl", value: 0, type: "input" },
          { label: "Risk/Reward", value: 0, type: "input" },
          {
            label: "Entry Candle",
            value: 0,
            options: ["Engulfing", "Spinning Top", "Pin Bar"],
            type: "dropdown",
          },
          {
            label: "Strategy",
            value: 0,
            options: ["Breakout", "9 & 15 EMA 1st Pullback"],
            type: "dropdown",
          },
        ]}
      />
      <Footer />
    </div>
  );
}
