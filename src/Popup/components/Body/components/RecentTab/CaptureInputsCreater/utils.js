import { mapping } from "@data";
import { useExtensionStore } from "@store";

export const createInput = (updater, isUpdate) => {
  const popupUI = useExtensionStore.getState().popupUI;
  const label = popupUI.inputCreaterLabel;
  const type = popupUI.inputCreaterType.toLowerCase();
  const mappingKey = mapping.keys.includes(label) ? label : "None";

  if (isUpdate.value) {
    updater([
      {
        name: "captureMap",
        payload: {
          label,
          type,
          ...(type === "dropdown" && { options: popupUI.addOptions }),
        },
        operation: "update",
        index: isUpdate.index,
      },
      { name: "isUpdate", payload: { value: false } },
      { name: "addOptions", payload: [], operation: "edit" },
      { name: "inputCreaterLabel", payload: "" },
      { name: "inputCreaterType", payload: "Number" },
    ]);
    return;
  }

  const timeAndDate = () => {
    const now = new Date();
    return type === "time"
      ? now.toLocaleTimeString("en-IN", { hour12: false })
      : type === "date"
      ? now.toISOString().split("T")[0]
      : now.toLocaleDateString("en-IN", { weekday: "long" });
  };

  updater([
    {
      name: "captureMap",
      payload: {
        label,
        type,
        ...(type === "dropdown" && { options: popupUI.addOptions }),
        value: ["date", "time", "day"].includes(type) ? timeAndDate() : 0,
        mappingKey: mappingKey,
      },
      operation: "add",
    },
  ]);
};
