import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import BacktestingPopup from "./BacktestingPopup/BacktestingPopup";
import BacktestButton from "./backtestingButton/BacktestingButton";
import InfoTooltip from "./components/InfoTooltip";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <img
      src="public/image.png"
      style={{
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        width: "100vw",
        height: "100vh",
        position: "absolute",
      }}
      alt="Vite logo"
    />

    <BacktestingPopup />
    <BacktestButton />
    <InfoTooltip title={"Capture as Backtesed"} position="left" />
  </StrictMode>
);
