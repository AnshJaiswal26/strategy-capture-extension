import { create } from "zustand";

const getKeysToUpdate = (prev, updates) => {
  const keysToUpdate = {};
  for (const key in updates) {
    if (prev[key] !== updates[key]) keysToUpdate[key] = updates[key];
  }
  return Object.keys(keysToUpdate).length > 0 ? keysToUpdate : null;
};

export const useExtensionStore = create((set) => ({
  popupUI: {
    isPopupOpen: false,
    isDragging: false,
    activeTab: "",
  },

  tooltipUI: {
    isVisible: false,
    positionX: 0,
    positionY: 0,
  },

  updateTooltipUI: (update) =>
    set((prev) => {
      const keysToUpdate = getKeysToUpdate(prev, update);
      if (!keysToUpdate) return prev;
      return {
        tooltipUI: {
          ...prev.tooltipUI,
          ...keysToUpdate,
        },
      };
    }),

  updatePopupUI: (update) =>
    set((prev) => {
      const keysToUpdate = getKeysToUpdate(prev, update);
      if (!keysToUpdate) return prev;
      return {
        popupUI: {
          ...prev.popupUI,
          ...keysToUpdate,
        },
      };
    }),
}));
