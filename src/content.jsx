import Popup from "./Popup/Popup";
import PopupToggleButton from "./PopupToggleButton/PopupToggleButton";
import Tooltip from "./components/Tooltip/Tooltip";
import { renderComponent, injectButtonAndTooltipInIframe } from "@utils";
import "./content.css";

if (window.location.href.includes("https://tv.dhan.co")) {
  renderComponent("backtesting-extension-root", <Popup />, true);
  injectButtonAndTooltipInIframe(
    <PopupToggleButton _IS_EXTENSION_BUILD_={true} />,
    <Tooltip title={"Capture Your Strategies"} position="left" />
  );
}
