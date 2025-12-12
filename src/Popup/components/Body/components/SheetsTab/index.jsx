import { useExtensionStore } from "@store";
import { SheetIdInput } from "./SheetIdInput";
import { SheetList } from "./SheetList";
import { Button, ColumnPicker } from "@components";
import { ArrowLeft, Trash2 } from "lucide-react";
import "./SheetsTab.css";

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
