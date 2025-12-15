import { useExtensionStore } from "@store";
import { Check, Sheet } from "lucide-react";

export const SheetList = ({ updateStore }) => {
  const sheets = useExtensionStore((s) => s.sheets);
  const selectedSheetIndex = useExtensionStore((s) => s.selectedSheetIndex);
  const sheetStatus = useExtensionStore((s) => s.sheetStatus);

  if (sheetStatus === "DISCONNECTED") return null;

  if (sheets.length === 0) {
    return <span className="no-input-found">No sheets found</span>;
  }

  return (
    <>
      <label className="label">Select Sheet</label>
      <div className="sheet-list">
        {sheets.map(({ name }, i) => (
          <div
            key={i}
            onClick={() =>
              updateStore((s) => {
                s.selectedSheetIndex = i;
              })
            }
            className={`sheet-item ${
              selectedSheetIndex === i ? "selected" : ""
            }`}
          >
            <div>
              <Sheet size={18} />
              <div className="sheet-name-wrapper">
                <span>{name}</span>
              </div>
            </div>
            {selectedSheetIndex === i && (
              <Check size={18} className="check-icon" />
            )}
          </div>
        ))}
      </div>
    </>
  );
};
