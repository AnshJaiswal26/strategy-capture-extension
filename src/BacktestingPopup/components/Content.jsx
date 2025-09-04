import { Fragment, useCallback } from "react";
import { useExtensionStore } from "../../stores/useExtensionStore";
import { Button, Input } from "../../components/index";
import { Trash } from "lucide-react";
import Label from "../../components/Label/Label";
import CaptureMapCreater from "./CaptureMapCreater";
import { extractText } from "../../utils/canvasToText";

export default function Content({ inputArray }) {
  const captureMap = useExtensionStore((s) => s.popupUI.captureMap);

  extractText().then((text) => console.log(text));

  return (
    <>
      <div className="backtesting-popup-content">
        <CaptureMapCreater />
        {captureMap.length === 1 ? (
          <div className="no-input-found">
            <span>No Capture Input Found</span>
          </div>
        ) : (
          <InputGrid inputArray={inputArray} />
        )}
      </div>
    </>
  );
}

function InputGrid({ inputArray }) {
  return (
    <div className="backtesting-popup-content-grid">
      {["Labels", "Inputs", "Mappings"].map((field) => (
        <Label key={field} text={field} type="header" />
      ))}
      <div className="filler"></div>

      {inputArray.map((input, index) => (
        <Fragment key={index}>
          <Label text={input.label} />
          <Input
            value={input?.value}
            type={input?.type}
            options={input?.options}
          />
          <Mappings type={input.type} />

          <Button text={<Trash size={16} />} size="small" type="hollow" />
        </Fragment>
      ))}
    </div>
  );
}

function Mappings({ type }) {
  return type === "input" ? (
    <Input
      type="dropdown"
      options={[
        "None",
        "Time",
        "Date",
        "Day",
        "Time Frame",
        "Risk/Reward",
        "Pnl",
        "Cummulative Pnl",
        "Trade Number",
        "Result",
      ]}
    />
  ) : (
    <div className="filler"></div>
  );
}
