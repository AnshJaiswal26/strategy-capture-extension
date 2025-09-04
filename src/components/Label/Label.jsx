import "./Label.css";

export default function Label({ text, type = "" }) {
  return (
    <div className={`backtesting-popup-label-wrapper ${type}`}>
      <label>{text}</label>
    </div>
  );
}
