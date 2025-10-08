import { Button } from "@components";
import "./ButtonSelector.css";

export default function ButtonSelector({ buttons, onClick, selected }) {
  return (
    <div className="btn-selector-wrapper">
      <div className="btn-selector">
        {buttons.map((btn, index) => (
          <Button
            text={btn}
            onClick={onClick}
            size="small"
            type={selected === btn ? "fill" : "hollow"}
          />
        ))}
      </div>
    </div>
  );
}
