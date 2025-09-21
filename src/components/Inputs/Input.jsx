import { useExtensionStore } from "@store";
import "./Input.css";

function Input({ label, type, options, selector, onChange, placeholder }) {
  const value =
    typeof selector === "function" ? useExtensionStore(selector) : selector;

  return (
    <>
      <div className="backtesting-popup-input-wrapper">
        {label && (
          <div className="input-label-wrapper">
            <div>
              <span>{label}</span>
            </div>
          </div>
        )}

        <div className="backtesting-popup-input-div">
          {type === "dropdown" ? (
            <select
              className="backtesting-popup-input"
              onChange={(e) => (onChange ? onChange(e.target.value) : null)}
              value={value}
            >
              {options.map((option, index) => (
                <option key={index}>{option}</option>
              ))}
            </select>
          ) : (
            <input
              className="backtesting-popup-input"
              type={type ?? "text"}
              step={type === "time" ? 1 : ""}
              placeholder={placeholder}
              value={value}
              onChange={(e) => (onChange ? onChange(e.target.value) : null)}
              required
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Input;
