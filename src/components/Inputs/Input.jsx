import { useExtensionStore } from "../../stores/useExtensionStore";
import "./Input.css";

export default function Input({ type, field, options, onChange, placeholder }) {
  const value = useExtensionStore((s) => s.popupUI[field]);

  const getInput = () => {
    switch (type) {
      case "input":
        return (
          <input
            type="text"
            className="backtesting-popup-input"
            required
            placeholder={placeholder ?? ""}
            value={value}
            onChange={(e) => (onChange ? onChange(e.target.value) : null)}
          />
        );

      case "time":
        return (
          <input
            type="time"
            className="backtesting-popup-input"
            required
            onChange={(e) => (onChange ? onChange(e.target.value) : null)}
          />
        );
      case "dropdown":
        return (
          <select
            className="backtesting-popup-input"
            onChange={(e) => (onChange ? onChange(e.target.value) : null)}
            value={value}
          >
            {options.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </select>
        );
    }
  };

  return (
    <>
      <div className="backtesting-popup-input-wrapper">
        <div className="backtesting-popup-input-div">{getInput()}</div>
      </div>
    </>
  );
}
