import { $random_string } from "./$random_string";

export const $random_format_json_pointer = (): string =>
  `/components/schemas/${$random_string(10)}`;
