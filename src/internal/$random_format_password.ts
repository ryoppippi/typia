import { $random_integer } from "./$random_integer";
import { $random_string } from "./$random_string";

export const $random_format_password = (): string =>
  $random_string($random_integer(4, 16));
