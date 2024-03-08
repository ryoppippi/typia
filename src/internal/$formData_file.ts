export const $formData_file = (
  input: string | File | null,
): File | null | undefined =>
  input instanceof File
    ? input
    : input === null
    ? undefined
    : input === "null"
    ? null
    : (input as any);
