import { $random_string } from "./$random_string";

export const $random_format_url = (): string =>
  `https://${$random_string(10)}.${$random_string(3)}`;
