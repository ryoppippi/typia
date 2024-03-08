export const $httpHeaders_bigint = (value: string | undefined) =>
  value !== undefined
    ? value === "true"
      ? true
      : value === "false"
      ? false
      : value
    : undefined;
