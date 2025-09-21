import { useExtensionStore } from "@store";

export const handleBtnClick = (btnIndex, updater) => {
  const popupUI = useExtensionStore.getState().popupUI;
  const isAllCaptures = popupUI.Tab.currentTab === "All Captures";
  const isSaved = popupUI.isSaved;
  const isEdit = popupUI.isEdit;

  if (btnIndex === 0) {
    if (isAllCaptures) {
      if (isSaved) return;
      updater([{ name: "isSaved", payload: true }]);
      setTimeout(() => updater([{ name: "isSaved", payload: false }]), 300);
    }
    if (isEdit) {
      updater([{ name: "isEdit", payload: false }]);
    }
  } else {
    const updatesArr = [];

    if (isAllCaptures) {
      console.log("runn...");
      updatesArr.push({ name: "isAutoSavedEnabled", operation: "toggle" });
    } else if (isEdit) {
      updatesArr.push({ name: "allCaptures", operation: "update" });
      updatesArr.push({ name: "isEdit", payload: false });
      document.getElementById("tab-all-captures")?.click();
    } else {
      updatesArr.push({ name: "allCaptures", operation: "add" });
      document.getElementById("tab-all-captures")?.click();
    }
    updater(updatesArr);
  }
};
