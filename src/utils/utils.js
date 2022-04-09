export const hexToRGB = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return alpha ? `rgba(${r}, ${g}, ${b}, ${alpha})` : `rgb(${r}, ${g}, ${b})`;
};

export const countdown = (s) => {
  const h = Math.floor(s / (60 * 60));
  s = s - h * 60 * 60;

  const m = Math.floor(s / 60);
  s = s - m * 60;

  return `${h}:${m}:${s}`;
};
