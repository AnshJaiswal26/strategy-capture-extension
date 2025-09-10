import "./Label.css";

export default function Label({ text, type = "" }) {
  return (
    <div className={`backtesting-popup-label-wrapper ${type}`}>
      <span>{text}</span>
    </div>
  );
}
