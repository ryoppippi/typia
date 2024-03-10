import { $random_integer } from "./$random_integer";

export const $random_pick = <T>(array: T[]): T =>
  array[$random_integer(0, array.length - 1)]!;
