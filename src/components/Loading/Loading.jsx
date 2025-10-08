import { Loader, LoaderCircle } from "lucide-react";
import "./Loading.css";

export default function Loading({ size, button = false }) {
  return (
    <div className={`loader${!button ? " popup" : ""}`}>
      <LoaderCircle size={size ? size : 18} />
    </div>
  );
}
