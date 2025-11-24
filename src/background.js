// console.log("Background.js running...");

// chrome.tabs.onUpdated.addListener((tabId, info, tab) => {
//   console.log("[TAB UPDATED]:", tab.url);

//   // ⛔ ignore events where tab.url is undefined or null
//   if (!tab.url) return;

//   if (info.status === "complete" && tab.url.includes("zerodha")) {
//     console.log("Injecting injector.js into dom...");

//     setTimeout(() => {
//       chrome.scripting.executeScript({
//         target: { tabId, allFrames: true },
//         files: ["injector.js"],
//         world: "MAIN",
//       });
//     }, 2000);
//   }
// });
