const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

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
    /(?:(?<day>[A-Za-z]{3})\s+)?(?<date>\d{1,2})\s+(?<month>Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+'?(?<year>\d{2,4})(?:\s+(?<time>\d{1,2}:\d{2}))?/g;

  const rawMatches = [...timeText.matchAll(regex)];

  // remove invalid matches
  const matches = rawMatches.filter(
    (m) => m.groups.date && m.groups.month && m.groups.year
  );

  if (matches.length === 0) return null;

  let match = matches[0];

  // If the first one has no time and second exists → use second
  if (!match.groups.time && matches.length > 1) {
    match = matches[1];
  }

  console.log(matches[0], matches[1]);

  const { date, month, year, time } = match.groups;

  const fullYear = year.length === 2 ? `20${year}` : year;

  const jsDate = new Date(
    Date.UTC(parseInt(fullYear), monthMap[month], parseInt(date))
  );

  return {
    Date: jsDate.toISOString().slice(0, 10),
    Day: days[jsDate.getUTCDay() - 1],
    Time: time ?? null,
  };
};
