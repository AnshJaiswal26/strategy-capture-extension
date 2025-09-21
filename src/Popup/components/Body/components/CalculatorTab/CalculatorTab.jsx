import { Input } from "@components";
import { useExtensionStore } from "@store";
// import { handleChange } from "./handlers";
import { inputs } from "./data";

export default function CalculatorTab() {
  const updatePopupUIBatch = useExtensionStore((s) => s.updatePopupUIBatch);

  return (
    <div className="calculator-charges-wrapper">
      <div className="charges-panel"></div>
      <div className="calculator-wrapper">
        <div className="calculator">
          {inputs.map((input, i) => (
            <Input
              key={`input_${i}`}
              label={input.label}
              type={"number"}
              selector={(s) => s.popupUI[input.field]}
              // onChange={(v) => handleChange(input.field, v, updatePopupUIBatch)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
