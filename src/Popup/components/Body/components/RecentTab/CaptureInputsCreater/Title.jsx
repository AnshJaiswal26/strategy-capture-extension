import { ChevronDown, ChevronUp } from "lucide-react";

export default function Title({ isExpanded, setIsExpanded }) {
  return (
    <div className="input-creater" onClick={() => setIsExpanded(!isExpanded)}>
      <div>
        <div className="title">Create Capture Inputs</div>
      </div>
      <div>
        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </div>
    </div>
  );
}
