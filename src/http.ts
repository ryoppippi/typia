import { Atomic } from "./typings/Atomic";

import { IReadableURLSearchParams } from "./IReadableURLSearchParams";
import { IValidation } from "./IValidation";
import { Resolved } from "./Resolved";
import { TypeGuardError } from "./TypeGuardError";

/* ===========================================================
    HTTP
      - FORM-DATA
      - QUERY
      - HEADERS
      - PARAMETER
      - FACTORY FUNCTIONS
==============================================================
    FORM-DATA
----------------------------------------------------------- */
/**
 * Form data decoder.
 *
 * `typia.http.formData()` is a function decoding `FormData` instance, with
 * automatic type casting to the expected type. When roperty type be defined
 * as `boolean` or `Blob` type, `typia.http.formData()` will cast the value to
 * the expected type when decoding.
 *
 * By the way, as `FormData` is not enough to express complex data structures,
 * `typia.http.formData()` function has some limitations. If target type `T` is
 * not following those restrictions, compilation errors would be occurred.
 *
 * 1. Type `T` must be an object type
 * 2. Do not allow dynamic property
 * 3. Only `boolean`, `bigint`, `number`, `string`, `Blob`, `File` or their array types are allowed
 * 4. By the way, union type never be not allowed
 *
 * Also, `typia.http.formData()` function does not perform validation about the
 * decoded value. Therefore, if you can't sure that input data is following the
 * `T` type, it would better to call one of below functions instead.
 *
 * @template T Expected type of decoded value
 * @param input FormData instance
 * @returns Decoded form FormData
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function formData<T extends object>(input: FormData): Resolved<T>;

/**
 * @internal
 */
export function formData(): never {
  halt("formData");
}

/**
 * Form data decoder with type assertion.
 *
 * `typia.http.assertFormData()` is a function decoding `FormData` instance, with
 * automatic type casting to the expected type. When roperty type be defined
 * as `boolean` or `Blob` type, `typia.http.assertFormData()` will cast the value
 * to the expected type when decoding.
 *
 * Also, after decoding, `typia.http.assertFormData()` performs type assertion to
 * the decoded value by combining with {@link assert} function. Therefore, when
 * the decoded value is not following the `T` type, {@link TypeGuardError} or
 * custom error generated by *errorFactory* would be thrown.
 *
 * By the way, as `FormData` is not enough to express complex data structures,
 * `typia.http.assertFormData()` function has some limitations. If target type `T`
 * is not following those restrictions, compilation errors would be occurred.
 *
 * 1. Type `T` must be an object type
 * 2. Do not allow dynamic property
 * 3. Only `boolean`, `bigint`, `number`, `string`, `Blob`, `File` or their array types are allowed
 * 4. By the way, union type never be not allowed
 *
 * @template T Expected type of decoded value
 * @param input FormData instance
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns Decoded form FormData
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function assertFormData<T extends object>(
  input: FormData,
  errorFactory?:   ((props: TypeGuardError.IProps) => Error),
): Resolved<T>;

/**
 * @internal
 */
export function assertFormData(): never {
  halt("assertFormData");
}

/**
 * Form data decoder with type checking.
 *
 * `typia.http.isFormData()` is a function decoding `FormData` instance, with
 * automatic type casting to the expected type. When roperty type be defined
 * as `boolean` or `Blob` type, `typia.http.isFormData()` will cast the value
 * to the expected type when decoding.
 *
 * Also, after decoding, `typia.http.isFormData()` performs type checking to the
 * decoded value by combining with {@link is} function. Therefore, when the
 * decoded value is not following the `T` type, `null` value would be returned.
 *
 * By the way, as `FormData` is not enough to express complex data structures,
 * `typia.http.isFormData()` function has some limitations. If target type `T` is
 * not following those restrictions, compilation errors would be occurred.
 *
 * 1. Type `T` must be an object type
 * 2. Do not allow dynamic property
 * 3. Only `boolean`, `bigint`, `number`, `string`, `Blob`, `File` or their array types are allowed
 * 4. By the way, union type never be not allowed
 *
 * @template T Expected type of decoded value
 * @param input FormData instance
 * @returns Decoded form FormData or `null` value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function isFormData<T extends object>(
  input: FormData,
): Resolved<T> | null;

/**
 * @internal
 */
