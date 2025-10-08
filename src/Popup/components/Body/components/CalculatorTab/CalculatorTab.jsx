import { ButtonSelector, Input, TopDownSlider } from "@components";
import { useExtensionStore } from "@store";
// import { handleChange } from "./handlers";
import { inputs } from "./data";

export default function CalculatorTab() {
  const updatePopupUIBatch = useExtensionStore((s) => s.updatePopupUIBatch);

  return (
    <div className="calculator-charges-wrapper">
      <TopDownSlider title={"Charges Panel"}>
        <div className="charges-panel"></div>
      </TopDownSlider>
      <div className="calculators-tab-and-calculator-wrapper">
        <Input
          label={"Risk/Reward"}
          type={"text"}
          // selector={(s) => s.popupUI["Risk/Reward"]}
          // onChange={(v) => handleChange(input.field, v, updatePopupUIBatch)}
        />
        <div className="calculator-wrapper">
          <div className="title">
            <span>Charges Calculator</span>
          </div>
          <div className="calculator">
            {inputs.map((input, i) => (
              <Input
                key={`input_${i}`}
                label={input.label}
                type={"text"}
                selector={(s) => s.popupUI[input.field]}
                // onChange={(v) => handleChange(input.field, v, updatePopupUIBatch)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
