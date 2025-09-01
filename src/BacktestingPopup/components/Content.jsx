import { Fragment } from "react";

export default function Content({ inputArray }) {
  return (
    <div className="backtesting-popup-content">
      <div className="backtesting-popup-content-grid">
        {inputArray.map(([label, value], index) => (
          <Fragment key={index}>
            <div className="backtesting-popup-label-wrapper">
              <label>{label}</label>
            </div>
            <div className="backtesting-popup-input-wrapper">
              <div className="backtesting-popup-input-div">
                <input
                  type="text"
                  className="backtesting-popup-input"
                  id="symbol"
                  required
                  value={0}
                  onChange={() => {}}
                />
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
