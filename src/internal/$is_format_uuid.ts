export const $is_format_uuid = (str: string) => REGEX.test(str);
const REGEX = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i;
