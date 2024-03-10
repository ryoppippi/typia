import { $random_integer } from "./$random_integer";

export const $random_ipv4 = (): string =>
  new Array(4)
    .fill(0)
    .map(() => $random_integer(0, 255))
    .join(".");
