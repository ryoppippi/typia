export const $formData_bigint = (
  input: string | File | null,
): bigint | null | undefined =>
  input instanceof File
    ? (input as any)
    : !!input?.length
    ? input === "null"
      ? null
      : (stoll(input) as any)
    : undefined;

const stoll = (str: string): bigint | string => {
  try {
    return BigInt(str);
  } catch {
    return str;
  }
};
