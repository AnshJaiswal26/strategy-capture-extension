import { mapping } from "@data";
import { useExtensionStore } from "@store";
import { format } from "@utils";

export const handleChange = (field, value, updater, index = undefined) => {
  if (index !== undefined && !["Risk/Reward", "Pnl"].includes(field)) {
    updater([
      {
        name: "captureMap",
        payload: { value },
        operation: "update",
        index,
      },
    ]);
    return;
  }

  const popupUI = useExtensionStore.getState().popupUI;
  const capital = popupUI.accountSize;
  const riskAmount = popupUI.riskAmount;

  const updated = {};

  const isRR = field === "Risk/Reward";
  const currentValue = format(isRR ? value.replace("1:", "") : value);

  const valueMap = {
    accountSize: ["riskPercent", format((riskAmount / currentValue) * 100)],
    riskAmount: ["riskPercent", format((currentValue / capital) * 100)],
    riskPercent: ["riskAmount", format((capital * currentValue) / 100)],
    "Risk/Reward": ["Pnl", format(riskAmount * currentValue)],
    Pnl: ["Risk/Reward", `1:${format(currentValue / riskAmount)}`],
  };

  updated[field] = isRR ? `1:${currentValue}` : currentValue;
  updated[valueMap[field][0]] = valueMap[field][1];

  const arrayUpdates = [];

  if (isRR || field === "Pnl") {
    arrayUpdates.push({
      name: "captureMap",
      payload: updated,
      operation: "batchUpdate",
    });
  } else {
    for (const key in updated) {
      arrayUpdates.push({ name: key, payload: updated[key] });
    }
  }

  updater(arrayUpdates);
};

export const handleRowEdit = (updater, input, i) => {
  updater([
    ...(input?.options
      ? [
          {
            name: "addOptions",
            payload: input.options,
            operation: "edit",
          },
        ]
      : []),
    {
      name: "inputCreaterLabel",
      payload: input.label,
    },
    {
      name: "inputCreaterType",
      payload: mapping.reverseType[input.type],
    },
    { name: "isUpdate", payload: { value: true, index: i } },
  ]);
};
