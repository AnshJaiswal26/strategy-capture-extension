import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { DEMO_FIELDS } from "@constants";

export const useExtensionStore = create(
  immer((set) => ({
    // ui
    isPopupOpen: false,
    activeTabIndex: 0,

    // top inputs
    accountSize: 0,
    riskPercent: 0,
    riskAmount: 300,

    // captureMap creater
    showInputGenerator: false,
    captureMap: DEMO_FIELDS,
    inputLabel: "",
    inputType: "Input",
    inputOptions: [""],
    updatingIndex: null,

    // all captures
    allCaptures: [],
    editingIndex: null,
    allCapturesUpdatingIdx: 0,
    isEdit: false,
    isAutoSaveEnabled: false,
    isSaved: false,
    tradeCountByDate: {},

    //login
    userLoggedIn: true,

    updateStore: (callback) => {
      set((s) => {
        callback(s);
      });
    },
  }))
);
