import { $random_integer } from "./$random_integer";

export const $random_format_relative_json_pointer = (): string =>
  `${$random_integer(0, 10)}#`;
