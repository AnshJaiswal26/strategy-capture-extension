import { Fragment, useCallback } from "react";
import { ChevronDown, ChevronUp, Trash } from "lucide-react";
import { useExtensionStore } from "@store";
import { Input, Button } from "@components";
import { createInput, repeatElement } from "@utils";

export default function CaptureMapCreater() {
  const isCaptureMapExpanded = useExtensionStore(
    (s) => s.popupUI.isCaptureMapExpanded
  );
  const updatePopupUI = useExtensionStore((s) => s.updatePopupUI);

  return (
    <div className="input-creater-wrapper">
      <div
        className="input-creater"
        onClick={() =>
          updatePopupUI({ isCaptureMapExpanded: !isCaptureMapExpanded })
        }
      >
        <div>
          <div className="title">Create Capture Inputs</div>
        </div>
        <div>
          {isCaptureMapExpanded ? (
            <ChevronUp size={16} />
          ) : (
            <ChevronDown size={16} />
          )}
        </div>
      </div>

      <div
        className={`input-creater-row-wrapper${
          isCaptureMapExpanded ? " expand" : ""
        }`}
      >
        {isCaptureMapExpanded && (
          <>
            <div className="row-input">
              <Input
                label={"Label"}
                type={"text"}
                placeholder={"Enter Label"}
                selector={(s) => s.popupUI.inputCreaterLabel}
                onChange={(v) => updatePopupUI({ inputCreaterLabel: v })}
              />
            </div>
            <div className="row-input">
              <Input
                label={"Type"}
                type={"dropdown"}
                selector={(s) => s.popupUI.inputCreaterType}
                options={["Number", "Text", "Dropdown", "Time", "Date"]}
                onChange={(v) => updatePopupUI({ inputCreaterType: v })}
              />
            </div>
            <AddButton />
          </>
        )}
      </div>
    </div>
  );
}

function AddButton() {
  const updatePopupUIBatch = useExtensionStore((s) => s.updatePopupUIBatch);
  const isNoOption = useExtensionStore(
    (s) => s.popupUI.addOptions.length === 0
  );
  const isAnyOptionEmpty = useExtensionStore((s) =>
    s.popupUI.addOptions.includes("")
  );

  const isDropdown = useExtensionStore(
    (s) => s.popupUI.inputCreaterType === "Dropdown"
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
      <Options
        updatePopupUIBatch={updatePopupUIBatch}
        isDropdown={isDropdown}
      />
    </>
  );
}

function Options({ updatePopupUIBatch, isDropdown }) {
  if (!isDropdown) return null;

  const addOptions = useExtensionStore((s) => s.popupUI.addOptions);

  return (
    <>
      {addOptions.map((option, index) => (
        <Fragment key={`-${index}`}>
          <div className="row-input">
            <Input
              type={"input"}
              field={"addOptions"}
              placeholder={`Option ${index + 1}`}
              selector={option}
              onChange={(v) =>
                updatePopupUIBatch([["addOptions", v, "update", index]])
              }
            />
          </div>

          <Button
            text={<Trash size={16} />}
            size="small"
            type="hollow"
            onClick={() =>
              updatePopupUIBatch([["addOptions", "", "delete", index]])
            }
          />
          <div className="filler"></div>
        </Fragment>
      ))}

      {repeatElement(<div className="filler"></div>, 2)}
      <Button
        text={"+ Add Option"}
        type="hollow"
        size="very-small"
        onClick={() => updatePopupUIBatch([["addOptions", "", "add"]])}
      />
    </>
  );
}
