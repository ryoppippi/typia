export const $json_stringify_rest = (str: string): string =>
  str.length === 2 ? "" : "," + str.substring(1, str.length - 1);
