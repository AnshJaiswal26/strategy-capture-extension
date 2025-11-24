import { useState } from "react";
import { Button } from "@components";
import { useExtensionStore } from "@store";
import { copyToClipBoard, handleEdit } from "./handlers";
import { Copy, CopyCheckIcon, Pencil, Trash } from "lucide-react";

export default function Header({ capture, index, updateStore }) {
  return (
    <div className="tool-header">
      <div>
        <CopyButton
          text={capture
            .map(({ label, value }) => `${label}: ${value}`)
            .join("\n")}
        />
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
              s.captureMap = s.allCaptures[index];
              s.editingIndex = index;
            })
          }
        />
        <Button
          text={<Trash size={15} />}
          size="very-small"
          onClick={() =>
            updateStore((s) => {
              s.allCaptures.splice(index, 1);
            })
          }
        />
      </div>
    </div>
  );
}

function CopyButton({ text }) {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <Button
      text={!isCopied ? <Copy size={15} /> : <CopyCheckIcon size={15} />}
      type={isCopied ? "fill" : "hollow"}
      size="very-small"
      onClick={() => copyToClipBoard(text, isCopied, setIsCopied)}
    />
  );
}
