import { Button } from "@components";
import { useExtensionStore } from "@store";
import DropdownCreater from "./DropdownCreater";
import { createInput } from "./utils";
import { repeatElement } from "@utils";
import { X } from "lucide-react";

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

  const isUpdate = useExtensionStore((s) => s.popupUI.isUpdate);

  return (
    <>
      <div
        className={`add-and-update-btn-wrapper ${
          isUpdate.value ? "update" : ""
        }`}
      >
        <Button
          text={isUpdate.value ? "Update" : "Add"}
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
          onClick={() => createInput(updatePopupUIBatch, isUpdate)}
        />
        {isUpdate.value && (
          <>
            {repeatElement(<div className="filler"></div>)}
            <Button
              text={<X size={18} />}
              type="fill"
              size="medium"
              onClick={() =>
                updatePopupUIBatch([
                  { name: "isUpdate", payload: { value: false } },
                  { name: "addOptions", payload: [], operation: "edit" },
                  { name: "inputCreaterLabel", payload: "" },
                  { name: "inputCreaterType", payload: "Number" },
                ])
              }
            />
          </>
        )}
      </div>
      {isDropdown && (
        <DropdownCreater updatePopupUIBatch={updatePopupUIBatch} />
      )}
    </>
  );
}