export function isFormData(): never {
  halt("isFormData");
}

/**
 * Form data decoder with type validation.
 *
 * `typia.http.validateFormData()` is a function decoding `FormData` instance,
 * with automatic type casting to the expected type. When roperty type be defined
 * as `boolean` or `Blob` type, `typia.http.validateFormData()` will cast the
 * value to the expected type when decoding.
 *
 * Also, after decoding, `typia.http.validateFormData()` performs type validation
 * to the decoded value by combining with {@link validate} function. Therefore,
 * when the decoded value is not following the `T` type,
 * {@link IValidation.IFailure} would be returned. Otherwise,
 * x@xxxx IValidation.ISuccess} would be returned.
 *
 * By the way, as `FormData` is not enough to express complex data structures,
 * `typia.http.validateFormData()` function has some limitations. If target type
 * `T` is not following those restrictions, compilation errors would be occurred.
 *
 * 1. Type `T` must be an object type
 * 2. Do not allow dynamic property
 * 3. Only `boolean`, `bigint`, `number`, `string`, `Blob`, `File` or their array types are allowed
 * 4. By the way, union type never be not allowed
 *
 * @template T Expected type of decoded value
 * @param input FormData instance
 * @returns Validation result with decoded form FormData
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function validateFormData<T extends object>(
  input: FormData,
): IValidation<Resolved<T>>;

/**
 * @internal
 */
export function validateFormData(): never {
  halt("validateFormData");
}

/* -----------------------------------------------------------
    QUERY
----------------------------------------------------------- */
/**
 * URL query decoder.
 *
 * `typia.http.query()` is a function decoding a query string or an `URLSearchParams`
 * instance, with automatic type casting to the expected type. When property type be
 * defined as `boolean` or `number` type, `typia.http.query()` will cast the value to
 * the expected type when decoding.
 *
 * By the way, as URL query is not enough to express complex data structures,
 * `typia.http.query()` function has some limitations. If target type `T` is not
 * following those restrictions, compilation errors would be occurred.
 *
 *  1. Type `T` must be an object type
 *  2. Do not allow dynamic property
 *  3. Only `boolean`, `bigint`, `number`, `string` or their array types are allowed
 *  4. By the way, union type never be not allowed
 *
 * Also, `typia.http.query()` function does not perform validation about the decoded
 * value. Therefore, if you can't sure that input data is following the `T` type,
 * it would better to call one of below functions instead.
 *
 *  - {@link assertQuery}
 *  - {@link isQuery}
 *  - {@link validateQuery}
 *
 * @template T Expected type of decoded value
 * @param input Query string or URLSearchParams instance
 * @returns Decoded query object
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function query<T extends object>(
  input: string | IReadableURLSearchParams,
): Resolved<T>;

/**
 * @internal
 */
export function query(): never {
  halt("query");
}

/**
 * URL query decoder with type assertion.
 *
 * `typia.http.assertQuery()` is a function decoding a query string or an
 * `URLSearchParams` instance, with automatic type casting to the expected type.
 * When property type be defined as `boolean` or `number` type,
 * `typia.http.assertQuery()` will cast the value to the expected type when decoding.
 *
 * Also, after decoding, `typia.http.assertQuery()` performs type assertion to the
 * decoded value by combining with {@link assert} function. Therefore, when the
 * decoded value is not following the `T` type, {@link TypeGuardError} or custom
 * error generated by *errorFactory* would be thrown.
 *
 * By the way, as URL query is not enough to express complex data structures,
 * `typia.http.assertQuery()` function has some limitations. If target type `T` is
 * notfollowing those restrictions, compilation errors would be occurred.
 *
 *  1. Type `T` must be an object type
 *  2. Do not allow dynamic property
 *  3. Only `boolean`, `bigint`, `number`, `string` or their array types are allowed
 *  4. By the way, union type never be not allowed
 *
 * @template T Expected type of decoded value
 * @param input Query string or URLSearchParams instance
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns Decoded query object
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function assertQuery<T extends object>(
  input: string | IReadableURLSearchParams,
  errorFactory?:   ((props: TypeGuardError.IProps) => Error),
): Resolved<T>;

/**
 * @internal
 */
