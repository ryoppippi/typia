export const $is_format_byte = (str: string) => {
  REGEX.lastIndex = 0;
  return REGEX.test(str);
};
const REGEX =
  /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
