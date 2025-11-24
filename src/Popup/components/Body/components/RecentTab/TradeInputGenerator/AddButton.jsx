import { Button } from "@components";
import { mapping } from "@data";
import { useExtensionStore } from "@store";
import { X } from "lucide-react";

const timeAndDate = (type) => {
  const now = new Date();

  const map = {
    time: now.toLocaleTimeString("en-IN", { hour12: false }),
    date: now,
    weekday: now.toLocaleDateString("en-IN", { weekday: "long" }),
  };

  return map[type] ?? map.weekday;
};

export default function AddButton({ updateStore }) {
  const isDropdown = useExtensionStore((s) => s.inputType === "Dropdown");
  const isOptionsLengthZero = useExtensionStore(
    (s) => s.inputOptions.length === 0 && isDropdown
  );
  const isAnyOptionEmpty = useExtensionStore(
    (s) => s.inputOptions.includes("") && isDropdown
  );
  const isLabelEmpty = useExtensionStore((s) => s.inputLabel === "");
  const updatingIndex = useExtensionStore((s) => s.updatingIndex);

  const resetInputs = (s) => {
    Object.assign(s, {
      updatingIndex: null,
      inputOptions: [],
      inputLabel: "",
      inputType: "",
    });
  };

  const handleClick = (s) => {
    const label = s.inputLabel;
    const type = s.inputType.toLowerCase();
    const mappedWith = mapping.keys.includes(label) ? label : "None";

    const payload = {
      label,
      type,
      ...(type === "dropdown" && { options: s.inputOptions }),
      ...(!updatingIndex && {
        value: ["date", "time", "day"].includes(type) ? timeAndDate() : 0,
        mappedWith,
      }),
    };

    if (updatingIndex) {
      Object.assign(s.captureMap[updatingIndex], payload);
      resetInputs(s);
    } else {
      s.captureMap.push(payload);
      setTimeout(() => {
        const ele = document.getElementById("extension-popup-content");
        const section = !ele
          ? document
              .getElementById("extension-shadow-root-wrapper")
              .shadowRoot.getElementById("extension-popup-content")
          : ele;
        section.scrollTop = section.scrollHeight + 100;
        section.lastChild.lastChild.classList.add("drag-over");
        setTimeout(() => {
          section.lastChild.lastChild.classList.remove("drag-over");
        }, 500);
      }, 100);
    }
  };

  return (
    <>
      <div className="add-button-wrapper">
        <Button
          text={updatingIndex ? "Update" : "Add"}
          type="fill"
          size="medium"
          title={
            isOptionsLengthZero
              ? "Please add at least one option"
              : isLabelEmpty
              ? "Label is required"
              : isAnyOptionEmpty
              ? "Please fill out all options"
              : ""
          }
          disable={isOptionsLengthZero || isLabelEmpty || isAnyOptionEmpty}
          onClick={() => updateStore(handleClick)}
        />
        {updatingIndex && (
          <Button
            text={<X size={18} />}
            type="fill"
            size="medium"
            onClick={() => updateStore(resetInputs)}
          />
        )}
      </div>
    </>
  );
}
