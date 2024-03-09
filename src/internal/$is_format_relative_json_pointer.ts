export const $is_format_relative_json_pointer = (str: string) =>
  REGEX.test(str);
const REGEX = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;
