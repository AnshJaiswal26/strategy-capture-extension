import { Pencil, Trash2 } from "lucide-react";
import { Button, Input, Label } from "@components";
import { FIELD_TYPES, MAPPINGS } from "@constants";
import { useExtensionStore } from "@store";
import { handleChange } from "./handlers";
import { useState } from "react";

export default function TradeInputRows({ updateStore }) {
  const isLengthZero = useExtensionStore(
    (s) => s.captureMap.currentLength === 0
  );

  if (isLengthZero) {
    return (
      <div className="no-input-found">
        <span>No Capture Input Found</span>
      </div>
    );
  }

  return (
    <div className="backtesting-popup-inputs-flex">
      <div className="input-row header-row">
        <Label text="Labels" type="header" />
        <Label text="Inputs" type="header" />
        <Label text="Mappings" type="header" />
        <div className="filler" />
      </div>

      <InputGridRows updateStore={updateStore} />
    </div>
  );
}

function InputGridRows({ updateStore }) {
  const [drag, setDrag] = useState({ start: null, over: null });
  const captureMap = useExtensionStore((s) => s.captureMap);

  const handleReorder = (from, to) => {
    if (drag.start === null && drag.over === null) return;

    updateStore((s) => {
      const arr = s.captureMap;
      const item = arr.splice(from, 1)[0];
      arr.splice(to, 0, item);
    });

    setDrag({ start: null, over: null });
  };

  return captureMap.map((input, index) => (
    <div
      key={index}
      className={`input-row ${index === drag.over ? "drag-over" : ""} ${
        input.type !== "dropdown" ? "dropdown-row" : ""
      }`}
      draggable={true}
      onDragStart={() => setDrag({ start: index, over: index })}
      onDragEnter={() => setDrag((p) => ({ ...p, over: index }))}
      onDragEnd={() => handleReorder(drag.start, drag.over)}
    >
      <Label text={input.label} />
      <Input
        type={input.type}
        options={input.options}
        selector={input.value}
        onChange={(v) =>
          updateStore((s) => handleChange(input.mappedWith, v, s, index))
        }
      />
      {input.type !== "dropdown" ? (
        <Input
          type="dropdown"
          options={MAPPINGS}
          selector={(s) => s.captureMap[index].mappedWith}
          onChange={(v) => {
            updateStore((s) => {
              const obj = s.captureMap[index];
              Object.assign(obj, { mappedWith: v });
            });
          }}
        />
      ) : (
        <div className="filler" />
      )}
      <div className="edit-trash-btn-wrapper">
        <Button
          text={<Pencil size={16} />}
          size="small"
          type="hollow"
          onClick={() => {
            updateStore((s) => {
              Object.assign(s, {
                ...(input?.options && { inputOptions: input.options }),
                inputLabel: input.label,
                inputType: FIELD_TYPES[input.type],
                updatingIndex: index,
                showInputGenerator: true,
              });
            });
            const ele = document.getElementById("extension-popup-content");
            const section = !ele
              ? document
                  .getElementById("extension-shadow-root-wrapper")
                  .shadowRoot.getElementById("extension-popup-content")
              : ele;
            section.scrollTop = 70;
          }}
        />
        <Button
          text={<Trash2 size={16} />}
          size="small"
          type="fill"
          onClick={() =>
            updateStore((s) => {
              s.captureMap.splice(index, 1);
            })
          }
        />
      </div>
    </div>
  ));
}
