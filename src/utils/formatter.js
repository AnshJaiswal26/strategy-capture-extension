export const format = (v) => {
  const val = +parseFloat(v).toFixed(2);
  return !isFinite(val) || isNaN(val) ? 0 : val;
};
