import { Input } from "@components";
import TradeInputGenerator from "./TradeInputGenerator";
import TradeInputRows from "./TradeInputRows";
import { handleChange } from "./handlers";

export default function RecentTab({ updateStore }) {
  return (
    <>
      <div className="inputs-and-generator-wrapper">
        <div className="account-size-and-risk-wrapper">
          {[
            {
              label: "Account Size",
              placeHolder: "Enter Capital",
              field: "accountSize",
            },
            {
              label: "Risk (%)",
              placeHolder: "Enter risk (%)",
              field: "riskPercent",
            },
            {
              label: "Risk (₹)",
              placeHolder: "Enter risk (₹)",
              field: "riskAmount",
            },
          ].map((input, i) => (
            <Input
              key={`input_${i}`}
              label={input.label}
              type={"number"}
              placeholder={input.placeHolder}
              selector={(s) => s[input.field]}
              onChange={(v) =>
                updateStore((s) => handleChange(input.field, v, s))
              }
            />
          ))}
        </div>
        <TradeInputGenerator updateStore={updateStore} />
      </div>
      <TradeInputRows updateStore={updateStore} />
    </>
  );
}
