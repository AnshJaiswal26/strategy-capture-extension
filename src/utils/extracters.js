const days = {
  Mon: "Monday",
  Tue: "Tuesday",
  Wed: "Wednesday",
  Thu: "Thursday",
  Fri: "Friday",
};

const monthMap = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

export const extractPriceResults = (prices, result = "profit") => {
  const [entry, target, stopLoss] = prices.map((v) =>
    Number(v.replace(",", ""))
  );

  const parse = (v) => Number(parseFloat(v).toFixed(2));

  const targetPts = parse(target - entry);
  const stopLossPts = parse(entry - stopLoss);
  const riskReward = parse(targetPts / stopLossPts);

  return {
    Result:
      result === "profit"
        ? "Target"
        : result === "breakeven"
        ? "Breakeven"
        : "Stop-Loss",
    "Risk/Reward": riskReward,
    "Trade Number": "Trade 1",
  };
};

export const extractTimeResults = (timeText) => {
  const regex =
    /(?<day>[A-Z]{2,3})\s*(?<date>\d{1,2})\s*(?<month>[A-Z]{3})\s*(?<year>\d{2,4})\s*(?<time>\d{2}:\d{2})/gi;
  const matches = [...timeText.matchAll(regex)];

  const { date, month, year, day, time } = matches[0].groups;

  const dateFormat = new Date(
    Date.UTC(parseInt(`20${year}`), monthMap[month], parseInt(date))
  );
  const isoDate = dateFormat.toISOString().slice(0, 10);

  return { Date: isoDate, Day: days[day], Time: time };
};
