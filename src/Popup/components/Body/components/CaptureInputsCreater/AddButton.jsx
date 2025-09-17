import { Button } from "@components";
import { useExtensionStore } from "@store";
import DropdownCreater from "./DropdownCreater";
import { createInput } from "@utils";

export default function AddButton({ updatePopupUIBatch }) {
  const isNoOption = useExtensionStore(
    (s) => s.popupUI.addOptions.length === 0
  );
  const isAnyOptionEmpty = useExtensionStore((s) =>
    s.popupUI.addOptions.includes("")
  );
  const isDropdown = useExtensionStore(
    (s) => s.popupUI.inputCreaterType === "dropdown"
  );
  const isLabelEmpty = useExtensionStore(
    (s) => s.popupUI.inputCreaterLabel === ""
  );
  const isOptionsLengthZero = isNoOption && isDropdown;
  const isOptionEmpty = isAnyOptionEmpty && isDropdown;

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
            : isOptionEmpty
            ? "Please fill out all options"
            : ""
        }
        disable={isOptionsLengthZero || isLabelEmpty || isOptionEmpty}
        onClick={() => createInput("add", updatePopupUIBatch)}
      />

      {isDropdown && (
        <DropdownCreater updatePopupUIBatch={updatePopupUIBatch} />
      )}
    </>
  );
}
