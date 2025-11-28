(function () {
  console.log("Injected: TradingView tool listener active");

  const days = [
    "Sunday",
    "Monday",
    "Tueday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const calculateTimeFrame = (text = "") => {
    const num = parseInt(text) || 0;

    if (text.includes("S")) return `${num} seconds`;
    if (text.includes("D")) return `${num} ${num === 1 ? "day" : "days"}`;
    if (text.includes("W")) return `${num} ${num === 1 ? "week" : "weeks"}`;
    if (text.includes("M")) return `${num} ${num === 1 ? "month" : "months"}`;
    if (num % 60 === 0)
      return `${parseInt(num / 60)} ${num === 60 ? "hour" : "hours"}`;

    return `${num} ${num === 1 ? "minute" : "minutes"}`;
  };

  const calculateRiskReward = (tool) => {
    const parse = (v) => Number(parseFloat(v).toFixed(2));

    const entry = parse(tool.entryPrice());
    const target = parse(tool.profitPrice());
    const stop = parse(tool.stopPrice());

    const targetPts = parse(target - entry);
    const stopLossPts = parse(entry - stop);
    const rr = `1:${parse(targetPts / stopLossPts)}`;

    const price0 = parse(tool._points[0]?.price);
    const price3 = parse(tool._points[3]?.price);

    const result =
      price0 === undefined || price3 === undefined
        ? "BreakEven"
        : tool.name() === "Risk/Reward short"
        ? price3 > price0
          ? "Loss"
          : "Profit"
        : price3 > price0
        ? "Profit"
        : "Loss";

    return { riskReward: rr, result };
  };

  const calculateDataFromChartModel = ({
    chartModel,
    chartWidget,
    contentWindow,
  }) => {
    const tool = chartModel.selection()?._items?.[0];

    const time = tool.timeAxisPoints()[0]?.time;
    if (!time) return;

    const isNumber = typeof time === "number";
    const parsedTime = isNumber ? new Date(time * 1000) : time;

    const { riskReward, result } = calculateRiskReward(tool);

    const payload = {
      Date: parsedTime.toISOString().split("T")[0],
      Time: parsedTime.toTimeString().split(" ")[0],
      Day: days[parsedTime.getDay()],
      "Risk/Reward": riskReward,
      Result: result,
      Symbol: chartWidget.symbolProperty()._value,
      "Time Frame": calculateTimeFrame(
        contentWindow.tradingViewApi.getSymbolInterval().interval
      ),
    };

    return payload;
  };

  const injectCaptureButton = ({
    floatingToolbar,
    chartWidget,
    contentWindow,
  }) => {
    const chartModel = chartWidget.model();
    const tool = chartModel.selection()?._items?.[0];
    if (!tool) return;

    const name = tool.name();
    if (name !== "Risk/Reward long" && name !== "Risk/Reward short") return;

    const widgets = floatingToolbar?.getElementsByClassName(
      "floating-toolbar-react-widgets"
    )[0];

    if (!widgets) return null;

    const widgetsFirstChild = widgets.firstChild;

    if (
      !widgetsFirstChild ||
      widgetsFirstChild?.getAttribute("data-tooltip") === "Record Trade"
    )
      return null;

    const clonedSvgWrapper = widgets.lastChild.cloneNode(true);

    const span = clonedSvgWrapper.querySelector("span");
    span.removeChild(span.firstChild);

    span.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" 
         fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" 
         stroke-linejoin="round" class="lucide lucide-square-plus"
         style="margin-bottom:-3px; margin-left:3px;"
      >
        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
        <path d="M8 12h8"></path>
        <path d="M12 8v8"></path>
      </svg>
    `;

    clonedSvgWrapper.setAttribute("data-tooltip", "Record Trade");

    Object.assign(clonedSvgWrapper.style, {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    });

    clonedSvgWrapper.onclick = () => {
      const payload = calculateDataFromChartModel({
        chartModel,
        chartWidget,
        contentWindow,
      });

      console.log("Sending data to extension:", payload);

      // SEND data to content.js
      window.postMessage(
        {
          sender: "FIND_MY_EDGE",
          type: "TOOL_DATA",
          payload,
        },
        "*"
      );
    };

    widgets.prepend(clonedSvgWrapper);
  };

  function startToolListener() {
    let floatingToolbar;

    console.log("Checking for chart model…");

    const interval = setInterval(() => {
      const iframe = document.querySelector("iframe");
      if (!iframe) return;

      console.log("Searching for chart model....");

      const chartWidget = iframe.contentWindow?.chartWidget;
      if (!chartWidget) return;

      const chartModel = chartWidget.model?.();
      if (!chartModel) return;

      const contentDoc = iframe.contentDocument;

      console.log("Model found — settings obeserver");
      clearInterval(interval);

      let observerObservingToolbar = false;
      const observer = new MutationObserver(() => {
        if (!floatingToolbar) {
          const toolbars = contentDoc.body.getElementsByClassName?.(
            "tv-floating-toolbar"
          );

          for (let i = 0; i < toolbars.length; i++) {
            if (
              toolbars[i]?.getAttribute?.("data-name") === "drawing-toolbar"
            ) {
              floatingToolbar = toolbars[i];
            }
          }
        }

        if (!floatingToolbar) return;

        // --- inject button for the first time ---
        injectCaptureButton({
          floatingToolbar,
          chartWidget,
          contentWindow: iframe.contentWindow,
        });

        if (!observerObservingToolbar) {
          observer.disconnect();
          observer.observe(floatingToolbar, { childList: true, subtree: true });
          observerObservingToolbar = true;
        }
      });

      observer.observe(contentDoc.body, { childList: true, subtree: true });
    }, 300);
  }

  startToolListener();
})();
