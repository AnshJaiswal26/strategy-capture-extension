import { useEffect, useRef, useState } from "react";
import { useExtensionStore } from "@store";
import { Header, TabSelector, Body, Footer } from "./components/index";
import "./Popup.css";
import { initWorker } from "@utils";
import LoginForm from "./components/LoginForm/LoginForm";
import { Loading } from "@components";

export default function Popup() {
  const popupRef = useRef(null);

  const isPopupOpen = useExtensionStore((s) => s.isPopupOpen);
  const isUserLogedIn = useExtensionStore((s) => s.isUserLogedIn);

  const updateStore = useExtensionStore((s) => s.updateStore);

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
      <Header updateStore={updateStore} popupRef={popupRef} />

      {!isUserLogedIn ? (
        <LoginForm updateStore={updateStore} />
      ) : (
        <>
          <TabSelector
            tabs={["Recent", "All Captures"]}
            updateStore={updateStore}
          />
          <BodyAndFooter updateStore={updateStore} />
        </>
      )}
    </div>
  );
}

function BodyAndFooter({ updateStore }) {
  const [isDataLoading, setIsDataLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsDataLoading(false), 1000);
  }, []);

  if (isDataLoading) {
    return <Loading size={30} color={"blue"} />;
  }

  return (
    <>
      <Body updateStore={updateStore} />
      <Footer updateStore={updateStore} />
    </>
  );
}
