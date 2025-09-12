import { useEffect, useRef } from "react";
import { useExtensionStore } from "@store";
import { Header, TabSelector, Content, Footer } from "./components/index";
import "./Popup.css";
import { initWorker } from "@utils";

export default function Popup() {
  const popupRef = useRef(null);

  const isPopupOpen = useExtensionStore((s) => s.popupUI.isPopupOpen);
  const updatePopupUI = useExtensionStore((s) => s.updatePopupUI);

  useEffect(() => {
    const initializeWorkers = async () => await initWorker();
    initializeWorkers();
  }, []);

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
      <Content />
      <Footer />
    </div>
  );
}
