export const singleValueUpdater = (prevPopupUI, name, newVal) => {
  const prevVal = prevPopupUI[name];
  if (prevVal === newVal) return null;
  return newVal;
};

export const arrayUpdater = (prevPopupUI, name, update, operation, index) => {
  const prevArray = prevPopupUI[name];
  const updatedArray =
    operation === "delete"
      ? prevArray.filter((_, i) => i !== index)
      : operation === "add"
      ? [...prevArray, update]
      : Array.isArray(update)
      ? prevArray.map((record, i) =>
          update[i].value ? { ...record, ...update[i] } : record
        )
      : prevArray.map((record, i) =>
          i === index
            ? name === "captureMap"
              ? { ...record, ...update }
              : update
            : record
        );

  // console.log(updatedArray);

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
  for (const [name, update, operation, index] of sectionUpdates) {
    const updater = updaterMap[name];
    if (!updater) continue;
    const result = updater(prevPopupUI, name, update, operation, index);

    if (!result) return prev;
    newUpdate[name] = result;
  }

  return { popupUI: { ...prevPopupUI, ...newUpdate } };
};
