import { Loader2 } from "lucide-react";
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
  loading = false,
}) {
  return (
    <div className={`btn-wrapper`}>
      {type === "toggle" && <span className="toggle-label">{text}</span>}
      <button
        type={submit ? "submit" : ""}
        className={`${type}-btn ${toggle ? "enabled" : ""} ${size} ${
          disable || loading ? "btn-disable" : ""
        }`}
        onClick={onClick}
        title={title || ""}
        disabled={disable || loading}
      >
        {loading && (
          <div className="loader">
            <Loader2 size={15} strokeWidth={3} />
          </div>
        )}
        <div>{type !== "toggle" ? text : <div className="circle"></div>}</div>
      </button>
    </div>
  );
}
