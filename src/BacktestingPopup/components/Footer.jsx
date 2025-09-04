import Button from "../../components/Button/Button";

export default function Footer() {
  return (
    <div className="backtesting-popup-footer-wrapper">
      <div className="backtesting-popup-footer">
        <div className="backtesting-popup-footer-btn-wrapper">
          <Button text={"Clear"} type="hollow" />
          <Button text={"Add"} type="fill" />
        </div>
      </div>
    </div>
  );
}
