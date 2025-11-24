import "./Button.css";
export default function Button({
  text,
  type = "fill",
  size = "medium",
  onClick = () => null,
  disable = false,
  title,
  toggle = false,
  submit = false,
}) {
  return (
    <div className={`btn-wrapper`}>
      {type === "toggle" && <span className="toggle-label">{text}</span>}
      <button
        type={submit ? "submit" : ""}
        className={`${type}-btn ${toggle ? "enabled" : ""} ${size} ${
          disable ? "btn-disable" : ""
        }`}
        onClick={onClick}
        title={title || ""}
        disabled={disable}
      >
        {type !== "toggle" ? text : <div className="circle"></div>}
      </button>
    </div>
  );
}
