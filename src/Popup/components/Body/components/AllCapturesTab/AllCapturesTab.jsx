import { useExtensionStore } from "@store";
import Header from "./Header";
import { Button } from "@components";
import { Download } from "lucide-react";
import { handleDownload } from "./handlers";

export default function AllCapturesTab({ updateStore }) {
  const allCaptures = useExtensionStore((s) => s.allCaptures);

  return (
    <>
      <div className="all-captures-toolbar">
        <div className="entries">
          <span>Total Captures </span>
          <span>{allCaptures.length}</span>
        </div>

        {allCaptures.length !== 0 && (
          <Button
            text={<Download size={15} />}
            type={"hollow"}
            size="very-small"
            title={"Download All"}
            onClick={() => handleDownload(allCaptures)}
          />
        )}
      </div>

      <div className="all-captures-content-wrapper">
        {allCaptures.length === 0 ? (
          <div className="no-input-found">
            <span>No Captures Found</span>
          </div>
        ) : (
          allCaptures.map((capture, index) => (
            <div className="all-captures-row-wrapper" key={index}>
              <Header
                capture={capture}
                index={index}
                updateStore={updateStore}
              />

              <div className="all-captures-row">
                {capture.map(({ label, value }, i) => (
                  <div className="column" key={i}>
                    <div className="key">{label}</div>
                    <div className="value">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
