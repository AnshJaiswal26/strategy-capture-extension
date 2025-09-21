export const singleValueUpdater = (prevPopupUI, name, newVal, operation) => {
  const prevVal = prevPopupUI[name];
  return operation === "toggle" ? !prevVal : prevVal === newVal ? null : newVal;
};

export const multiValueUpdater = (prevPopupUI, name, update) => {
  const prev = prevPopupUI[name];
  const newUpdates = {};
  for (const key in update) {
    if (prev[key] !== update[key]) newUpdates[key] = update[key];
  }
  return newUpdates;
};

const operationMap = {
  delete: (a, u, i) => a.filter((_, idx) => idx !== i),
  add: (a, u, i, o, r) => (r ? [u, ...a] : [...a, u]),
  update: (a, u, i, o) =>
    a.map((r, idx) => (idx === i ? (o ? { ...r, ...u } : u) : r)),
  batchUpdate: (a, u) =>
    a.map((r) => {
      const value = u?.[r.mappingKey];
      return value !== undefined ? { ...r, value } : r;
    }),
};

export const arrayUpdater = (prev, name, update, operation, idx) => {
  if (operation === "edit") return update;

  const isAddOptions = name === "addOptions";
  const isAllCaptures = name === "allCaptures";
  const mapIdx =
    isAllCaptures && operation === "update" ? prev.allCapturesUpdatingIdx : idx;

  const result = operationMap[operation](
    prev[name],
    isAllCaptures ? prev.captureMap : update,
    mapIdx,
    !(isAddOptions || isAllCaptures),
    isAllCaptures
  );
  if (!isAddOptions) localStorage.setItem(name, JSON.stringify(result));

  return result;
};

export const updaterMap = {
  isPopupOpen: singleValueUpdater,
  isDragging: singleValueUpdater,
  Tab: multiValueUpdater,
  captureMap: arrayUpdater,
  addOptions: arrayUpdater,
  inputCreaterLabel: singleValueUpdater,
  inputCreaterType: singleValueUpdater,
  allCaptures: arrayUpdater,
  isEdit: singleValueUpdater,
  isSaved: singleValueUpdater,
  isAutoSaveEnabled: singleValueUpdater,
  allCapturesUpdatingIdx: singleValueUpdater,
  accountSize: singleValueUpdater,
  riskAmount: singleValueUpdater,
  riskPercent: singleValueUpdater,
};

export const popupUIUpdater = (prev, sectionUpdates) => {
  const newUpdate = {};
  const prevPopupUI = prev.popupUI;
  for (const { name, payload, operation, index } of sectionUpdates) {
    const updater = updaterMap[name];
    if (!updater) continue;
    const result = updater(prevPopupUI, name, payload, operation, index);

    if (result === undefined || result === null) continue;
    newUpdate[name] = result;
  }
  return { popupUI: { ...prevPopupUI, ...newUpdate } };
};
