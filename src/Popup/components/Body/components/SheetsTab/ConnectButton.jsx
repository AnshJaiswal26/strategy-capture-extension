import { Button } from "@/components";
import { useExtensionStore } from "@/stores/useExtensionStore";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const ConnectButton = ({ updateStore }) => {
  const isSheetIdEmpty = useExtensionStore((s) => s.sheetId === "");
  const status = useExtensionStore((s) => s.sheetStatus);

  const handleDisconnect = () => {
    updateStore((s) => {
      s.sheetStatus = "DISCONNECTED";
      s.sheetId = "";
      s.sheetNames = [];
      s.selectedSheet = "";
    });

    useExtensionStore.getState().showToast("success", "Sheet Disconnected");
  };

  return (
    <Button
      text={
        <div className="connect-button-text">
          {status !== "CONNECTED" ? (
            <>
              Connect <ArrowRight size={18} />
            </>
          ) : (
            <>
              <ArrowLeft size={18} /> Disconnect
            </>
          )}
        </div>
      }
      loading={status === "CONNECTING.."}
      disable={isSheetIdEmpty && !status === ""}
      onClick={
        status !== "CONNECTED"
          ? useExtensionStore.getState().connectToSheet
          : handleDisconnect
      }
    />
  );
};
