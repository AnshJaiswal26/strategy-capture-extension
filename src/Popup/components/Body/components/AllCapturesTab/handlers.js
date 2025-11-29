export const handleDownload = (data) => {
  const csvContent = data
    .map((row) => row.map(({ value }) => value).join(","))
    .join("\n");
  const blob = new Blob([csvContent], { type: "text/csv;chartset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "captures.csv";
  link.click();
};

export const handleCopyToClipBoard = async (text, setIsCopied) => {
  setIsCopied(true);
  await navigator.clipboard.writeText(text);
  setTimeout(() => setIsCopied(false), 2000);
};