export function assertQuery(): never {
  halt("assertQuery");
}

/**
 * URL query decoder with type checking.
 *
 * `typia.http.isQuery()` is a function decoding a query string or an
 * `URLSearchParams` instance, with automatic type casting to the expected type.
 * When property type be defined as `boolean` or `number` type,
 * `typia.http.isQuery()` will cast the value to the expected type when decoding.
 *
 * Also, after decoding, `typia.http.isQuery()` performs type checking to the
 * decoded value by combining with {@link is} function. Therefore, when the
 * decoded value is not following the `T` type, `null` value would be returned.
 *
 * By the way, as URL query is not enough to express complex data structures,
 * `typia.http.isQuery()` function has some limitations. If target type `T` is
 * notfollowing those restrictions, compilation errors would be occurred.
 *
 *  1. Type `T` must be an object type
 *  2. Do not allow dynamic property
 *  3. Only `boolean`, `bigint`, `number`, `string` or their array types are allowed
 *  4. By the way, union type never be not allowed
 *
 * @template T Expected type of decoded value
 * @param input Query string or URLSearchParams instance
 * @returns Decoded query object or `null` value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function isQuery<T extends object>(
  input: string | IReadableURLSearchParams,
): Resolved<T> | null;

/**
 * @internal
 */
export function isQuery(): never {
  halt("isQuery");
}

/**
 * URL query decoder with type validation.
 *
 * `typia.http.validateQuery()` is a function decoding a query string or an
 * `URLSearchParams` instance, with automatic type casting to the expected type.
 * When property type be defined as `boolean` or `number` type,
 * `typia.http.validateQuery()` will cast the value to the expected type when decoding.
 *
 * Also, after decoding, `typia.http.validateQuery()` performs type validation to the
 * decoded value by combining with {@link validate} function. Therefore, when the
 * decoded value is not following the `T` type, {@link IValidation.IFailure} would
 * be returned. Otherwise, {@link IValidation.ISuccess} would be returned.
 *
 * By the way, as URL query is not enough to express complex data structures,
 * `typia.http.validateQuery()` function has some limitations. If target type `T` is
 * notfollowing those restrictions, compilation errors would be occurred.
 *
 *  1. Type `T` must be an object type
 *  2. Do not allow dynamic property
 *  3. Only `boolean`, `bigint`, `number`, `string` or their array types are allowed
 *  4. By the way, union type never be not allowed
 *
 * @template T Expected type of decoded value
 * @param input Query string or URLSearchParams instance
 * @returns Validation result with decoded query object
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function validateQuery<T extends object>(
  input: string | IReadableURLSearchParams,
): IValidation<Resolved<T>>;

/**
 * @internal
 */
export function validateQuery(): never {
  halt("validateQuery");
}

