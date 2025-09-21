import { useExtensionStore } from "@store";
import Header from "./Header";
import ToolBar from "./Toolbar";

export default function AllCapturesTab() {
  const allCaptures = useExtensionStore((s) => s.popupUI.allCaptures);

  return (
    <>
      <ToolBar length={allCaptures.length} />

      {allCaptures.length === 0 ? (
        <div className="no-input-found">
          <span>No Captures Found</span>
        </div>
      ) : (
        allCaptures.map((capture, index) => (
          <div className="all-captures-row-wrapper" key={index}>
            <Header capture={capture} index={index} />
            <Row capture={capture} />
          </div>
        ))
      )}
    </>
  );
}

function Row({ capture }) {
  return (
    <div className="all-captures-row">
      {capture.map(({ label, value }, i) => (
        <div className="column" key={i}>
          <div className="key">{label}</div>
          <div className="value">{value}</div>
        </div>
      ))}
    </div>
  );
}
