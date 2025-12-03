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
