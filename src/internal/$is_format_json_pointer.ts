export const $is_format_json_pointer = (str: string) => REGEX.test(str);
const REGEX = /^(?:\/(?:[^~/]|~0|~1)*)*$/;
