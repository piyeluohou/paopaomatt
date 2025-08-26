export const judgeGray = () => {
  const isGray = window.matchMedia('(prefers-color-scheme: grayscale)').matches;
  return isGray;
};
