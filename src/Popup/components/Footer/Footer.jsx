import { useState } from "react";
import { useExtensionStore } from "@store";
import { Button } from "@components";

export default function Footer({ updateStore }) {
  const activeTabIndex = useExtensionStore((s) => s.activeTabIndex);
  const isEditing = useExtensionStore((s) => s.editingIndex !== null);

  return (
    <div className="backtesting-popup-footer-wrapper">
      <div className="backtesting-popup-footer">
        {activeTabIndex === 0 ? (
          <Tab1Buttons updateStore={updateStore} isEditing={isEditing} />
        ) : activeTabIndex === 1 ? (
          <Tab2Buttons />
        ) : (
          <Tab3Buttons />
        )}
      </div>
    </div>
  );
}

function Tab1Buttons({ updateStore, isEditing }) {
  const [loading, setLoading] = useState(false);

  return (
    <div className="footer-btn-wrapper space">
      {/* <Button
        text="Logout"
        type="hollow"
        onClick={() =>
          updateStore((s) => {
            s.userLoggedIn = false;
          })
        }
      /> */}
      <Button
        text="Export to sheets"
        type="hollow"
        onClick={async () => {
          setLoading(true);
          await useExtensionStore.getState().appendDataToSheet();
          setLoading(false);
        }}
        loading={loading}
      />
      <div className="footer-right-side-btn">
        {isEditing && (
          <Button
            text="Cancel"
            type="hollow"
            onClick={() =>
              updateStore((s) => {
                s.editingIndex = null;
              })
            }
          />
        )}
        <Button
          text={isEditing ? "Update" : "Add"}
          type="fill"
          onClick={
            isEditing
              ? useExtensionStore.getState().updateTradeRecord
              : useExtensionStore.getState().addTradeRecord
          }
        />
      </div>
    </div>
  );
}

function Tab2Buttons() {
  const tradeRecords = useExtensionStore((s) => s.tradeRecords);

  return (
    <div className="footer-btn-wrapper">
      <Button
        text="Download"
        type="hollow"
        disable={tradeRecords.length === 0}
        onClick={() => {
          const csvContent = tradeRecords
            .map((row) => row.fields.map(({ value }) => value).join(","))
            .join("\n");
          const blob = new Blob([csvContent], {
            type: "text/csv;chartset=utf-8;",
          });
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = "captures.csv";
          link.click();
        }}
      />
    </div>
  );
}

function Tab3Buttons() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="footer-btn-wrapper">
      <Button
        text="Export"
        type="hollow"
        onClick={async () => {
          setLoading(true);
          await useExtensionStore.getState().appendDataToSheet();
          setLoading(false);
        }}
        loading={loading}
      />
    </div>
  );
}

//https://script.google.com/macros/s/AKfycbxnx4tJ7vUxmEmN3IEw0JkrX3B301lIwhQL4E0NhVcN2soXZDbkf67uqiA5cw9Hd6s/exec
