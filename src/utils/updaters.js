export const singleValueUpdater = (prevPopupUI, name, newVal) => {
  const prevVal = prevPopupUI[name];
  if (prevVal === newVal) return null;
  return newVal;
};

export const arrayUpdater = (prevPopupUI, name, update, operation) => {
  const prevArray = prevPopupUI[name];
  const updatedArray =
    operation === "delete"
      ? prevArray.filter((record) => {
          name === "captureMap"
            ? record.label !== update.label
            : record !== update;
        })
      : [...prevArray, update];
  return updatedArray;
};

export const updaterMap = {
  isPopupOpen: singleValueUpdater,
  isDragging: singleValueUpdater,
  activeTab: singleValueUpdater,
  isCaptureMapExpanded: singleValueUpdater,
  captureMap: arrayUpdater,
  addOptions: arrayUpdater,
  inputCreaterLabel: singleValueUpdater,
  inputCreaterType: singleValueUpdater,
};

export const popupUIUpdater = (prev, sectionUpdates) => {
  const newUpdate = {};
  const prevPopupUI = prev.popupUI;
  for (const [name, update, operation] of sectionUpdates) {
    const updater = updaterMap[name];
    if (!updater) continue;
    const result = updater(prevPopupUI, name, update, operation);

    if (!result) return prev;
    newUpdate[name] = result;
  }

  return newUpdate;
};
