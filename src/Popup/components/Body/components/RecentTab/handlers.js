import { FIELD_TYPES } from "@constants";
import { format } from "@utils";

export const handleChange = (field, value, s, index = undefined) => {
  const capital = s.accountSize;
  const riskAmount = s.riskAmount;

  const isRR = field === "Risk/Reward";
  const currentValue = format(isRR ? value.substring(2) : value);

  const valueMap = {
    accountSize: (s) => {
      s.riskPercent = format((riskAmount / currentValue) * 100);
      s.accountSize = value;
    },

    riskAmount: (s) => {
      s.riskPercent = format((currentValue / capital) * 100);
      s.riskAmount = value;

      const riskReward = s.tradeInputs.fields.find(
        (r) => r.mappedWith === "Risk/Reward"
      )?.value;

      if (riskReward) {
        s.tradeInputs.fields.forEach((r) => {
          if (r.mappedWith === "Pnl")
            r.value = format(Number(riskReward.substring(2)) * value);
        });
      }
    },

    riskPercent: (s) => {
      const amount = format((capital * currentValue) / 100);
      s.riskAmount = amount;
      s.riskPercent = value;

      const riskReward = s.tradeInputs.fields.find(
        (r) => r.mappedWith === "Risk/Reward"
      )?.value;

      if (riskReward) {
        s.tradeInputs.fields.forEach((r) => {
          if (r.mappedWith === "Pnl")
            r.value = format(Number(riskReward.substring(2)) * amount);
        });
      }
    },

    "Risk/Reward": (s) => {
      s.tradeInputs.fields.forEach((r) => {
        if (r.mappedWith === "Risk/Reward") r.value = `1:${currentValue}`;
        if (r.mappedWith === "Pnl") r.value = format(riskAmount * currentValue);
      });
    },

    Pnl: (s) => {
      s.tradeInputs.fields.forEach((r) => {
        if (r.mappedWith === "Risk/Reward")
          r.value = `1:${format(currentValue / riskAmount)}`;
        if (r.mappedWith === "Pnl") r.value = value;
      });
    },

    default: (s) => {
      if (index !== undefined) {
        s.tradeInputs.fields[index].value = value;
      } else s[field] = value;
    },
  };

  (valueMap[field] || valueMap.default)(s);
};

export const handleEdit = (updateStore, input, index) => {
  updateStore((s) => {
    Object.assign(s, {
      ...(input?.options && { inputOptions: input.options }),
      inputLabel: input.label,
      inputType: FIELD_TYPES[input.type],
      updatingIndex: index,
      showInputGenerator: true,
    });
  });
  const shadowRootWrapper = document.getElementById(
    "extension-shadow-root-wrapper"
  );

  const section = shadowRootWrapper
    ? shadowRootWrapper.shadowRoot.getElementById("extension-popup-content")
    : document.getElementById("extension-popup-content");

  section.scrollTop = 70;
};

export const handleDelete = (updateStore, index) =>
  updateStore((s) => {
    s.tradeInputs.fields.splice(index, 1);
    const label = s.tradeInputs.fields[index].label;
    const freq = s.uniqueLabels[label].count - 1;
    if (freq === 0) {
      delete s.uniqueLabels[label];
    } else s.uniqueLabels[label].count = freq;
  });
