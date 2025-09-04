import { useEffect } from "react";
import { useExtensionStore } from "../../stores/useExtensionStore";
import "./InfoTooltip.css";

export default function InfoTooltip({ title, position = "top" }) {
  const isVisible = useExtensionStore((s) => s.tooltipUI.isVisible);
  const positionX = useExtensionStore((s) => s.tooltipUI.positionX);
  const positionY = useExtensionStore((s) => s.tooltipUI.positionY);

  if (!isVisible) return null;

  return (
    <div
      className={`info-tooltip info-tooltip-${position}`}
      style={{ left: `${positionX}px`, top: `${positionY}px` }}
    >
      <span className="info-tooltip-title">{title}</span>
      <div className={`info-tooltip-arrow info-tooltip-arrow-${position}`} />
    </div>
  );
}
