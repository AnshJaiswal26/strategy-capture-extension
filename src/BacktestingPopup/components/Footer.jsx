import Button from "../../components/Button/Button";
import { useExtensionStore } from "@store";
import { readCanvasAndSync } from "@utils";

export default function Footer() {
  const updatePopupUIBatch = useExtensionStore((s) => s.updatePopupUIBatch);
  return (
    <div className="backtesting-popup-footer-wrapper">
      <div className="backtesting-popup-footer">
        <div className="backtesting-popup-footer-btn-wrapper">
          <Button
            text={"Capture"}
            type="hollow"
            onClick={() => readCanvasAndSync(updatePopupUIBatch)}
          />
        </div>
        <div className="backtesting-popup-footer-btn-wrapper">
          <Button text={"Clear"} type="hollow" />
          <Button text={"Add"} type="fill" />
        </div>
      </div>
    </div>
  );
}