/* -----------------------------------------------------------
    HEADERS
----------------------------------------------------------- */
/**
 * Headers decoder (for express and fastify).
 *
 * `typia.http.headers()` is a function decoding an header instance, with automatic
 * type casting to the expected type. When property type be defined as `boolean` or
 * `number` type, `typia.http.headers()` will cast the value to the expected type.
 *
 * By the way, as HTTP headers are not enough to express complex data structures,
 * `typia.http.headers()` function has some limitations. If target type `T` is not
 * following those restrictions, compilation errors would be occurred.
 *
 *  1. Type `T` must be an object type
 *  2. Do not allow dynamic property
 *  3. Property key must be lower case
 *  4. Property value cannot be `null`, but `undefined` is possible
 *  5. Only `boolean`, `bigint`, `number`, `string` or their array types are allowed
 *  6. By the way, union type never be not allowed
 *  7. Property `set-cookie` must be array type
 *  8. Those properties cannot be array type
 *    - age
 *    - authorization
 *    - content-length
 *    - content-type
 *    - etag
 *    - expires
 *    - from
 *    - host
 *    - if-modified-since
 *    - if-unmodified-since
 *    - last-modified
 *    - location
 *    - max-forwards
 *    - proxy-authorization
 *    - referer
 *    - retry-after
 *    - server
 *    - user-agent
 *
 * Also, `typia.http.headers()` function does not perform validation about the decoded
 * value. Therefore, if you can't sure that input data is following the `T` type,
 * it would better to call one of below functions instead.
 *
 *  - {@link assertHeaders}
 *  - {@link isHeaders}
 *  - {@link validateHeaders}
 *
 * @template T Expected type of decoded value
 * @param input Query string or URLSearchParams instance
 * @returns Decoded headers object
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function headers<T extends object>(
  input: Record<string, string | string[] | undefined>,
): Resolved<T>;

/**
 * @internal
 */
export function headers(): never {
  halt("headers");
}

/**
 * Headers decoder with type assertion (for express and fastify).
 *
 * `typia.http.assertHeaders()` is a function decoding an header instance, with
 * automatic type casting to the expected type. When property type be defined as
 * `boolean` or `number` type, `typia.http.headers()` will cast the value to the
 * expected type.
 *
 * Also, after decoding, `typia.http.assertHeaders()` performs type assertion to the
 * decoded value by combining with {@link assert} function. Therefore, when the
 * decoded value is not following the `T` type, {@link TypeGuardError} or custom
 * error generated by *errorFactory* would be thrown.
 *
 * By the way, as HTTP headers are not enough to express complex data structures,
 * `typia.http.headers()` function has some limitations. If target type `T` is not
 * following those restrictions, compilation errors would be occurred.
 *
 *  1. Type `T` must be an object type
 *  2. Do not allow dynamic property
 *  3. Property key must be lower case
 *  4. Property value cannot be `null`, but `undefined` is possible
 *  5. Only `boolean`, `bigint`, `number`, `string` or their array types are allowed
 *  6. By the way, union type never be not allowed
 *  7. Property `set-cookie` must be array type
 *  8. Those properties cannot be array type
 *    - age
 *    - authorization
 *    - content-length
 *    - content-type
 *    - etag
 *    - expires
 *    - from
 *    - host
 *    - if-modified-since
 *    - if-unmodified-since
 *    - last-modified
 *    - location
 *    - max-forwards
 *    - proxy-authorization
 *    - referer
 *    - retry-after
 *    - server
 *    - user-agent
 *
 * @template T Expected type of decoded value
 * @param input Query string or URLSearchParams instance
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns Decoded headers object
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function assertHeaders<T extends object>(
  input: Record<string, string | string[] | undefined>,
  errorFactory?:   ((props: TypeGuardError.IProps) => Error),
): Resolved<T>;

/**
 * @internal
 */
export function assertHeaders(): never {
  halt("assertHeaders");
}

