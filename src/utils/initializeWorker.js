import { createWorker } from "tesseract.js";

let ocrWorker;

export const initWorker = async () => {
  if (!ocrWorker) {
    ocrWorker = await createWorker("eng");
  }
  return ocrWorker;
};

window.addEventListener("DOMContentLoaded", initWorker);
