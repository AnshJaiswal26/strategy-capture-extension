import "./Button.css";
export default function Button({
  text,
  type = "fill",
  size = "medium",
  onClick,
  disable = false,
  title,
  toggle = false,
}) {
  return (
    <div className={`btn-wrapper`}>
      {type === "toggle" && <span className="toggle-label">{text}</span>}
      <button
        className={`${type}-btn ${toggle ? "enabled" : ""} ${size} ${
          disable ? "btn-disable" : ""
        }`}
        onClick={() => (onClick ? onClick() : null)}
        title={title ? title : ""}
        disabled={disable}
      >
        {type !== "toggle" ? text : <div className="circle"></div>}
      </button>
    </div>
  );
}
