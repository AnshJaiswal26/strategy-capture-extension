import { SheetIdInput } from "./SheetIdInput";
import { SheetList } from "./SheetList";

export default function SheetsTab({ updateStore }) {
  return (
    <div className="sheet-list-wrapper">
      <SheetIdInput updateStore={updateStore} />
      <div className="sheet-list-section">
        <div>
          <SheetList updateStore={updateStore} />
        </div>
      </div>
    </div>
  );
}
