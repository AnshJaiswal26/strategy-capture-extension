import { ChevronDown } from "lucide-react";
import "./TopDownSlider.css";
import { useExtensionStore } from "@store";

export default function TradeInputGenerator({
  children,
  title,
  value,
  onClick = () => null,
}) {
  const showInputGenerator = value ? useExtensionStore(value) : false;

  return (
    <div className="top-down-slider">
      <div className="title-wrapper" onClick={onClick}>
        <div>
          <div className="title">{title}</div>
        </div>
        <div className={showInputGenerator ? "rotate" : ""}>
          <ChevronDown size={16} />
        </div>
      </div>

      <div
        className={`top-down-slider-content-wrapper ${
          showInputGenerator ? "expand" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}
