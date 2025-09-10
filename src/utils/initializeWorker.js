import { createWorker } from "tesseract.js";

let ocrWorker1;
let ocrWorker2;

export const initWorker = async () => {
  if (!ocrWorker1) {
    ocrWorker1 = await createWorker("eng");
  }
  if (!ocrWorker2) {
    ocrWorker2 = await createWorker("eng");
  }
  return [ocrWorker1, ocrWorker2];
};

// window.addEventListener("DOMContentLoaded", initWorker);
