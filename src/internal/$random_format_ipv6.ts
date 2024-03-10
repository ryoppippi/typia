import { $random_integer } from "./$random_integer";

export const $random_format_ipv6 = (): string =>
  new Array(8)
    .fill(0)
    .map(() => $random_integer(0, 65_535))
    .join(":");
