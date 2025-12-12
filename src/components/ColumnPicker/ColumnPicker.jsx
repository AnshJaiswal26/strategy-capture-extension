import "./ColumnPicker.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useExtensionStore } from "@/stores/useExtensionStore";

export default function ColumnPicker({
  onChange,
  selector = 0,
  disabled = false,
}) {
  const index =
    typeof selector === "function" ? useExtensionStore(selector) : selector;

  // index → column letter
  const indexToLetter = (i) => {
    let result = "";
    i++;
    while (i > 0) {
      let rem = (i - 1) % 26;
      result = String.fromCharCode(65 + rem) + result;
      i = Math.floor((i - 1) / 26);
    }
    return result;
  };

  const update = (val) => {
    onChange?.(val, indexToLetter(val));
  };

  return (
    <div
      className={`cp-container ${disabled ? "disabled" : ""}`}
      title={disabled ? "Connect to sheets" : ""}
    >
      <button className="cp-btn" onClick={() => index > 0 && update(index - 1)}>
        <ChevronLeft size={16} />
      </button>

      <div>
        <span className="cp-display">{indexToLetter(index)}</span>
      </div>

      <button className="cp-btn" onClick={() => update(index + 1)}>
        <ChevronRight size={16} />
      </button>
    </div>
  );
}
