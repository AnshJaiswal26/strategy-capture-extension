import { Fragment } from "react";
import { Trash } from "lucide-react";
import { Button, Input, Label } from "@components";
import { mapping } from "@data";
import { useExtensionStore } from "@store";

export default function InputGrid({ updatePopupUIBatch }) {
  return (
    <div className="backtesting-popup-content-grid">
      {["Labels", "Inputs", "Mappings"].map((field) => (
        <Label key={field} text={field} type="header" />
      ))}
      <div className="filler"></div>
      <CaptureRow updatePopupUIBatch={updatePopupUIBatch} />
    </div>
  );
}

function CaptureRow({ updatePopupUIBatch }) {
  const captureMap = useExtensionStore((s) => s.popupUI.captureMap);

  return captureMap.map((input, index) => (
    <Fragment key={index}>
      <Label text={input.label} />
      <Input
        type={input?.type}
        options={input?.options}
        selector={(s) => s.popupUI.captureMap[index].value}
        onChange={(v) =>
          updatePopupUIBatch([["captureMap", { value: v }, "update", index]])
        }
      />

      {input.type !== "dropdown" ? (
        <Input
          type="dropdown"
          options={mapping.keys}
          selector={(s) => s.popupUI.captureMap[index].mappingKey}
          onChange={(v) =>
            updatePopupUIBatch([
              [
                "captureMap",
                { mappingKey: v, type: mapping.type[v] },
                "update",
                index,
              ],
            ])
          }
        />
      ) : (
        <div className="filler"></div>
      )}

      <Button
        text={<Trash size={16} />}
        size="small"
        type="hollow"
        onClick={() =>
          updatePopupUIBatch([["captureMap", "", "delete", index]])
        }
      />
    </Fragment>
  ));
}

function AllCaptures() {
  return <div className="all-captures-wrapper"></div>;
}
