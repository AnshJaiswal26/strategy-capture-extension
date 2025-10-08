import { useState } from "react";
import { ChevronDown } from "lucide-react";
import "./TopDownSlider.css";

export default function CaptureInputsCreater({ children, title }) {
  const [isExpanded, setIsExpanded] = useState();

  return (
    <div className="top-down-slider">
      <Title
        title={title}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
      />

      <div
        className={`top-down-slider-content-wrapper ${
          isExpanded ? "expand" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function Title({ isExpanded, setIsExpanded, title }) {
  return (
    <div className="title-wrapper" onClick={() => setIsExpanded(!isExpanded)}>
      <div>
        <div className="title">{title}</div>
      </div>
      <div className={isExpanded ? "rotate" : ""}>
        <ChevronDown size={16} />
      </div>
    </div>
  );
}
