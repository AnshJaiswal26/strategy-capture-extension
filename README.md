# Strategy Capture Extension

**Status:** Frontend complete, backend API integration pending  
**Part of:** Find-My-Edge project

## Features

- Capture trading metrics (risk-reward ratio, PnL, timeframe, trade date/time) from Dhan charts
- User-defined strategy naming and input creation

## Notes

- Backend API integration is in progress
- Currently works as a frontend prototype using static/mock data
- Built with React and included inside the `src` folder of this project

## Usage / Test

To test the extension locally:

1. Clone or download this repository.
2. Inside the repository (`strategy-capture-extension`), locate the `extension` folder — this is the built Chrome extension folder.
3. Open Chrome and go to `chrome://extensions/`.
4. Enable **Developer mode** (top-right corner).
5. Click **Load unpacked** and select the `extension` folder.
6. Open your preferred platform and test the extension — it now works across all supported brokers:
   - Dhan: https://tv.dhan.co/
   - AngelOne: https://www.angelone.in/trade/pro-trader
   - Groww: https://groww.in/charts
   - Upstox TV: https://tv.upstox.com/
   - Upstox Pro: https://pro.upstox.com/