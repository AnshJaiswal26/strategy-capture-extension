import "./Button.css";
export default function Button({
  text,
  type = "fill",
  size = "medium",
  onClick,
}) {
  return (
    <div className="btn-wrapper">
      <button
        className={`${type}-btn ${size}`}
        onClick={() => (onClick ? onClick() : null)}
      >
        {text}
      </button>
    </div>
  );
}
