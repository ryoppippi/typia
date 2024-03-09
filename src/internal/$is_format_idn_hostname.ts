export const $is_format_idn_hostname = (str: string) => REGEX.test(str);
const REGEX =
  /^([a-z0-9\u00a1-\uffff0-9]+(-[a-z0-9\u00a1-\uffff0-9]+)*\.)+[a-z\u00a1-\uffff]{2,}$/i;
