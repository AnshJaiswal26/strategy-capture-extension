import { useExtensionStore } from "@store";
import { ArrowRight, Check, Sheet } from "lucide-react";

export const SheetList = ({ updateStore }) => {
  const sheetNames = useExtensionStore((s) => s.sheetNames);
  const selectedSheet = useExtensionStore((s) => s.selectedSheet);
  const sheetStatus = useExtensionStore((s) => s.sheetStatus);

  if (sheetStatus === "DISCONNECTED") return null;

  if (sheetNames.length === 0) {
    return <span className="no-input-found">No sheets found</span>;
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
            className={`sheet-item ${selectedSheet === name ? "selected" : ""}`}
          >
            <div>
              <Sheet size={18} />
              <div className="sheet-name-wrapper">
                <span>{name}</span>
              </div>
            </div>
            {selectedSheet === name && (
              <Check size={18} className="check-icon" />
            )}
          </div>
        ))}
      </div>
    </>
  );
};
