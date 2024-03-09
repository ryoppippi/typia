export const $is_format_json_pointer_uri_fragment = (str: string) =>
  REGEX.test(str);
const REGEX = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i;
