export const $is_format_uri_reference = (str: string) => REGEX.test(str);
const REGEX =
  /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i;
