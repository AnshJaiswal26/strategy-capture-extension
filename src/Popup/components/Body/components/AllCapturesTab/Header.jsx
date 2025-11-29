import { useState } from "react";
import { Button } from "@components";
import { handleCopyToClipBoard } from "./handlers";
import { Copy, CopyCheckIcon, Pencil, Trash2 } from "lucide-react";

export default function Header({ capture, index, updateStore }) {
  return (
    <div className="tool-header">
      <div>
        <CopyButton srcData={capture} />
        <div className="entries">
          <span>Columns </span>
          <span>{capture.length}</span>
        </div>
      </div>

      <div>
        <Button
          text={<Pencil size={15} />}
          type="hollow"
          size="very-small"
          onClick={() =>
            updateStore((s) => {
              s.activeTabIndex = 0;
              s.tradeInputs = s.tradeRecords[index];
              s.editingIndex = index;
            })
          }
        />
        <Button
          text={<Trash2 size={15} />}
          size="very-small"
          onClick={() =>
            updateStore((s) => {
              s.tradeRecords.splice(index, 1);
            })
          }
        />
      </div>
    </div>
  );
}

function CopyButton({ srcData }) {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <Button
      text={!isCopied ? <Copy size={15} /> : <CopyCheckIcon size={15} />}
      type={isCopied ? "fill" : "hollow"}
      size="very-small"
      disable={isCopied}
      onClick={() =>
        handleCopyToClipBoard(
          srcData.map(({ label, value }) => `${label}: ${value}`).join("\n"),
          setIsCopied
        )
      }
    />
  );
}
