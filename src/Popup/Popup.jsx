import { useEffect, useRef, useState } from "react";
import { useExtensionStore } from "@store";
import { Header, Body, Footer } from "./components";
import "./Popup.css";
import LoginForm from "./components/LoginForm/LoginForm";
import { Loading, TabSelector } from "@components";

export default function Popup() {
  const popupRef = useRef(null);

  const isPopupOpen = useExtensionStore((s) => s.isPopupOpen);
  const userLoggedIn = useExtensionStore((s) => s.userLoggedIn);

  const updateStore = useExtensionStore((s) => s.updateStore);

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

      {!userLoggedIn ? (
        <LoginForm updateStore={updateStore} />
      ) : (
        <>
          <TabSelector
            tabs={["Recent", "All Captures", "Sheets"]}
            updateStore={updateStore}
          />
          <BodyAndFooter updateStore={updateStore} />
        </>
      )}
    </div>
  );
}

function BodyAndFooter({ updateStore }) {
  const isHydrated = useExtensionStore.persist.hasHydrated();
  const loading = useExtensionStore((s) => s.loading);

  useEffect(() => {
    useExtensionStore.getState().loadTradeRecords();
  }, []);

  if (!isHydrated || loading) {
    return <Loading size={30} color={"blue"} />;
  }

  return (
    <>
      <Body updateStore={updateStore} />
      <Footer updateStore={updateStore} />
    </>
  );
}
