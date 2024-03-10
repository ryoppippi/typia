import { $random_number } from "./$random_number";

export const $random_format_date = (min?: number, max?: number): string =>
  new Date($random_number(min ?? 0, max ?? Date.now() * 2))
    .toISOString()
    .substring(0, 10);
