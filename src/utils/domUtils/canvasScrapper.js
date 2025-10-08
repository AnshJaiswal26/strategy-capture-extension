import { createWorker } from "tesseract.js";
import {
  createCleanCanvas,
  extractTimeResults,
  extractPriceResults,
} from "@utils";
import { useExtensionStore } from "@store";

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

export async function readTimeCanvas(timeCanvas) {
  const worker = await initWorker();

  const blob = await getBlob(timeCanvas);

  const result = await worker.recognize(blob, "eng", {
    tessedit_char_whitelist:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789: ",
    preserve_interword_spaces: 1,
    tessedit_pageseg_mode: "11",
  });

  const timeText = result.data.text;

  return timeText;
}

const updateTradeCountByDate = (prev, date) => {
  const count = (prev?.[date] || 0) + 1;
  return { newCounts: { ...prev, [date]: count }, count };
};

export async function readCanvasAndSync(doc, prices) {
  console.time("Canvas Process");
  const root = doc.body.getElementsByClassName("js-rootresizer__contents")[0];

  //finding time canvas
  const centerArea = root?.getElementsByClassName("layout__area--center")[0];
  const timeAxis = centerArea?.getElementsByClassName("time-axis")[0];
  const timeCanvas = timeAxis?.getElementsByTagName("canvas")[1];

  //finding top toolbar
  const topArea = root?.getElementsByClassName("layout__area--top")[0];
  const topToolbar = topArea?.querySelector(`div[role="toolbar"]`);
  const topButtons = topToolbar?.getElementsByTagName("button");

  const symbol = topButtons[0].textContent;
  const timeFrame = topButtons[2].getAttribute("aria-label");

  const cleanedTimeCanvas = createCleanCanvas(timeCanvas);

  const timeText = await readTimeCanvas(cleanedTimeCanvas);
  const extractedTimeData = extractTimeResults(timeText);
  const extractedPriceData = extractPriceResults(prices);

  const storeState = useExtensionStore.getState();
  const popupUI = storeState.popupUI;
  const riskAmount = popupUI.riskAmount;

  const data = { ...extractedTimeData, ...extractedPriceData };
  data.Pnl = riskAmount * data["Risk/Reward"];
  data["Symbol"] = symbol;
  data["Time Frame"] = timeFrame;
  data["Risk/Reward"] = `1:${data["Risk/Reward"]}`;

  const { newCounts, count } = updateTradeCountByDate(
    popupUI.tradeCountByDate,
    data.Date
  );

  const updater = storeState.updatePopupUIBatch;
  updater([
    { name: "captureMap", payload: data, operation: "batchUpdate" },
    { name: "isPopupOpen", payload: true },
    { name: "tradeCountByDate", payload: newCounts },
  ]);

  console.timeEnd("Canvas Process");
}
