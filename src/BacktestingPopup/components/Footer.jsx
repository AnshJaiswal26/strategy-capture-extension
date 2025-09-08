import { extractText } from "@utils";
import Button from "../../components/Button/Button";
import { useExtensionStore } from "@store";

export default function Footer() {
  const updatePopupUIBatch = useExtensionStore((s) => s.updatePopupUIBatch);
  return (
    <div className="backtesting-popup-footer-wrapper">
      <div className="backtesting-popup-footer">
        <div className="backtesting-popup-footer-btn-wrapper">
          <Button text={"Clear"} type="hollow" />
          <Button
            text={"Add"}
            type="fill"
            onClick={async () => {
              const data = await extractText("time");

              const captureMap =
                useExtensionStore.getState().popupUI.captureMap;
              captureMap.forEach((input, i) => {
                if (input.mappingKey === "Time") {
                  updatePopupUIBatch([
                    ["captureMap", { value: data.time }, "update", i],
                  ]);
                } else if (input.mappingKey === "Day") {
                  updatePopupUIBatch([
                    ["captureMap", { value: data.day }, "update", i],
                  ]);
                }
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}
