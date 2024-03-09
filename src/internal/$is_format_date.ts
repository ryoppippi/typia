export const $is_format_date = (str: string) => REGEX.test(str);
const REGEX = /^(\d{4})-(\d{2})-(\d{2})$/;
