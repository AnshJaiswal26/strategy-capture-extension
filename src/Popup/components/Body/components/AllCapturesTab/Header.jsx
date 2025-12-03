import { useState } from "react";
import { Button } from "@components";
import { handleCopyToClipBoard } from "./handlers";
import { Copy, CopyCheckIcon, Pencil, Trash2 } from "lucide-react";
import { useExtensionStore } from "@/stores/useExtensionStore";

export default function Header({ capture, index, timeStamp, updateStore }) {
  const date = new Date(timeStamp);

  return (
    <div className="tool-header">
      <div>
        <CopyButton srcData={capture} />
        <div className="timestamp">
          <span>Columns </span>
          <span>{capture.length}</span>
        </div>
      </div>

      <div>
        <div className="timestamp">
          <span>{date.toLocaleDateString()}</span>
          <span>{date.toLocaleTimeString()}</span>
        </div>
        <Button
          text={<Pencil size={15} />}
          type="hollow"
          size="very-small"
          title={"Edit"}
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
          title={"Delete"}
          onClick={async () => {
            await useExtensionStore.getState().deleteTradeRecord(index);
          }}
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
      title={"Copy"}
      onClick={() =>
        handleCopyToClipBoard(
          srcData.map(({ label, value }) => `${label}: ${value}`).join("\n"),
          setIsCopied
        )
      }
    />
  );
}
