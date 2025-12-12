import { MoreVertical } from "lucide-react";
import "./MoreButton.css";
import { useState, useRef } from "react";

export default function MoreButton({ children }) {
  const [show, setShow] = useState(false);
  const wrapperRef = useRef(null);

  const handleBlur = (e) => {
    if (!wrapperRef.current.contains(e.relatedTarget)) {
      setShow(false);
    }
  };

  return (
    <div ref={wrapperRef} tabIndex={0} onBlur={handleBlur}>
      <div className="more-icon-wrapper">
        <MoreVertical
          className={show ? "opened" : ""}
          size={15}
          onClick={() => setShow((p) => !p)}
        />

        {show && <div className="options-list">{children}</div>}
      </div>
    </div>
  );
}

MoreButton.Option = function MoreButtonOption({
  children,
  onClick = () => null,
}) {
  return (
    <div
      className="more-option"
      tabIndex={-1}
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
