import { Input } from "@components";
import { useExtensionStore } from "@store";
import CaptureInputsCreater from "./CaptureInputsCreater/CaptureInputsCreater";
import CreatedInputsGrid from "./CreatedInputsGrid";
import { inputs } from "./data";
import { handleChange } from "./handlers";

export default function RecentTab() {
  const updatePopupUIBatch = useExtensionStore((s) => s.updatePopupUIBatch);
  const isLengthZero = useExtensionStore(
    (s) => s.popupUI.captureMap.currentLength === 0
  );

  return (
    <>
      <div className="account-size-and-risk-wrapper">
        {inputs.map((input, i) => (
          <Input
            key={`input_${i}`}
            label={input.label}
            type={"number"}
            placeholder={input.placeHolder}
            selector={(s) => s.popupUI[input.field]}
            onChange={(v) => handleChange(input.field, v, updatePopupUIBatch)}
          />
        ))}
      </div>
      <CaptureInputsCreater />
      {isLengthZero ? (
        <div className="no-input-found">
          <span>No Capture Input Found</span>
        </div>
      ) : (
        <CreatedInputsGrid updatePopupUIBatch={updatePopupUIBatch} />
      )}
    </>
  );
}
