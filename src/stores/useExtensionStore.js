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
        uniqueLabels: {
          "Demo Sheet": {
            Date: { type: "date", count: 1, mappedColumn: "A" },
            Day: { type: "text", count: 1, mappedColumn: "B" },
            Avg: { type: "text", count: 1, mappedColumn: "B" },
          },
        },

        // login (temporary)
        userLoggedIn: true,

        // sheets
        sheetStatus: "",
        sheetId: "",
        sheetNames: [],
        selectedSheet: "",
        sheetColumnMap: {},

        toasts: [],

        // ---------------------------
        // LOCAL UI STATE HANDLER
        // ---------------------------
        updateStore: (cb) =>
          set((s) => {
            cb(s);
          }),

        showToast: (type = "info", message, duration = 3000) =>
          set((state) => {
            const id = Date.now() + Math.random();
            const newToast = { id, type, message, duration };

            // auto-remove
            setTimeout(() => {
              set((s) => ({
                toasts: s.toasts.filter((t) => t.id !== id),
              }));
            }, duration);

            return { toasts: [newToast, ...state.toasts] };
          }),

        removeToast: (id) =>
          set((state) => ({
            toasts: state.toasts.filter((t) => t.id !== id),
          })),

        // API SERVICES
        loadTradeRecords: async () => {
          set((s) => {
            s.loading = true;
          });

          const res = await fetch("http://localhost:8080/api/extension");
          const parsedRes = await res.json();

          set((s) => {
            s.tradeRecords = parsedRes.data;
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

          const parsedRes = await res.json();

          if (parsedRes.success) {
            set((s) => {
              s.tradeRecords.push(parsedRes.data);

              s.editingIndex = null;
              s.loading = false;
            });

            highlightRow();
          }
          state.showToast(
            parsedRes.success ? "success" : "error",
            parsedRes.message
          );
        },

        updateTradeRecord: async () => {
          set((s) => {
            s.loading = true;
          });

          const { tradeRecords, editingIndex, tradeInputs, showToast } = get();
          const tradeId = tradeRecords[editingIndex].tradeId;

          const res = await fetch(
            `http://localhost:8080/api/extension/${tradeId}`,
            {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(tradeInputs.fields),
            }
          );

          const parsedRes = await res.json();

          if (parsedRes.success) {
            set((s) => {
              s.tradeRecords[editingIndex] = parsedRes.data;

              s.editingIndex = null;
              s.activeTabIndex = 1;
              s.loading = false;
            });

            highlightRow(editingIndex);
          }
          showToast(parsedRes.success ? "success" : "error", parsedRes.message);
        },

        deleteTradeRecord: async (index) => {
          set((s) => {
            s.loading = true;
          });

          const state = get();
          const tradeId = state.tradeRecords[index].tradeId;

          const res = await fetch(
            `http://localhost:8080/api/extension/${tradeId}`,
            {
              method: "DELETE",
            }
          );
          const parsedRes = await res.json();

          if (parsedRes.success) {
            set((s) => {
              s.tradeRecords.splice(index, 1);
              s.loading = false;
            });
          }

          state.showToast(
            parsedRes.success ? "success" : "error",
            parsedRes.message
          );
        },

        // sheets  api
        connectToSheet: async () => {
          set((s) => {
            s.sheetStatus = "CONNECTING..";
          });

          const state = get();
          const sheetId = state.sheetId;

          const res = await fetch(
            `http://localhost:8080/api/sheets/${sheetId}`
          );
          const parsedRes = await res.json();

          console.log(parsedRes);

          if (parsedRes.success) {
            set((s) => {
              s.sheetNames = parsedRes.data;
            });
          }
          set((s) => {
            s.sheetStatus = parsedRes.success ? "CONNECTED" : "DISCONNECTED";
          });
          state.showToast(
            parsedRes.success ? "success" : "error",
            parsedRes.message
          );
        },

        appendDataToSheet: async () => {
          const state = get();

          const sheetId = state.sheetId;
          const seletedSheet = state.selectedSheet;

          const records = state.tradeInputs.fields;

          const req = records.reduce(
            (acc, r) => {
              if (r.type === "dropdown") {
                acc.dropdowns[r.label] = r.options;
              } else {
                acc.values[r.label] = r.value;
              }
              acc.columnMap[r.label] = r.mappedColumn;

              return acc;
            },
            { dropdowns: {}, values: {}, columnMap: {} }
          );

          req.sheetName = seletedSheet;

          const res = await fetch(
            `http://localhost:8080/api/sheets/${sheetId}`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(req),
            }
          );

          const parsedRes = await res.json();

          state.showToast(
            parsedRes.success ? "success" : "error",
            parsedRes.message
          );
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