/**
 * > You must configure the generic argument `T`.
 *
 * Headers decoder with type checking (for express and fastify).
 *
 * `typia.http.isHeaders()` is a function decoding an header instance, with
 * automatic type casting to the expected type. When property type be defined as
 * `boolean` or `number` type, `typia.http.headers()` will cast the value to the
 * expected type.
 *
 * Also, after decoding, `typia.http.isHeaders()` performs type checking to the
 * decoded value by combining with {@link is} function. Therefore, when the
 * decoded value is not following the `T` type, `null` value would be returned.
 *
 * By the way, as HTTP headers are not enough to express complex data structures,
 * `typia.http.headers()` function has some limitations. If target type `T` is not
 * following those restrictions, compilation errors would be occurred.
 *
 *  1. Type `T` must be an object type
 *  2. Do not allow dynamic property
 *  3. Property key must be lower case
 *  4. Property value cannot be `null`, but `undefined` is possible
 *  5. Only `boolean`, `bigint`, `number`, `string` or their array types are allowed
 *  6. By the way, union type never be not allowed
 *  7. Property `set-cookie` must be array type
 *  8. Those properties cannot be array type
 *    - age
 *    - authorization
 *    - content-length
 *    - content-type
 *    - etag
 *    - expires
 *    - from
 *    - host
 *    - if-modified-since
 *    - if-unmodified-since
 *    - last-modified
 *    - location
 *    - max-forwards
 *    - proxy-authorization
 *    - referer
 *    - retry-after
 *    - server
 *    - user-agent
 *
 * @template T Expected type of decoded value
 * @param input Query string or URLSearchParams instance
 * @returns Decoded headers object or `null` value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function isHeaders<T extends object>(
  input: Record<string, string | string[] | undefined>,
): Resolved<T> | null;

/**
 * @internal
 */
export function isHeaders(): never {
  halt("isHeaders");
}

/**
 * Headers decoder with type validation (for express and fastify).
 *
 * `typia.http.validateHeaders()` is a function decoding an header instance, with
 * automatic type casting to the expected type. When property type be defined as
 * `boolean` or `number` type, `typia.http.headers()` will cast the value to the
 * expected type.
 *
 * Also, after decoding, `typia.http.validateHeaders()` performs type assertion to the
 * decoded value by combining with {@link validate} function. Therefore, when the
 * decoded value is not following the `T` type, {@link IValidation.IError} would be
 * returned. Otherwise, {@link IValidation.ISuccess} be returned.
 *
 * By the way, as HTTP headers are not enough to express complex data structures,
 * `typia.http.headers()` function has some limitations. If target type `T` is not
 * following those restrictions, compilation errors would be occurred.
 *
 *  1. Type `T` must be an object type
 *  2. Do not allow dynamic property
 *  3. Property key must be lower case
 *  4. Property value cannot be `null`, but `undefined` is possible
 *  5. Only `boolean`, `bigint`, `number`, `string` or their array types are allowed
 *  6. By the way, union type never be not allowed
 *  7. Property `set-cookie` must be array type
 *  8. Those properties cannot be array type
 *    - age
 *    - authorization
 *    - content-length
 *    - content-type
 *    - etag
 *    - expires
 *    - from
 *    - host
 *    - if-modified-since
 *    - if-unmodified-since
 *    - last-modified
 *    - location
 *    - max-forwards
 *    - proxy-authorization
 *    - referer
 *    - retry-after
 *    - server
 *    - user-agent
 *
 * @template T Expected type of decoded value
 * @param input Query string or URLSearchParams instance
 * @returns Decoded headers object
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function validateHeaders<T extends object>(
  input: Record<string, string | string[] | undefined>,
): IValidation<Resolved<T>>;

/**
 * @internal
 */
export function validateHeaders(): never {
  halt("validateHeaders");
}

/* -----------------------------------------------------------
    PARAMETER
----------------------------------------------------------- */
/**
 * URL path parameter decoder.
 *
 * `typia.http.parameter()` is a function decoding a path parameter, with automatic
 * type casting to the expected type. When type `T` has been defined as `boolean` or
 * `number` type, `typia.http.parameter()` will cast the value to the expected type.
 *
 * Also, `typia.http.parameter()` performs type assertion to the decoded value by
 * combining with {@link assert} function. Therefore, when the decoded value is not
 * following the `T` type, {@link TypeGuardError} would be thrown.
 *
 * @template T Expected type of decoded value
 * @param input Path parameter string
 * @returns Decoded path parameter value
 */
export function parameter<T extends Atomic.Type | null>(
  input: string,
): Resolved<T>;

/**
 * @internal
 */
export function parameter(): never {
  halt("parameter");
}

