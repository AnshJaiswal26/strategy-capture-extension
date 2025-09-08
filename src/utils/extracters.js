import { extractText } from "./canvasToText";

export const extractTimeDateAndDay = (text) => {
  const regex =
    /(?<day>\b[A-Z][a-z]{2})(?<date>\d{1,2})(?<month>[A-Z][a-z]{2})(?<year>\d{2})\s+(?<time>\d{2}:\d{2})/;
  const { date, month, year, day, time } = text.match(regex).groups;

  console.timeEnd("time");
  return { date: `${date}-${month}-${year}`, day: day, time: time };
};

export const extractPriceAndCalculateRR = (text) => {
  const cleaned = text.split("\n");
  const prices = cleaned.map((v) => v.replace(",", ""));

  const target = Number(prices[0]);
  const entry = Number(prices[1]);
  const stopLoss = Number(prices[2]);

  const parse = (v) => Number(parseFloat(v).toFixed(2));

  const targetPts = parse(target - entry);
  const stopLossPts = parse(entry - stopLoss);

  const riskReward = parse(targetPts / stopLossPts);

  console.timeEnd("time");

  return {
    targetPts: targetPts,
    stopLossPts: stopLossPts,
    riskReward: riskReward,
  };
};
