import { useEffect, useState } from "react";
import { Button } from "@components";
import { Input } from "@components";
import { CheckCircle, Sheet, ArrowRight, X, ArrowLeft } from "lucide-react";
import "./SheetsTab.css";
import { useExtensionStore } from "@/stores/useExtensionStore";

export const ConnectionMessage = () => {
  const sheetStatus = useExtensionStore((s) => s.sheetStatus);
  const showMsg = useExtensionStore((s) => s.showMsg);

  if (!showMsg) return null;

  return sheetStatus === "CONNECTED" ? (
    <div className="success">
      <CheckCircle size={20} /> Connected Successfully!
    </div>
  ) : sheetStatus === "ERROR" ? (
    <div className="error">
      <X size={20} /> Failed to Connect. Try Again.
    </div>
  ) : null;
};

export const ConnectButton = ({ updateStore }) => {
  const isSheetIdEmpty = useExtensionStore((s) => s.sheetId === "");
  const status = useExtensionStore((s) => s.sheetStatus);

  const handleDisconnect = () => {
    updateStore((s) => {
      s.sheetStatus = "";
      s.sheetId = "";
      s.sheetNames = [];
      s.selectedSheet = "";
    });
  };

  return (
    <Button
      text={
        <div className="connect-button-text">
          {status !== "CONNECTED" ? (
            <>
              Connect <ArrowRight size={18} />
            </>
          ) : (
            <>
              <ArrowLeft size={18} /> Disconnect
            </>
          )}
        </div>
      }
      loading={status === "CONNECTING.."}
      disable={isSheetIdEmpty && !status === ""}
      onClick={
        status !== "CONNECTED"
          ? useExtensionStore.getState().connectToSheet
          : handleDisconnect
      }
    />
  );
};

export const SheetIdInput = ({ updateStore }) => {
  return (
    <div className="sheet-input">
      <label className="label">Google Sheet ID</label>

      <Input
        placeholder="Enter Sheet ID..."
        selector={(s) => s.sheetId}
        onChange={(v) =>
          updateStore((s) => {
            s.sheetId = v;
          })
        }
      />
      <ConnectButton updateStore={updateStore} />
    </div>
  );
};

export default function SheetsTab({ updateStore }) {
  return (
    <div className="wrapper">
      <SheetIdInput updateStore={updateStore} />
      <div className="sheet-list-section">
        <ConnectionMessage />
        <div>
          <SheetList updateStore={updateStore} />
        </div>
      </div>
    </div>
  );
}

function SheetList({ updateStore }) {
  const sheetNames = useExtensionStore((s) => s.sheetNames);
  const selectedSheet = useExtensionStore((s) => s.selectedSheet);

  if (sheetNames.length === 0) {
    return <span className="no-input-found">No sheets found!</span>;
  }

  return (
    <>
      <label className="label">Select Sheet</label>
      <div className="sheet-list">
        {sheetNames.map((name, i) => (
          <div
            key={i}
            onClick={() =>
              updateStore((s) => {
                s.selectedSheet = name;
              })
            }
            className={`sheet-item ${
              selectedSheet === name ? "sheet-selected" : ""
            }`}
          >
            <div>
              <Sheet size={18} />
              <span>{name}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
