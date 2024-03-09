export const $is_format_iri_reference = (str: string) => REGEX.test(str);
const REGEX = /^[A-Za-z][\d+-.A-Za-z]*:[^\u0000-\u0020"<>\\^`{|}]*$/u;
