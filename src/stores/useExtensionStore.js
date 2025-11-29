import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist, createJSONStorage } from "zustand/middleware";
import { DEMO_FIELDS } from "@constants";

function chromeStorageWrapper() {
  return {
    getItem: chrome.storage.local.get,
    setItem: chrome.storage.local.set,
    removeItem: chrome.storage.local.remove,
  };
}

// Correct environment-safe chrome storage detection
const isChromeStorageAvailable =
  typeof chrome !== "undefined" && chrome.storage && chrome.storage.local;

const storageBackend = isChromeStorageAvailable
  ? chromeStorageWrapper()
  : localStorage;

export const useExtensionStore = create(
  persist(
    immer((set) => ({
      isPopupOpen: false,
      activeTabIndex: 0,

      accountSize: 0,
      riskPercent: 0,
      riskAmount: 0,

      showInputGenerator: false,
      tradeInputs: [],
      inputLabel: "",
      inputType: "Input",
      inputOptions: [""],
      updatingIndex: null,

      tradeRecords: [],
      editingIndex: null,
      allCapturesUpdatingIdx: 0,
      isEdit: false,

      isAutoSaveEnabled: false,
      isSaved: false,
      tradeCountByDate: {},

      // login (temporary)
      userLoggedIn: true,

      updateStore: (cb) =>
        set((s) => {
          cb(s);
        }),
    })),
    {
      name: "strategy-storage",

      storage: createJSONStorage(() => storageBackend),

      partialize: (state) => ({
        tradeInputs: state.tradeInputs,
        tradeRecords: state.tradeRecords,
        accountSize: state.accountSize,
        riskPercent: state.riskPercent,
        riskAmount: state.riskAmount,
      }),
    }
  )
);
