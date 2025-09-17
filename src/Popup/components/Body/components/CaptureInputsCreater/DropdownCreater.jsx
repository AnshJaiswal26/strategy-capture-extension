export default function DropdownCreater({ updatePopupUIBatch }) {
  const addOptions = useExtensionStore((s) => s.popupUI.addOptions);

  return (
    <>
      {addOptions.map((option, index) => (
        <Fragment key={`-${index}`}>
          <div className="row-input">
            <Input
              type={"input"}
              field={"addOptions"}
              placeholder={`Option ${index + 1}`}
              selector={option}
              onChange={(v) =>
                updatePopupUIBatch([
                  {
                    name: "addOptions",
                    payload: v,
                    operation: "update",
                    index,
                  },
                ])
              }
            />
          </div>

          <Button
            text={<Trash size={16} />}
            size="small"
            type="hollow"
            onClick={() =>
              updatePopupUIBatch([
                { name: "addOptions", operation: "delete", index },
              ])
            }
          />
          <div className="filler"></div>
        </Fragment>
      ))}

      {repeatElement(<div className="filler"></div>, 2)}
      <Button
        text={"+ Add Option"}
        type="hollow"
        size="very-small"
        onClick={() =>
          updatePopupUIBatch([{ name: "addOptions", operation: "add" }])
        }
      />
    </>
  );
}
