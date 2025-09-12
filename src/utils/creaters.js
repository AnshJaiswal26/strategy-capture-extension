import { mapping } from "@data";
import { useExtensionStore } from "@store";

export const createInput = (action, updater) => {
  const popupUI = useExtensionStore.getState().popupUI;
  const label = popupUI.inputCreaterLabel;
  const type = popupUI.inputCreaterType.toLowerCase();
  const mappingKey = mapping.keys.includes(label) ? label : "None";

  updater([
    [
      "captureMap",
      {
        label,
        type,
        ...(type === "dropdown" && { options: popupUI.addOptions }),
        value: 0,
        mappingKey: mappingKey,
      },
      action,
    ],
  ]);
};

export const createCleanCanvas = (canvas) => {
  const shallowCanvas = document.createElement("canvas");
  shallowCanvas.width = canvas.width * 1.5;
  shallowCanvas.height = canvas.height * 0.9;

  const ctx = shallowCanvas.getContext("2d");
  ctx.filter = "grayscale(100%) contrast(200%) brightness(120%)";
  ctx.drawImage(canvas, 0, 0, shallowCanvas.width, shallowCanvas.height);

  return shallowCanvas;
};
