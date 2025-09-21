import Title from "./Title";
import InputsCreater from "./InputsCreater";
import { useState } from "react";

export default function CaptureInputsCreater() {
  const [isExpanded, setIsExpanded] = useState();

  return (
    <div className="input-creater-wrapper">
      <Title isExpanded={isExpanded} setIsExpanded={setIsExpanded} />

      <div
        className={`input-creater-row-wrapper${isExpanded ? " expand" : ""}`}
      >
        {isExpanded && <InputsCreater />}
      </div>
    </div>
  );
}
