import { $random_string } from "./$random_string";

export const $random_format_hostname = (): string =>
  `${$random_string(10)}.${$random_string(3)}`;
