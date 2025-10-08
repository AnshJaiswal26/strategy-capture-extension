import { useEffect, useRef, useState } from "react";
import { useExtensionStore } from "@store";
import { Header, TabSelector, Body, Footer } from "./components/index";
import "./Popup.css";
import { initWorker } from "@utils";
import LoginForm from "./components/LoginForm/LoginForm";
import { Loading } from "@components";

export default function Popup() {
  const popupRef = useRef(null);

  const isPopupOpen = useExtensionStore((s) => s.popupUI.isPopupOpen);
  const isUserLogedIn = useExtensionStore((s) => s.popupUI.isUserLogedIn);
  const updatePopupUI = useExtensionStore((s) => s.updatePopupUI);
  const updatePopupUIBatch = useExtensionStore((s) => s.updatePopupUIBatch);

  useEffect(() => {
    const initializeWorkers = async () => await initWorker();
    initializeWorkers();
  }, []);

  return (
    <div
      ref={popupRef}
      id="find-my-edge-capture-popup"
      className="backtesting-popup"
      style={{
        display: isPopupOpen ? "block" : "none",
      }}
    >
      <Header updatePopupUI={updatePopupUI} popupRef={popupRef} />

      {!isUserLogedIn ? (
        <LoginForm updater={updatePopupUIBatch} />
      ) : (
        <>
          <TabSelector
            tabs={["Recent", "All Captures"]}
            updatePopupUIBatch={updatePopupUIBatch}
          />
          <BodyAndFooter />
        </>
      )}
    </div>
  );
}

function BodyAndFooter() {
  const [isDataLoading, setIsDataLoading] = useState(false);

  useEffect(() => {
    setIsDataLoading(true);
    setTimeout(() => setIsDataLoading(false), 1000);
  }, []);

  return (
    <>
      {isDataLoading ? (
        <Loading size={30} color={"blue"} />
      ) : (
        <>
          <Body />
          <Footer />
        </>
      )}
    </>
  );
}
