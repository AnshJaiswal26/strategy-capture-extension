import { Button } from "@components";
import { Download } from "lucide-react";
import { handleDownload } from "./handlers";

export default function ToolBar({ length }) {
  return (
    <div className="all-captures-toolbar">
      <div className="entries">
        <span>Total Captures </span>
        <span>{length}</span>
      </div>

      {length !== 0 && (
        <Button
          text={<Download size={15} />}
          type={"hollow"}
          size="very-small"
          title={"Download All"}
          onClick={() => handleDownload(allCaptures)}
        />
      )}
    </div>
  );
}
