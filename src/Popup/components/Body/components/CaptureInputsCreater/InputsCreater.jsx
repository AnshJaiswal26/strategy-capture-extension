import { Input } from "@components";
import { useExtensionStore } from "@store";
import AddButton from "./AddButton";

export default function InputsCreater() {
  const updatePopupUI = useExtensionStore((s) => s.updatePopupUI);
  const updatePopupUIBatch = useExtensionStore((s) => s.updatePopupUIBatch);

  return (
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
      <AddButton updatePopupUIBatch={updatePopupUIBatch} />
    </>
  );
}
