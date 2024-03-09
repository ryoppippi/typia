export const $is_format_time = (str: string) => REGEX.test(str);
const REGEX = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