/* -----------------------------------------------------------
    FACTORY FUNCTIONS
----------------------------------------------------------- */
/**
 * Creates a reusable {@link formdata} function.
 *
 * @danger You must configure the generic argument `T`
 * @template T The type of the formdata object
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createFormData(): never;

/**
 * Creates a reusable {@link formdata} function.
 *
 * @template T The type of the formdata object
 * @returns A reusable `formdata` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createFormData<T extends object>(): (input: FormData) => T;

/**
 * @internal
 */
export function createFormData<T>(): (input: FormData) => T {
  halt("createFormData");
}

/**
 * Creates a reusable {@link assertFormData} function.
 *
 * @danger You must configure the generic argument `T`
 * @template T The type of the formdata object
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createAssertFormData(
  errorFactory?:   ((props: TypeGuardError.IProps) => Error),
): never;

/**
 * Creates a reusable {@link assertFormData} function.
 *
 * @template T The type of the formdata object
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns A reusable `assertFormData` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createAssertFormData<T extends object>(
  errorFactory?:   ((props: TypeGuardError.IProps) => Error),
): (input: FormData) => T;

/**
 * @internal
 */
export function createAssertFormData<T>(): (input: FormData) => T {
  halt("createAssertFormData");
}

/**
 * Creates a reusable {@link isFormData} function.
 *
 * @danger You must configure the generic argument `T`
 * @template T The type of the formdata object
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createIsFormData(): never;

/**
 * Creates a reusable {@link isFormData} function.
 *
 * @template T The type of the formdata object
 * @returns A reusable `isFormData` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createIsFormData<T extends object>(): (
  input: FormData,
) => T | null;

/**
 * @internal
 */
export function createIsFormData<T>(): (input: FormData) => T | null {
  halt("createIsFormData");
}

/**
 * Creates a reusable {@link validateFormData} function.
 *
 * @danger You must configure the generic argument `T`
 * @template T The type of the formdata object
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createValidateFormData(): never;

/**
 * Creates a reusable {@link validateFormData} function.
 *
 * @template T The type of the formdata object
 * @returns A reusable `validateFormData` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createValidateFormData<T extends object>(): (
  input: FormData,
) => IValidation<Resolved<T>>;

/**
 * @internal
 */
export function createValidateFormData<T>(): (
  input: FormData,
) => IValidation<Resolved<T>> {
  halt("createValidateFormData");
}

/**
 * Creates a reusable {@link query} function.
 *
 * @danger You must configure the generic argument `T`
 * @template T The type of the query object
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createQuery(): never;

/**
 * Creates a reusable {@link query} function.
 *
 * @template T The type of the query object
 * @returns A reusable `query` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createQuery<T extends object>(): (
  input: string | IReadableURLSearchParams,
) => T;

/**
 * @internal
 */
export function createQuery<T>(): (
  input: string | IReadableURLSearchParams,
) => T {
  halt("createQuery");
}

/**
 * Creates a reusable {@link assertQuery} function.
 *
 * @danger You must configure the generic argument `T`
 * @template T The type of the query object
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createAssertQuery(
  errorFactory?:   ((props: TypeGuardError.IProps) => Error),
): never;

/**
 * Creates a reusable {@link assertQuery} function.
 *
 * @template T The type of the query object
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns A reusable `assertQuery` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createAssertQuery<T extends object>(
  errorFactory?:   ((props: TypeGuardError.IProps) => Error),
): (input: string | IReadableURLSearchParams) => T;

/**
 * @internal
 */
export function createAssertQuery<T>(): (
  input: string | IReadableURLSearchParams,
) => T {
  halt("createAssertQuery");
}

/**
 * Creates a reusable {@link isQuery} function.
 *
 * @danger You must configure the generic argument `T`
 * @template T The type of the query object
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createIsQuery(): never;

/**
 * Creates a reusable {@link isQuery} function.
 *
 * @template T The type of the query object
 * @returns A reusable `isQuery` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createIsQuery<T extends object>(): (
  input: string | IReadableURLSearchParams,
) => T | null;

/**
 * @internal
 */
export function createIsQuery<T>(): (
  input: string | IReadableURLSearchParams,
) => T | null {
  halt("createIsQuery");
}

