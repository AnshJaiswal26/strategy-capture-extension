import { useState } from "react";
import { useExtensionStore } from "@store";
import { Button } from "@components";

export default function Footer({ updateStore }) {
  const activeTabIndex = useExtensionStore((s) => s.activeTabIndex);
  const isEditing = useExtensionStore((s) => s.editingIndex !== null);

  return (
    <div className="backtesting-popup-footer-wrapper">
      <div className="backtesting-popup-footer">
        <div className={`backtesting-popup-footer-btn-wrapper space`}>
          {activeTabIndex === 0 ? (
            <Tab1Buttons updateStore={updateStore} isEditing={isEditing} />
          ) : (
            <Tab2Buttons />
          )}
        </div>
      </div>
    </div>
  );
}

function Tab1Buttons({ updateStore, isEditing }) {
  return (
    <>
      <Button
        text="Logout"
        type="hollow"
        onClick={() =>
          updateStore((s) => {
            s.userLoggedIn = false;
          })
        }
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
          onClick={() =>
            updateStore((s) => {
              const arr = s.allCaptures;
              if (s.editingIndex !== null && arr?.[s.editingIndex]) {
                Object.assign(arr[s.editingIndex], s.captureMap);
              } else arr.push(s.captureMap);

              s.editingIndex = null;
              s.activeTabIndex = 1;
            })
          }
        />
      </div>
    </>
  );
}

function Tab2Buttons() {
  const [autoSave, setAutoSave] = useState(false);

  return (
    <>
      <Button
        type="toggle"
        text={"Auto-Save"}
        toggle={autoSave}
        onClick={() => setAutoSave((p) => !p)}
      />
      <Button text="Save" type="hollow" onClick={() => null} />
    </>
  );
}

//https://script.google.com/macros/s/AKfycbxnx4tJ7vUxmEmN3IEw0JkrX3B301lIwhQL4E0NhVcN2soXZDbkf67uqiA5cw9Hd6s/exec
