export const $is_format_date_time = (str: string) =>
  !isNaN(new Date(str).getTime());
