import { highlightRow } from "@/utils";
import { Button } from "@components";
import { MAPPING_TYPES, MAPPINGS } from "@constants";
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
    const mappedWith = MAPPINGS.includes(label) ? label : "None";
    const type =
      mappedWith === "None"
        ? s.inputType.toLowerCase()
        : MAPPING_TYPES[mappedWith];

    const updatingIndex = s.updatingIndex;

    const payload = {
      label,
      type,
      ...(updatingIndex === null && {
        value: ["date", "time"].includes(type) ? timeAndDate(type) : 0,
        mappedWith,
      }),
      ...(type === "dropdown" && {
        options: s.inputOptions,
        value: s.inputOptions[0],
      }),
    };

    if (updatingIndex !== null) {
      Object.assign(s.tradeInputs[updatingIndex], payload);
      resetInputs(s);
    } else {
      s.tradeInputs.push(payload);
    }

    highlightRow(updatingIndex !== null ? updatingIndex + 1 : null);
  };

  return (
    <>
      <div className="add-button-wrapper">
        <Button
          text={updatingIndex !== null ? "Update" : "Add"}
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
        {updatingIndex !== null && (
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
