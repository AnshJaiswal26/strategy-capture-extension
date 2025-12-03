import { useExtensionStore } from "@store";
import Header from "./Header";
import { Button } from "@components";
import { Download, RefreshCwIcon } from "lucide-react";
import { handleDownload } from "./handlers";

export default function AllCapturesTab({ updateStore, setLoading }) {
  const tradeRecords = useExtensionStore((s) => s.tradeRecords);

  return (
    <>
      <div className="all-captures-toolbar">
        <div className="entries">
          <span>Total Records </span>
          <span>{tradeRecords.length}</span>
        </div>
        <div>
          <Button
            text={<RefreshCwIcon size={15} />}
            type={"hollow"}
            size="very-small"
            title={"Refresh"}
            onClick={useExtensionStore.getState().loadTradeRecords}
          />

          {tradeRecords.length !== 0 && (
            <Button
              text={<Download size={15} />}
              type={"hollow"}
              size="very-small"
              title={"Download"}
              onClick={() => handleDownload(tradeRecords)}
            />
          )}
        </div>
      </div>

      <div className="all-captures-content-wrapper">
        {tradeRecords.length === 0 ? (
          <div className="no-input-found">
            <span>No Captures Found</span>
          </div>
        ) : (
          tradeRecords.map(({ createdAt, fields }, index) => (
            <div className="all-captures-row-wrapper" key={index}>
              <Header
                capture={fields}
                index={index}
                updateStore={updateStore}
                setLoading={setLoading}
                timeStamp={createdAt}
              />

              <div className="all-captures-row">
                {fields.map(({ label, value, mappedWith }, i) => (
                  <div className="column" key={i}>
                    <div className="key">{label}</div>
                    <div className="value">
                      {mappedWith === "Time"
                        ? new Date(`1970-01-01T${value}`).toLocaleTimeString()
                        : value}
                    </div>
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
