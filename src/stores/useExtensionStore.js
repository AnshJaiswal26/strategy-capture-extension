import { create } from "zustand";
import { popupUIUpdater } from "@utils";
import { demoContent } from "@data";

const getKeysToUpdate = (prev, updates) => {
  const keysToUpdate = {};

  for (const key in updates) {
    if (prev[key] !== updates[key]) keysToUpdate[key] = updates[key];
  }
  return Object.keys(keysToUpdate).length > 0 ? keysToUpdate : null;
};

const commonUpdater = (prev, section, update) => {
  const keysToUpdate = getKeysToUpdate(prev.popupUI, update);
  if (!keysToUpdate) return prev;
  return {
    [section]: {
      ...prev[section],
      ...keysToUpdate,
    },
  };
};

export const useExtensionStore = create((set) => ({
  popupUI: {
    isPopupOpen: true,
    isDragging: false,
    activeTab: "",
    accountSize: 0,
    riskPercent: 0,
    riskAmount: 0,
    isCaptureMapExpanded: false,
    captureMap: demoContent,
    addOptions: [""],
    inputCreaterLabel: "",
    inputCreaterType: "Input",
  },

  tooltipUI: {
    isVisible: false,
    positionX: 0,
    positionY: 0,
  },

  updateTooltipUI: (update) =>
    set((prev) => commonUpdater(prev, "tooltipUI", update)),

  updatePopupUI: (update) =>
    set((prev) => commonUpdater(prev, "popupUI", update)),

  updatePopupUIBatch: (sectionUpdates) =>
    set((prev) => popupUIUpdater(prev, sectionUpdates)),
}));
