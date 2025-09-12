import "./Button.css";
export default function Button({
  text,
  type = "fill",
  size = "medium",
  onClick,
  x = "center",
  y = "center",
  disable = false,
  title,
}) {
  return (
    <div className={`btn-wrapper x-${x} y-${y}`}>
      <button
        className={`${type}-btn ${size} ${disable ? "btn-disable" : ""}`}
        onClick={() => (onClick ? onClick() : null)}
        title={title ? title : ""}
        disabled={disable}
      >
        {text}
      </button>
    </div>
  );
}
