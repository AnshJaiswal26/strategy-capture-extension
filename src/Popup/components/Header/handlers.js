let initialX = 0;
let initialY = 0;

export const handleMouseMove = (e, popup) => {
  e.preventDefault();

  const minVisibleX = 75;
  const minVisibleY = 40;
  const maxLeft = window.innerWidth - minVisibleX;
  const maxTop = window.innerHeight - minVisibleY;

  const newLeft = e.clientX - initialX;
  const newTop = e.clientY - initialY;

  const rect = popup.getBoundingClientRect();
  popup.style.left =
    Math.min(Math.max(minVisibleX - rect.width, newLeft), maxLeft) + "px";
  popup.style.top =
    Math.min(Math.max(Math.max(minVisibleY - rect.height, 0), newTop), maxTop) +
    "px";
};

export const handleMouseUp = () => {
  document.onmousemove = null;
  document.onmouseup = null;
};

export const handleMouseDown = (e) => {
  if (e.target.closest(".backtesting-popup-close-btn")) return;

  const popup = document.getElementById("find-my-edge-capture-popup");

  const rect = popup.getBoundingClientRect();
  initialX = e.clientX - rect.left;
  initialY = e.clientY - rect.top;

  document.onmousemove = (e) => handleMouseMove(e, popup);
  document.onmouseup = handleMouseUp;
};
