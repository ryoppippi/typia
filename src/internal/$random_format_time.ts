import { $random_number } from "./$random_number";

export const $random_format_time = (): string =>
  new Date($random_number(0, DAY)).toISOString().substring(11, 23);
const DAY = 86_400_000;
