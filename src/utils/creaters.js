import { mapping } from "@data";
import { useExtensionStore } from "@store";

export const createCleanCanvas = (canvas) => {
  const shallowCanvas = document.createElement("canvas");
  shallowCanvas.width = canvas.width * 1.5;
  shallowCanvas.height = canvas.height * 0.9;

  const ctx = shallowCanvas.getContext("2d");
  ctx.filter = "grayscale(100%) contrast(200%) brightness(120%)";
  ctx.drawImage(canvas, 0, 0, shallowCanvas.width, shallowCanvas.height);

  return shallowCanvas;
};
