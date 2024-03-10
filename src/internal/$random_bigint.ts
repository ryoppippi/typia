import { $random_integer } from "./$random_integer";

export const $random_bigint = (min?: bigint, max?: bigint): bigint =>
  BigInt($random_integer(Number(min ?? BigInt(0)), Number(max ?? BigInt(100))));
