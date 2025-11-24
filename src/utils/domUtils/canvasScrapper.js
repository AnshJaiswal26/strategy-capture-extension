import { createWorker } from "tesseract.js";
import {
  createCleanCanvas,
  extractTimeResults,
  extractPriceResults,
} from "@utils";
import { useExtensionStore } from "@store";
import { handleChange } from "../../Popup/components/Body/components/RecentTab/handlers";

let ocrWorker1;
export const initWorker = async () => {
  if (!ocrWorker1) {
    ocrWorker1 = await createWorker("eng");
  }
  return ocrWorker1;
};

const getBlob = (canvas) =>
  new Promise((resolve) => {
    canvas.toBlob((blob) => resolve(blob), "image/png");
  });

async function readCanvas(timeCanvas) {
  const worker = await initWorker();

  const blob = await getBlob(timeCanvas);
  const result = await worker.recognize(blob, "eng", {
    tessedit_char_whitelist:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789: ",
    preserve_interword_spaces: 1,
    tessedit_pageseg_mode: "11",
  });

  return result.data.text;
}

export async function readCanvasAndSync(doc, prices) {
  console.time("Canvas Process");
  const root = doc.body.getElementsByClassName("js-rootresizer__contents")[0];

  //finding time canvas
  const centerArea = root?.getElementsByClassName("layout__area--center")[0];
  const timeAxis = centerArea?.getElementsByClassName("time-axis")[0];
  const timeCanvas = timeAxis?.getElementsByTagName("canvas")[1];

  //finding top toolbar
  const topArea = root?.getElementsByClassName("layout__area--top")[0];
  const topButtons = topArea?.getElementsByTagName("button");

  const buttons = topButtons
    ? topButtons
    : topToolbar?.querySelectorAll(`[data-role="button"]`);

  const symbol = buttons[0].textContent;
  const timeAttribute = buttons[2].getAttribute("aria-label");
  const timeFrame = timeAttribute
    ? timeAttribute
    : buttons[2].getAttribute("title");

  const cleanedTimeCanvas = createCleanCanvas(timeCanvas);

  const timeText = await readCanvas(cleanedTimeCanvas);
  const extractedTimeData = extractTimeResults(timeText);
  const extractedPriceData = extractPriceResults(prices);

  const data = { ...extractedTimeData, ...extractedPriceData };
  data["Symbol"] = symbol;
  data["Time Frame"] = timeFrame;
  data["Risk/Reward"] = `1:${data["Risk/Reward"]}`;

  const updateStore = useExtensionStore.getState().updateStore;

  updateStore((s) => {
    data.Pnl = s.riskAmount * data["Risk/Reward"];
    s.captureMap.forEach(({ mappedWith }, index) => {
      if (data?.[mappedWith])
        handleChange(mappedWith, data[mappedWith], s, index);
    });
    s.isPopupOpen = true;
  });

  console.timeEnd("Canvas Process");
}
