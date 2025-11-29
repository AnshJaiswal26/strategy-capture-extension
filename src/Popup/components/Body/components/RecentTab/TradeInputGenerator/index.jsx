import AddButton from "./AddButton";
import { Input, TopDownSlider } from "@components";
import DropdownGenerator from "./DropdownGenerator";

export default function TradeInputGenerator({ updateStore }) {
  return (
    <TopDownSlider
      title={"Create Capture Inputs"}
      value={(s) => s.showInputGenerator}
      onClick={() =>
        updateStore((s) => {
          s.showInputGenerator = !s.showInputGenerator;
        })
      }
    >
      <div className="inputs-generator-wrapper">
        <div className="inputs-section">
          <Input
            label={"Label"}
            type={"text"}
            placeholder={"Enter Label"}
            selector={(s) => s.inputLabel}
            onChange={(v) =>
              updateStore((s) => {
                s.inputLabel = v;
              })
            }
          />
          <Input
            label={"Type"}
            type={"dropdown"}
            selector={(s) => s.inputType}
            options={["Text", "Number", "Dropdown", "Time", "Date"]}
            onChange={(v) =>
              updateStore((s) => {
                s.inputType = v;
              })
            }
          />
        </div>

        <DropdownGenerator updateStore={updateStore} />
      </div>

      <div>
        <AddButton updateStore={updateStore} />
      </div>
    </TopDownSlider>
  );
}
