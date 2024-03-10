import { $random_length } from "./$random_length";

export const $random_array = <T>(
  closure: (index: number) => T,
  count?: number,
): T[] =>
  new Array(count ?? $random_length())
    .fill(0)
    .map((_e, index) => closure(index));
