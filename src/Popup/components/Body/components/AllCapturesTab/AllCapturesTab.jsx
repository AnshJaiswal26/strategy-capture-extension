import { useExtensionStore } from "@store";
import Header from "./Header";
import { Button } from "@components";
import { Download } from "lucide-react";
import { handleDownload } from "./handlers";

export default function AllCapturesTab({ updateStore }) {
  const tradeRecords = useExtensionStore((s) => s.tradeRecords);

  return (
    <>
      <div className="all-captures-toolbar">
        <div className="entries">
          <span>Total Captures </span>
          <span>{tradeRecords.length}</span>
        </div>

        {tradeRecords.length !== 0 && (
          <Button
            text={<Download size={15} />}
            type={"hollow"}
            size="very-small"
            title={"Download All"}
            onClick={() => handleDownload(tradeRecords)}
          />
        )}
      </div>

      <div className="all-captures-content-wrapper">
        {tradeRecords.length === 0 ? (
          <div className="no-input-found">
            <span>No Captures Found</span>
          </div>
        ) : (
          tradeRecords.map((capture, index) => (
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
