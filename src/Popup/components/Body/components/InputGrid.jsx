import { Trash } from "lucide-react";
import { Button, Input, Label } from "@components";
import { mapping } from "@data";
import { useExtensionStore } from "@store";
import { Fragment } from "react";

export default function InputGrid({ updatePopupUIBatch }) {
  return (
    <div className="backtesting-popup-inputs-grid">
      {["Labels", "Inputs", "Mappings"].map((field) => (
        <Label key={field} text={field} type="header" />
      ))}
      <div className="filler"></div>
      <InputGridRows updatePopupUIBatch={updatePopupUIBatch} />
    </div>
  );
}

function InputGridRows({ updatePopupUIBatch }) {
  const length = useExtensionStore((s) => s.popupUI.captureMap.length);

  return Array.from({ length }).map((_, index) => (
    <Row key={index} index={index} updatePopupUIBatch={updatePopupUIBatch} />
  ));
}

function Row({ index, updatePopupUIBatch }) {
  const input = useExtensionStore((s) => s.popupUI.captureMap[index]);
  return (
    <>
      <Label text={input.label} />
      <Input
        type={input?.type}
        options={input?.options}
        selector={input.value}
        onChange={(v) =>
          updatePopupUIBatch([
            {
              name: "captureMap",
              payload: { value: v },
              operation: "update",
              index,
            },
          ])
        }
      />

      {input.type !== "dropdown" ? (
        <Input
          type="dropdown"
          options={mapping.keys}
          selector={(s) => s.popupUI.captureMap[index].mappingKey}
          onChange={(v) =>
            updatePopupUIBatch([
              {
                name: "captureMap",
                payload: { mappingKey: v, type: mapping.type[v] },
                operation: "update",
                index,
              },
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
          updatePopupUIBatch([
            { name: "captureMap", operation: "delete", index },
          ])
        }
      />
    </>
  );
}
