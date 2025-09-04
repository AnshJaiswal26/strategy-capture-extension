import { useCallback } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useExtensionStore } from "../../stores/useExtensionStore";
import Label from "../../components/Label/Label";
import Input from "../../components/Inputs/Input";
import Button from "../../components/Button/Button";

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
              <Label text={"Label:"} />
              <Input
                type={"input"}
                field={"inputCreaterLabel"}
                placeholder={"Enter Label"}
                onChange={(value) =>
                  updatePopupUI({ inputCreaterLabel: value })
                }
              />
            </div>
            <div className="row-input">
              <Label text={"Type:"} />
              <Input
                type={"dropdown"}
                field={"inputCreaterType"}
                options={["Input", "Dropdown", "Time"]}
                onChange={(value) => {
                  console.log(value);
                  updatePopupUI({ inputCreaterType: value.toLowerCase() });
                }}
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

  const updatePopupUIFromStore = useCallback((action) => {
    const popupUI = useExtensionStore.getState().popupUI;
    const label = popupUI.inputCreaterLabel;
    const type = popupUI.inputCreaterType;
    console.log([["addOptions", { label, type }, action]]);
    updatePopupUIBatch([["addOptions", { label, type }, action]]);
  }, []);

  return (
    <>
      <Button
        text={"Add"}
        type="fill"
        size="small"
        onClick={() => updatePopupUIFromStore("add")}
      />
      <Options />
    </>
  );
}

function Options() {
  const inputCreaterType = useExtensionStore((s) => s.popupUI.inputCreaterType);

  return inputCreaterType === "Dropdown" ? (
    <>
      <div className="row-input">
        <Label text={"Option:"} />
        <Input type={"input"} />
      </div>
      <Button text={"+ Add Option"} type="hollow" size="small" />
    </>
  ) : null;
}
