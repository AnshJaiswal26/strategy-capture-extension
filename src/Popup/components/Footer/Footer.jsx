import { LoaderCircle, Save, SaveOff } from "lucide-react";
import { useExtensionStore } from "@store";
import { Button, Input, Label } from "@components";
import { handleBtnClick } from "./handlers";

export default function Footer() {
  const updatePopupUIBatch = useExtensionStore((s) => s.updatePopupUIBatch);
  const activeTab = useExtensionStore((s) => s.popupUI.Tab.currentTab);
  const isEdit = useExtensionStore((s) => s.popupUI.isEdit);

  const isAllCaptures = activeTab === "All Captures";

  return (
    <div className="backtesting-popup-footer-wrapper">
      <div className="backtesting-popup-footer">
        <div
          className={`backtesting-popup-footer-btn-wrapper ${
            isAllCaptures ? "space" : ""
          }`}
        >
          {isAllCaptures ? (
            <>
              <ToggleButton updater={updatePopupUIBatch} />
              <FirstBtn
                isAllCaptures={isAllCaptures}
                isEdit={isEdit}
                updater={updatePopupUIBatch}
              />
            </>
          ) : (
            <>
              <FirstBtn
                isAllCaptures={isAllCaptures}
                isEdit={isEdit}
                updater={updatePopupUIBatch}
              />
              <Button
                text={isEdit ? "Update" : "Add"}
                type={isAllCaptures && isAutoSave ? "hollow" : "fill"}
                onClick={() => handleBtnClick(1, updatePopupUIBatch)}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function ToggleButton({ updater }) {
  const isAutoSave = useExtensionStore((s) => s.popupUI.isAutoSaveEnabled);

  return (
    <Button
      type="toggle"
      text={"Auto-Save"}
      toggle={isAutoSave}
      onClick={() =>
        updater([{ name: "isAutoSaveEnabled", operation: "toggle" }])
      }
    />
  );
}

function FirstBtn({ isAllCaptures, isEdit, updater }) {
  const isSaved = useExtensionStore((s) => s.popupUI.isSaved);
  const isAutoSave = useExtensionStore((s) => s.popupUI.isAutoSaveEnabled);

  return (
    <Button
      text={isAllCaptures ? "Save" : isEdit ? "Cancel" : "Clear"}
      type={isSaved ? "fill" : "hollow"}
      onClick={() => handleBtnClick(0, updater)}
      disable={isAllCaptures && isAutoSave}
    />
  );
}

//https://script.google.com/macros/s/AKfycbxnx4tJ7vUxmEmN3IEw0JkrX3B301lIwhQL4E0NhVcN2soXZDbkf67uqiA5cw9Hd6s/exec
