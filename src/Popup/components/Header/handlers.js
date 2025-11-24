let offsetX = 0;
let offsetY = 0;

export const handleMouseDown = (e, popupRef) => {
  if (e.target.closest(".backtesting-popup-close-btn")) return;

  const popup = popupRef.current;
  const rect = popup.getBoundingClientRect();

  // Store difference between mouse & popup
  offsetX = e.clientX - rect.left;
  offsetY = e.clientY - rect.top;

  document.onmousemove = (event) => handleMouseMove(event, popup);
  document.onmouseup = handleMouseUp;
};

export const handleMouseMove = (e, popup) => {
  e.preventDefault();

  // New absolute position
  let newLeft = e.clientX - offsetX;
  let newTop = e.clientY - offsetY;

  const popupRect = popup.getBoundingClientRect();

  // boundaries
  const minX = -(popupRect.width - 40);
  const maxX = window.innerWidth - 40;
  const minY = 0;
  const maxY = window.innerHeight - 40;

  newLeft = Math.max(minX, Math.min(newLeft, maxX));
  newTop = Math.max(minY, Math.min(newTop, maxY));

  popup.style.left = newLeft + "px";
  popup.style.top = newTop + "px";
};

export const handleMouseUp = () => {
  document.onmousemove = null;
  document.onmouseup = null;
};
