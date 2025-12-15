import "./ColumnPicker.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useExtensionStore } from "@/stores/useExtensionStore";

export default function ColumnPicker({
  onChange,
  selector = 0,
  disabled = false,
}) {
  const storeIndex =
    typeof selector === "function" ? useExtensionStore(selector) : selector;

  const [index, setIndex] = useState(storeIndex);
  const [input, setInput] = useState(indexToLetter(storeIndex));

  // keep in sync with store
  useEffect(() => {
    setIndex(storeIndex);
    setInput(indexToLetter(storeIndex));
  }, [storeIndex]);

  // index → column letter
  function indexToLetter(i) {
    let result = "";
    i++;
    while (i > 0) {
      const rem = (i - 1) % 26;
      result = String.fromCharCode(65 + rem) + result;
      i = Math.floor((i - 1) / 26);
    }
    return result;
  }

  // column letter → index
  function letterToIndex(str) {
    let index = 0;
    for (let i = 0; i < str.length; i++) {
      index = index * 26 + (str.charCodeAt(i) - 64);
    }
    return index - 1;
  }

  const update = (newIndex) => {
    if (newIndex < 0) return;

    const letter = indexToLetter(newIndex);
    setIndex(newIndex);
    setInput(letter);
    onChange?.(newIndex, letter);
  };

  const handleInputChange = (e) => {
    const value = e.target.value.toUpperCase().replace(/[^A-Z]/g, "");
    setInput(value);
  };

  const commitInput = () => {
    if (!input) return;

    const newIndex = letterToIndex(input);
    update(newIndex);
  };

  return (
    <div
      className={`cp-container ${disabled ? "disabled" : ""}`}
      title={disabled ? "Connect to sheet" : ""}
    >
      <button
        className="cp-btn"
        disabled={disabled || index === 0}
        onClick={() => update(index - 1)}
      >
        <ChevronLeft size={16} />
      </button>

      <input
        className="cp-input"
        value={input}
        disabled={disabled}
        onChange={handleInputChange}
        onBlur={commitInput}
        maxLength={3} // supports up to column ZZZ
      />

      <button
        className="cp-btn"
        disabled={disabled}
        onClick={() => update(index + 1)}
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
}
