import { useCallback, useMemo, useState } from "react";
import { Button, Input } from "@components";
import { useExtensionStore } from "@store";
import CptureInputsCreater from "./components/CaptureInputsCreater/CaptureInputsCreater";
import InputGrid from "./components/InputGrid";
import { Copy, CopyCheckIcon, Download, Pencil, Trash } from "lucide-react";
import "./Body.css";

export default function Body() {
  const activeTab = useExtensionStore((s) => s.popupUI.activeTab);

  return (
    <>
      <div className="backtesting-popup-content">
        {activeTab === "Recent" ? <Recent /> : <AllCaptures />}
      </div>
    </>
  );
}

function Recent() {
  const updatePopupUI = useExtensionStore((s) => s.updatePopupUI);
  const updatePopupUIBatch = useExtensionStore((s) => s.updatePopupUIBatch);
  const isLengthZero = useExtensionStore(
    (s) => s.popupUI.captureMap.currentLength === 0
  );

  const inputs = useMemo(() => [
    { l: "Account Size", pH: "Enter Capital", f: "accountSize" },
    { l: "Risk (%)", pH: "Enter risk (%)", f: "riskPercent" },
    { l: "Risk (₹)", pH: "Enter risk (₹)", f: "riskAmount" },
  ]);
  return (
    <>
      <div className="account-size-and-risk-wrapper">
        {inputs.map((input, i) => (
          <Input
            key={`input_${i}`}
            label={input.l}
            type={"number"}
            placeholder={input.pH}
            selector={(s) => s.popupUI[input.f]}
            onChange={(v) => updatePopupUI({ [input.f]: v })}
          />
        ))}
      </div>
      <CptureInputsCreater />
      {isLengthZero ? (
        <div className="no-input-found">
          <span>No Capture Input Found</span>
        </div>
      ) : (
        <InputGrid updatePopupUIBatch={updatePopupUIBatch} />
      )}
    </>
  );
}

function AllCaptures() {
  const allCaptures = useExtensionStore((s) => s.popupUI.allCaptures);
  const updatePopupUIBatch = useExtensionStore((s) => s.updatePopupUIBatch);

  const handleDownload = useCallback(() => {
    const csvContent = allCaptures
      .map((row) => row.map(({ value }) => value).join(","))
      .join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;chartset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "captures.csv";
    link.click();
  }, [allCaptures]);

  const handleEdit = useCallback((capture, index) => {
    document.getElementById("tab-recent").click();
    updatePopupUIBatch([
      { name: "captureMap", payload: capture, operation: "edit" },
      { name: "allCapturesUpdatingIdx", index },
      { name: "isEdit", payload: true },
    ]);
  }, []);

  return (
    <>
      <div className="all-captures-toolbar">
        <div className="entries">
          <span>Total Captures </span>
          <span>{allCaptures.length}</span>
        </div>

        <Button
          text={<Download size={15} />}
          type={"hollow"}
          size="very-small"
          title={"Download All"}
          onClick={handleDownload}
        />
      </div>

      {allCaptures.map((capture, index) => (
        <div className="all-captures-row-wrapper" key={index}>
          <div className="tool-header">
            <div>
              <ToolHeaderCopyButton
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
                onClick={() => handleEdit([...capture], index)}
              />
              <Button
                text={<Trash size={15} />}
                size="very-small"
                onClick={() =>
                  updatePopupUIBatch([
                    { name: "allCaptures", operation: "delete", index },
                  ])
                }
              />
            </div>
          </div>
          <div className="all-captures-row">
            {capture.map(({ label, value }, i) => (
              <div className="column" key={i}>
                <div className="key">{label}</div>
                <div className="value">{value}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

function ToolHeaderCopyButton({ text }) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipBoard = useCallback(async () => {
    if (isCopied) return;
    setIsCopied(true);
    await navigator.clipboard.writeText(text);
    setTimeout(() => setIsCopied(false), 2000);
  }, []);

  return (
    <Button
      text={!isCopied ? <Copy size={15} /> : <CopyCheckIcon size={15} />}
      type={isCopied ? "fill" : "hollow"}
      size="very-small"
      onClick={copyToClipBoard}
    />
  );
}
