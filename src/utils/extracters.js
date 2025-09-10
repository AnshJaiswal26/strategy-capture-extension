import { useExtensionStore } from "@store";

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

export const extractPriceAndCalculateRR = (
  text,
  position = "Long",
  result = "profit"
) => {
  const cleaned = text.split("\n");
  const prices = cleaned.map((v) => v.replace(/[,\[\]\(\)]/g, ""));

  const isLong = position === "Long";
  const target = isLong ? Number(prices[0]) : Number(prices[2]);
  const entry = Number(prices[1]);
  const stopLoss = isLong ? Number(prices[2]) : Number(prices[0]);

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

export const extractPriceAndTime = (priceText, dateTimeText) => {
  const regex =
    /(?<day>[A-Z]{3})\s*(?<date>\d{1,2})\s*(?<month>[A-Z]{3})\s*(?<year>\d{2,4})\s*(?<time>\d{2}:\d{2})/gi;
  // const matches = [...dateTimeText.matchAll(regex)];

  const matches = [...dateTimeText.matchAll(regex)];
  if (matches.length > 0 && matches[0].groups) {
    const { day, date, month, year, time } = matches[0].groups;
    console.log({ day, date, month, year, time });
  }

  const { date, month, year, day, time } = matches[0].groups;

  const dateFormat = new Date(
    Date.UTC(parseInt(`20${year}`), monthMap[month], parseInt(date))
  );
  const isoDate = dateFormat.toISOString().slice(0, 10);

  const priceData = extractPriceAndCalculateRR(priceText);

  console.log({ Date: isoDate, Day: days[day], Time: time, ...priceData });

  return { Date: isoDate, Day: days[day], Time: time, ...priceData };
};
