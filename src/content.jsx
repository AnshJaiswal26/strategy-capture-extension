import Popup from "./Popup/Popup";
import PopupToggleButton from "./PopupToggleButton/PopupToggleButton";
import { renderComponent, injectButtonInIframe } from "@utils";
import cssText from "./content.css?inline";

console.log("content script is loading......");

const isDhan = location.href.includes("https://tv.dhan.co");

const isAngelOne = location.href.includes(
  "https://www.angelone.in/trade/pro-trader"
);

const isGroww = location.href.includes("https://groww.in/charts");

const isUpstox =
  location.href.includes("https://tv.upstox.com/trading-terminal/charts") ||
  location.href.includes("https://pro.upstox.com");

const isZerodha =
  location.href.includes("https://kite.zerodha.com/markets/ext/chart") ||
  location.href.includes("https://kite-beta.zerodha.com");

if (isDhan || isAngelOne || isGroww || isUpstox || isZerodha) {
  renderComponent(
    "extension-shadow-root-wrapper",
    <Popup />,
    true,
    true,
    cssText
  );
  injectButtonInIframe(
    <PopupToggleButton _IS_EXTENSION_BUILD_={true} />,
    isZerodha
  );
  console.log("content script loaded");
}
