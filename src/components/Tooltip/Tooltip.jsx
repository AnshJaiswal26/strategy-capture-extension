import { useEffect } from "react";
import { useExtensionStore } from "../../stores/useExtensionStore";
import "./Tooltip.css";

export default function Tooltip({ title, position = "top" }) {
  const isVisible = useExtensionStore((s) => s.tooltipUI.isVisible);

  if (!isVisible) return null;

  return (
    <div className={`info-tooltip info-tooltip-${position}`}>
      <span className="info-tooltip-title">{title}</span>
      <div className={`info-tooltip-arrow info-tooltip-arrow-${position}`} />
    </div>
  );
}
