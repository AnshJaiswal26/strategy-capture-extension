import { LoaderCircle, Save, SaveOff } from "lucide-react";
import Button from "../../components/Button/Button";
import { useExtensionStore } from "@store";

export default function Footer() {
  const updatePopupUIBatch = useExtensionStore((s) => s.updatePopupUIBatch);
  const activeTab = useExtensionStore((s) => s.popupUI.activeTab);
  const isEdit = useExtensionStore((s) => s.popupUI.isEdit);

  const isAllCaptures = activeTab === "All Captures";

  return (
    <div className="backtesting-popup-footer-wrapper">
      <div className="backtesting-popup-footer">
        <div className="backtesting-popup-footer-btn-wrapper">
          <FistBtn
            isAllCaptures={isAllCaptures}
            isEdit={isEdit}
            updater={updatePopupUIBatch}
          />
          <SecondBtn
            isAllCaptures={isAllCaptures}
            isEdit={isEdit}
            updater={updatePopupUIBatch}
          />
        </div>
      </div>
    </div>
  );
}

function FistBtn({ isAllCaptures, isEdit, updater }) {
  const isSaved = useExtensionStore((s) => s.popupUI.isSaved);

  const getText = () => {
    if (isAllCaptures) {
      return isSaved ? (
        <LoaderCircle
          size={16}
          strokeWidth={3}
          style={{ animation: "spin 1s linear infinite" }}
        />
      ) : (
        "Save To Sheets"
      );
    } else return isEdit ? "Cancel" : "Clear";
  };

  return (
    <Button
      text={getText()}
      type={isSaved ? "fill" : "hollow"}
      onClick={() => {
        if (isAllCaptures) {
          if (isSaved) return;
          updater([{ name: "isSaved", payload: true }]);
          setTimeout(() => updater([{ name: "isSaved", payload: false }]), 300);
        }
        if (isEdit) {
          updater([{ name: "isEdit", payload: false }]);
        }
      }}
    />
  );
}

function SecondBtn({ isAllCaptures, isEdit, updater }) {
  const isAutoSave = useExtensionStore((s) => s.popupUI.isAutoSaveEnabled);

  const getText = () => {
    if (isAllCaptures) {
      return (
        <>
          {isAutoSave ? <SaveOff size={16} /> : <Save size={16} />}
          <div>Auto-Save</div>
        </>
      );
    } else return isEdit ? "Update" : "Add";
  };
  return (
    <Button
      text={getText()}
      title={
        isAllCaptures
          ? isAutoSave
            ? "Disable Auto-Save"
            : "Enable Auto-Save"
          : ""
      }
      type={isAllCaptures && isAutoSave ? "hollow" : "fill"}
      onClick={() => {
        const updatesArr = [];

        if (isAllCaptures) {
          updatesArr.push({ name: "isAutoSavedEnabled", operation: "toggle" });
        } else if (isEdit) {
          updatesArr.push({ name: "allCaptures", operation: "update" });
          updatesArr.push({ name: "isEdit", payload: false });
          document.getElementById("tab-all-captures")?.click();
        } else {
          updatesArr.push({ name: "allCaptures", operation: "add" });
        }

        updater(updatesArr);
      }}
    />
  );
}

//https://script.google.com/macros/s/AKfycbxnx4tJ7vUxmEmN3IEw0JkrX3B301lIwhQL4E0NhVcN2soXZDbkf67uqiA5cw9Hd6s/exec
