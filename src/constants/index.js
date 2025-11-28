export const MAPPINGS = [
  "None",
  "Time",
  "Date",
  "Day",
  "Time Frame",
  "Symbol",
  "Risk/Reward",
  "Pnl",
  "Result",
];

export const FIELD_TYPES = {
  number: "Number",
  time: "Time",
  date: "Date",
  text: "Text",
  dropdown: "Dropdown",
};

export const DEMO_FIELDS = [
  { label: "Time", type: "time", value: "06:02:50", mappedWith: "Time" },
  {
    label: "Date",
    type: "date",
    value: "2025-09-16",
    mappedWith: "Date",
  },
  { label: "Day", type: "text", value: "Monday", mappedWith: "Day" },
  {
    label: "Trade",
    type: "text",
    value: "Trade 1",
    mappedWith: "Trade Number",
  },
  { label: "Result", type: "text", value: "Target", mappedWith: "Result" },
  {
    label: "Risk/Reward",
    type: "text",
    value: "1:2",
    mappedWith: "Risk/Reward",
  },
  {
    label: "Time Frame",
    type: "text",
    value: "3 minutes",
    mappedWith: "Time Frame",
  },
  {
    label: "Entry Candle",
    type: "dropdown",
    options: ["Engulfing", "Spinning Top", "Pin Bar"],
    value: "Engulfing",
  },
  { label: "Pnl", type: "number", value: 1000, mappedWith: "Pnl" },
  {
    label: "Pullbacks",
    type: "dropdown",
    options: ["1st Pullback", "2nd Pullback", "3rd Pullback"],
    value: "2nd Pullback",
  },
  {
    label: "Entry Area",
    type: "dropdown",
    options: [
      "Near Support",
      "Near Resistance",
      "Middle",
      "Against Support",
      "Resistance Support",
    ],
    value: "Near Resistance",
  },
];
