import { $is_variable } from "./$is_variable";

export const $access_expression = (str: string): string =>
  $is_variable(str) ? `.${str}` : `[${JSON.stringify(str)}]`;