/**
 * Creates a reusable {@link validateQuery} function.
 *
 * @danger You must configure the generic argument `T`
 * @template T The type of the query object
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createValidateQuery(): never;

/**
 * Creates a reusable {@link validateQuery} function.
 *
 * @template T The type of the query object
 * @returns A reusable `validateQuery` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createValidateQuery<T extends object>(): (
  input: string | IReadableURLSearchParams,
) => IValidation<Resolved<T>>;

/**
 * @internal
 */
export function createValidateQuery<T>(): (
  input: string | IReadableURLSearchParams,
) => IValidation<Resolved<T>> {
  halt("createValidateQuery");
}

/**
 * Creates a reusable {@link headers} function.
 *
 * @danger You must configure the generic argument `T`
 * @template T The type of the headers object
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createHeaders(): never;

/**
 * Creates a reusable {@link headers} function.
 *
 * @template T The type of the headers object
 * @returns A reusable `headers` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createHeaders<T extends object>(): (
  input: Record<string, string | string[] | undefined>,
) => T;

/**
 * @internal
 */
export function createHeaders<T>(): (
  input: Record<string, string | string[] | undefined>,
) => T {
  halt("createHeaders");
}

/**
 * Creates a reusable {@link assertHeaders} function.
 *
 * @danger You must configure the generic argument `T`
 * @template T The type of the headers object
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createAssertHeaders(
  errorFactory?:   ((props: TypeGuardError.IProps) => Error),
): never;

/**
 * Creates a reusable {@link assertHeaders} function.
 *
 * @template T The type of the headers object
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns A reusable `assertHeaders` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createAssertHeaders<T extends object>(
  errorFactory?:   ((props: TypeGuardError.IProps) => Error),
): (input: Record<string, string | string[] | undefined>) => T;

/**
 * @internal
 */
export function createAssertHeaders<T>(): (
  input: Record<string, string | string[] | undefined>,
) => T {
  halt("createAssertHeaders");
}

/**
 * Creates a reusable {@link isHeaders} function.
 *
 * @danger You must configure the generic argument `T`
 * @template T The type of the headers object
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createIsHeaders(): never;

/**
 * Creates a reusable {@link isHeaders} function.
 *
 * @template T The type of the headers object
 * @returns A reusable `isHeaders` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createIsHeaders<T extends object>(): (
  input: Record<string, string | string[] | undefined>,
) => T | null;

/**
 * @internal
 */
export function createIsHeaders<T>(): (
  input: Record<string, string | string[] | undefined>,
) => T | null {
  halt("createIsHeaders");
}

/**
 * Creates a reusable {@link validateHeaders} function.
 *
 * @danger You must configure the generic argument `T`
 * @template T The type of the headers object
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createValidateHeaders(): never;

/**
 * Creates a reusable {@link validateHeaders} function.
 *
 * @template T The type of the headers object
 * @returns A reusable `validateHeaders` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createValidateHeaders<T extends object>(): (
  input: Record<string, string | string[] | undefined>,
) => IValidation<Resolved<T>>;

/**
 * @internal
 */
export function createValidateHeaders<T>(): (
  input: Record<string, string | string[] | undefined>,
) => IValidation<Resolved<T>> {
  halt("createValidateHeaders");
}

/**
 * Creates a reusable {@link parameter} function.
 *
 * @danger You must configure the generic argument `T`
 * @template T The type of the parameter value
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createParameter(): never;

/**
 * Creates a reusable {@link parameter} function.
 *
 * @template T The type of the parameter value
 * @returns A reusable `parameter` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createParameter<T extends Atomic.Type | null>(): (
  input: string,
) => T;

/**
 * @internal
 */
export function createParameter<T extends Atomic.Type | null>(): (
  input: string,
) => T {
  halt("createParameter");
}

/**
 * @internal
 */
function halt(name: string): never {
  throw new Error(
    `Error on typia.http.${name}(): no transform has been configured. Read and follow https://typia.io/docs/setup please.`,
  );
}
