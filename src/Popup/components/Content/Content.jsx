import { useMemo } from "react";
import { Input } from "@components";
import { useExtensionStore } from "@store";
import CaptureMapCreater from "./CaptureMapCreater";
import InputGrid from "./InputGrid";

export default function Content() {
  const updatePopupUI = useExtensionStore((s) => s.updatePopupUI);
  const updatePopupUIBatch = useExtensionStore((s) => s.updatePopupUIBatch);
  const isLengthZero = useExtensionStore(
    (s) => s.popupUI.captureMap.length === 0
  );

  const inputs = useMemo(() => [
    { l: "Account Size", pH: "Enter Capital", f: "accountSize" },
    { l: "Risk (%)", pH: "Enter risk (%)", f: "riskPercent" },
    { l: "Risk (₹)", pH: "Enter risk (₹)", f: "riskAmount" },
  ]);

  return (
    <>
      <div className="backtesting-popup-content">
        <div className="account-size-and-risk-wrapper">
          {inputs.map((input, i) => (
            <Input
              key={`input_${i}`}
              label={input.l}
              type={"number"}
              placeholder={input.pH}
              selector={(s) => s.popupUI[input.f]}
              onChange={(v) => updatePopupUI({ [input.f]: v })}
            />
          ))}
        </div>
        <CaptureMapCreater />
        {isLengthZero ? (
          <div className="no-input-found">
            <span>No Capture Input Found</span>
          </div>
        ) : (
          <InputGrid updatePopupUIBatch={updatePopupUIBatch} />
        )}
      </div>
    </>
  );
}
