import { Button, Input } from "@components";
import { useExtensionStore } from "@store";
import { Trash } from "lucide-react";

export default function DropdownGenerator({ updateStore }) {
  const inputOptions = useExtensionStore((s) => s.inputOptions);
  const isDropdown = useExtensionStore((s) => s.inputType === "Dropdown");
  if (!isDropdown) return null;

  return (
    <>
      <div className="divider" />
      <div className="dropdowns-section">
        <div>
          <Button
            text={"+ Add Option"}
            type="hollow"
            size="small"
            onClick={() => updateStore((s) => s.inputOptions.push(""))}
          />
        </div>
        <div className="dropdowns-wrapper">
          {inputOptions.length === 0 ? (
            <div className="empty-options-wrapper">
              <span>No Options Created</span>
            </div>
          ) : (
            inputOptions.map((option, index) => (
              <div className="dropdowns" key={index}>
                <Input
                  type={"input"}
                  placeholder={`Option ${index + 1}`}
                  selector={option}
                  onChange={(v) =>
                    updateStore((s) => {
                      s.inputOptions[index] = v;
                    })
                  }
                />
                <Button
                  text={<Trash size={16} />}
                  size="small"
                  type="hollow"
                  onClick={() =>
                    updateStore((s) => s.inputOptions.splice(index, 1))
                  }
                />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
