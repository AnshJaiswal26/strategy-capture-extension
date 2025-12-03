import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist, createJSONStorage } from "zustand/middleware";
import { DEMO_FIELDS } from "@constants";
import { highlightRow } from "@/utils";

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
    immer(
      (set, get) => ({
        isPopupOpen: false,
        loading: false,
        activeTabIndex: 0,

        accountSize: 0,
        riskPercent: 0,
        riskAmount: 0,

        showInputGenerator: false,
        tradeInputs: { fields: [] },
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

        // login (temporary)
        userLoggedIn: true,

        // sheets
        sheetStatus: "",
        sheetId: "",
        sheetNames: [],
        selectedSheet: "",
        showMsg: false,

        // ---------------------------
        // LOCAL UI STATE HANDLER
        // ---------------------------
        updateStore: (cb) =>
          set((s) => {
            cb(s);
          }),

        // API SERVICES
        loadTradeRecords: async () => {
          set((s) => {
            s.loading = true;
          });

          const res = await fetch("http://localhost:8080/api/extension");

          const data = await res.json();

          set((s) => {
            s.tradeRecords = data;
            s.loading = false;
          });
        },

        addTradeRecord: async () => {
          set((s) => {
            s.loading = true;
            s.activeTabIndex = 1;
          });

          const state = get();

          const res = await fetch("http://localhost:8080/api/extension", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(state.tradeInputs.fields),
          });

          const data = await res.json();

          if (res.status === 200) {
            set((s) => {
              s.tradeRecords.push(data);

              s.editingIndex = null;
              s.loading = false;
            });

            highlightRow();
          }
        },

        updateTradeRecord: async () => {
          set((s) => {
            s.loading = true;
          });

          const { tradeRecords, editingIndex, tradeInputs } = get();
          const tradeId = tradeRecords[editingIndex].tradeId;

          const res = await fetch(
            `http://localhost:8080/api/extension/${tradeId}`,
            {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(tradeInputs.fields),
            }
          );

          let data = await res.json();
          console.log(data);

          if (res.status === 200) {
            set((s) => {
              s.tradeRecords[editingIndex] = data;

              s.editingIndex = null;
              s.activeTabIndex = 1;
              s.loading = false;
            });

            highlightRow(editingIndex);
          }
        },

        deleteTradeRecord: async (index) => {
          set((s) => {
            s.loading = true;
          });

          const tradeId = get().tradeRecords[index].tradeId;

          const res = await fetch(
            `http://localhost:8080/api/extension/${tradeId}`,
            {
              method: "DELETE",
            }
          );

          if (res.status === 204) {
            set((s) => {
              s.tradeRecords.splice(index, 1);
              s.loading = false;
            });
          }
        },

        // sheets  api
        connectToSheet: async () => {
          set((s) => {
            s.sheetStatus = "CONNECTING..";
          });

          const sheetId = get().sheetId;

          const res = await fetch(
            `http://localhost:8080/api/sheets?sheetId=${sheetId}`
          );

          const removeMsg = () =>
            setTimeout(
              () =>
                set((s) => {
                  s.showMsg = false;
                }),
              4000
            );

          if (res.status === 200) {
            const data = await res.json();

            set((s) => {
              s.sheetStatus = "CONNECTED";
              s.sheetNames = data;
              s.showMsg = true;
            });
            removeMsg();
          } else {
            set((s) => {
              s.sheetStatus = "ERROR";
              s.showMsg = true;
            });
            removeMsg();
          }
        },
      }),
      { autoFreeze: false }
    ),
    {
      name: "strategy-storage",

      storage: createJSONStorage(() => storageBackend),

      partialize: (state) => {
        const cloned = structuredClone({
          tradeInputs: state.tradeInputs,
          accountSize: state.accountSize,
          riskPercent: state.riskPercent,
          riskAmount: state.riskAmount,
          sheetId: state.sheetId,
          sheetStatus: state.sheetStatus,
          sheetNames: state.sheetNames,
          selectedSheet: state.selectedSheet,
        });

        return cloned;
      },
    }
  )
);
