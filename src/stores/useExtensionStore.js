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
    // ui
    isPopupOpen: false,
    isDragging: false,
    Tab: {
      currentTab: "Recent",
      width: "52.1458px",
      transform: "translateX(0px)",
    },

    // top inputs
    accountSize: 0,
    riskPercent: 0,
    riskAmount: 300,

    // captureMap creater
    captureMap: JSON.parse(localStorage.getItem("captureMap")) ?? demoContent,
    inputCreaterLabel: "",
    inputCreaterType: "Input",
    addOptions: [""],

    // all captures
    allCaptures: JSON.parse(localStorage.getItem("allCaptures")) ?? [],
    allCapturesUpdatingIdx: 0,
    isEdit: false,
    isAutoSaveEnabled: false,
    isSaved: false,

    //calculator
    buyPrice: 0,
    sellPrice: 0,
    qty: 0,
    pts: 0,
    pnlAmount: 0,
    pnlPercent: 0,
  },

  tooltipUI: { isVisible: false },

  updateTooltipUI: (update) =>
    set((prev) => commonUpdater(prev, "tooltipUI", update)),

  updatePopupUI: (update) =>
    set((prev) => commonUpdater(prev, "popupUI", update)),

  updatePopupUIBatch: (sectionUpdates) =>
    set((prev) => popupUIUpdater(prev, sectionUpdates)),
}));
