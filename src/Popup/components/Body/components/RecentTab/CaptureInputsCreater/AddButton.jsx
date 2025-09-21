import { Button } from "@components";
import { useExtensionStore } from "@store";
import DropdownCreater from "./DropdownCreater";
import { createInput } from "./utils";

export default function AddButton({ updatePopupUIBatch }) {
  const isDropdown = useExtensionStore(
    (s) => s.popupUI.inputCreaterType === "Dropdown"
  );
  const isOptionsLengthZero = useExtensionStore(
    (s) => s.popupUI.addOptions.length === 0 && isDropdown
  );
  const isAnyOptionEmpty = useExtensionStore(
    (s) => s.popupUI.addOptions.includes("") && isDropdown
  );
  const isLabelEmpty = useExtensionStore(
    (s) => s.popupUI.inputCreaterLabel === ""
  );

  return (
    <>
      <Button
        text="Add"
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
        onClick={() => createInput("add", updatePopupUIBatch)}
      />

      {isDropdown && (
        <DropdownCreater updatePopupUIBatch={updatePopupUIBatch} />
      )}
    </>
  );
}
