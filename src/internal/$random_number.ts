export const $random_number = (min?: number, max?: number): number => {
  min ??= 0;
  max ??= 100;
  return Math.random() * (max - min) + min;
};
