export const trackPrice = () => {
  let lastPrice;
  const titleElement = document.head.querySelector("title");

  const observer = new MutationObserver(() => {
    const splitedText = document.title.split(" ");
    const livePrice = splitedText[splitedText.length - 2];
    if (lastPrice === livePrice) return;

    if (livePrice) console.log(livePrice);
    lastPrice = livePrice;
  });

  observer.observe(titleElement, {
    childList: true,
    subtree: true,
    characterData: true,
  });
};
