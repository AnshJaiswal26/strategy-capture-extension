import { Input } from "@/components";
import { ConnectButton } from "./ConnectButton";

export const SheetIdInput = ({ updateStore }) => {
  return (
    <div className="sheet-input">
      <Input
        label={"Google Sheet ID"}
        type={"password"}
        placeholder="Enter Sheet ID..."
        selector={(s) => s.sheetId}
        title={true}
        onChange={(v) =>
          updateStore((s) => {
            s.sheetId = v;
          })
        }
      />
      <div>
        <ConnectButton updateStore={updateStore} />
      </div>
    </div>
  );
};
