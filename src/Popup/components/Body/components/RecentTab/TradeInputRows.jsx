import { Pencil, Trash2 } from "lucide-react";
import { ColumnPicker, Input, Label, MoreButton } from "@components";
import { MAPPING_TYPES, MAPPINGS } from "@constants";
import { useExtensionStore } from "@store";
import { handleChange, handleDelete, handleEdit } from "./handlers";
import { useState } from "react";

export default function TradeInputRows({ updateStore }) {
  const isLengthZero = useExtensionStore(
    (s) => s.tradeInputs.fields.length === 0
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
        <Label text="Column" type="header" />
      </div>

      <TradeInputsGrid updateStore={updateStore} />
    </div>
  );
}

function TradeInputsGrid({ updateStore }) {
  const [drag, setDrag] = useState({ start: null, over: null });
  const tradeInputs = useExtensionStore((s) => s.tradeInputs);
  const selectedSheetIndex = useExtensionStore((s) => s.selectedSheetIndex);

  const handleReorder = (from, to) => {
    if (drag.start === null && drag.over === null) return;

    updateStore((s) => {
      const arr = s.tradeInputs.fields;
      const item = arr.splice(from, 1)[0];
      arr.splice(to, 0, item);
    });

    setDrag({ start: null, over: null });
  };

  return tradeInputs.fields.map((input, index) => (
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
        options={input?.options}
        selector={input.value}
        onChange={(v) =>
          updateStore((s) => handleChange(input.mappedWith, v, s, index))
        }
      />
      {input.type !== "dropdown" ? (
        <Input
          type="dropdown"
          options={MAPPINGS}
          selector={(s) => s.tradeInputs.fields[index].mappedWith}
          onChange={(v) => {
            updateStore((s) => {
              const obj = s.tradeInputs.fields[index];
              Object.assign(obj, { mappedWith: v, type: MAPPING_TYPES[v] });
            });
          }}
        />
      ) : (
        <div className="filler" />
      )}
      <ColumnPicker
        disabled={selectedSheetIndex === null}
        selector={(s) => s.tradeInputs.fields[index].mappedColumn}
        onChange={(v) =>
          updateStore((s) => {
            s.tradeInputs.fields[index].mappedColumn = v;
          })
        }
      />

      <MoreButton>
        <MoreButton.Option
          onClick={() => handleEdit(updateStore, input, index)}
        >
          <Pencil size={15} color="gray" /> <span>Edit</span>
        </MoreButton.Option>

        <MoreButton.Option onClick={() => handleDelete(updateStore, index)}>
          <Trash2 size={15} color="palevioletred" /> <span>Delete</span>
        </MoreButton.Option>
      </MoreButton>
    </div>
  ));
}
