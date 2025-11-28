import Popup from "./Popup/Popup";
import PopupToggleButton from "./PopupToggleButton/PopupToggleButton";
import { renderComponent, injectButtonInIframe, injectScript } from "@utils";
import cssText from "./content.css?inline";

const brokerUrls = [
  "https://tv.dhan.co",
  "https://www.angelone.in/trade/pro-trader",
  "https://groww.in/charts",
  "https://tv.upstox.com/trading-terminal/charts",
  "https://pro.upstox.com",
];

const isValidBroker = brokerUrls.some((url) => location.href.includes(url));

if (isValidBroker) {
  renderComponent(
    "extension-shadow-root-wrapper",
    <Popup />,
    true,
    true,
    cssText
  );
  injectButtonInIframe(<PopupToggleButton _IS_EXTENSION_BUILD_={true} />);

  injectScript(chrome.runtime.getURL("injected.js"));
}
