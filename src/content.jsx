import BacktestingPopup from "./BacktestingPopup/BacktestingPopup";
import BacktestButton from "./backtestingButton/BacktestingButton";
import InfoTooltip from "./components/InfoTooltip";
import {
  injectButtonAndTooltipInDom,
  injectElementInDom,
} from "./utils/injectElementsInDom";
import "./content.css";

if (window.location.href.includes("https://tv.dhan.co")) {
  injectElementInDom(<BacktestingPopup />);
  injectButtonAndTooltipInDom(
    <BacktestButton _IS_EXTENSION_BUILD_={true} />,
    <InfoTooltip
      title={"Capture as Backtesed"}
      position="left"
      _IS_EXTENSION_BUILD_={true}
    />
  );
}
