import { $random_number } from "./$random_number";

export const $random_format_datetime = (min?: number, max?: number): string =>
  new Date(
    $random_number(min ?? Date.now() - 30 * DAY, max ?? Date.now() + 7 * DAY),
  ).toISOString();
const DAY = 86_400_000;
