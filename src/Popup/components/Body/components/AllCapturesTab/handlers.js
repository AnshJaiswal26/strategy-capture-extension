export const handleDownload = (allCaptures) => {
  const max = Math.max(...allCaptures.map((r) => r.length));
  const csvContent = allCaptures
    .map((row) => row.map(({ value }) => value).join(","))
    .join("\n");
  const blob = new Blob([csvContent], { type: "text/csv;chartset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "captures.csv";
  link.click();
};

export const handleEdit = (capture, index, updater) => {
  document.getElementById("tab-recent").click();
  updater([
    { name: "captureMap", payload: capture, operation: "edit" },
    { name: "allCapturesUpdatingIdx", payload: index },
    { name: "isEdit", payload: true },
  ]);
};

export const copyToClipBoard = async (text, isCopied, setIsCopied) => {
  if (isCopied) return;
  setIsCopied(true);
  await navigator.clipboard.writeText(text);
  setTimeout(() => setIsCopied(false), 2000);
};
