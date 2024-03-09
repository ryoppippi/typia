export const $is_format_duration = (str: string) => REGEX.test(str);
const REGEX =
  /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/;
