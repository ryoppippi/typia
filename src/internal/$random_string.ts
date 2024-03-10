import { $random_integer } from "./$random_integer";

export const $random_string = (length?: number): string =>
  new Array(length ?? $random_integer(5, 10))
    .fill(0)
    .map(() => ALPHABETS[$random_integer(0, ALPHABETS.length - 1)])
    .join("");
const ALPHABETS = "abcdefghijklmnopqrstuvwxyz";
