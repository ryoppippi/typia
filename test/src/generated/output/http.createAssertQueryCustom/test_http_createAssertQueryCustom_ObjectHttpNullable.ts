import typia from "typia";
import { _test_http_assertQuery } from "../../../internal/_test_http_assertQuery";
import { ObjectHttpNullable } from "../../../structures/ObjectHttpNullable";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_http_createAssertQueryCustom_ObjectHttpNullable =
  _test_http_assertQuery(CustomGuardError)(
    "ObjectHttpNullable",
  )<ObjectHttpNullable>(ObjectHttpNullable)(
    (
      input: string | URLSearchParams,
      errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
        new CustomGuardError(p),
    ): import("typia").Resolved<ObjectHttpNullable> => {
      const decode = (
        input: string | URLSearchParams,
      ): import("typia").Resolved<ObjectHttpNullable> => {
        const $params = (typia.http.createAssertQuery as any).params;
        const $boolean = (typia.http.createAssertQuery as any).boolean;
        const $bigint = (typia.http.createAssertQuery as any).bigint;
        const $number = (typia.http.createAssertQuery as any).number;
        const $string = (typia.http.createAssertQuery as any).string;
        const $array = (typia.http.createAssertQuery as any).array;
        input = $params(input) as URLSearchParams;
        const output = {
          boolean: $boolean(input.get("boolean")),
          bigint: $bigint(input.get("bigint")),
          number: $number(input.get("number")),
          string: $string(input.get("string")),
          constantBoolean: $boolean(input.get("constantBoolean")),
          constantBigint: $bigint(input.get("constantBigint")),
          constantNumber: $number(input.get("constantNumber")),
          constantString: $string(input.get("constantString")),
          nullableArray: $array(
            input.getAll("nullableArray").map((elem: any) => $number(elem)),
            null,
          ),
        };
        return output as any;
      };
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): ObjectHttpNullable => {
        const __is = (input: any): input is ObjectHttpNullable => {
          const $io0 = (input: any): boolean =>
            (null === input.boolean || "boolean" === typeof input.boolean) &&
            (null === input.bigint || "bigint" === typeof input.bigint) &&
            (null === input.number ||
              ("number" === typeof input.number &&
                Number.isFinite(input.number) &&
                1 <= input.number)) &&
            (null === input.string || "string" === typeof input.string) &&
            (null === input.constantBoolean ||
              true === input.constantBoolean) &&
            (null === input.constantBigint ||
              BigInt(1) === input.constantBigint ||
              BigInt(2) === input.constantBigint ||
              BigInt(3) === input.constantBigint) &&
            (null === input.constantNumber ||
              1 === input.constantNumber ||
              2 === input.constantNumber ||
              3 === input.constantNumber) &&
            (null === input.constantString ||
              "one" === input.constantString ||
              "three" === input.constantString ||
              "two" === input.constantString) &&
            (null === input.nullableArray ||
              (Array.isArray(input.nullableArray) &&
                input.nullableArray.every(
                  (elem: any) =>
                    "number" === typeof elem && Number.isFinite(elem),
                )));
          return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ObjectHttpNullable => {
            const $guard = (typia.http.createAssertQuery as any).guard;
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (null === input.boolean ||
                "boolean" === typeof input.boolean ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".boolean",
                    expected: "(boolean | null)",
                    value: input.boolean,
                  },
                  errorFactory,
                )) &&
              (null === input.bigint ||
                "bigint" === typeof input.bigint ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".bigint",
                    expected: "(bigint | null)",
                    value: input.bigint,
                  },
                  errorFactory,
                )) &&
              (null === input.number ||
                ("number" === typeof input.number &&
                  (Number.isFinite(input.number) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".number",
                        expected: "number",
                        value: input.number,
                      },
                      errorFactory,
                    )) &&
                  (1 <= input.number ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".number",
                        expected: "number & Minimum<1>",
                        value: input.number,
                      },
                      errorFactory,
                    ))) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".number",
                    expected: "((number & Minimum<1>) | null)",
                    value: input.number,
                  },
                  errorFactory,
                )) &&
              (null === input.string ||
                "string" === typeof input.string ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".string",
                    expected: "(null | string)",
                    value: input.string,
                  },
                  errorFactory,
                )) &&
              (null === input.constantBoolean ||
                true === input.constantBoolean ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".constantBoolean",
                    expected: "(null | true)",
                    value: input.constantBoolean,
                  },
                  errorFactory,
                )) &&
              (null === input.constantBigint ||
                BigInt(1) === input.constantBigint ||
                BigInt(2) === input.constantBigint ||
                BigInt(3) === input.constantBigint ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".constantBigint",
                    expected: "(1 | 2 | 3 | null)",
                    value: input.constantBigint,
                  },
                  errorFactory,
                )) &&
              (null === input.constantNumber ||
                1 === input.constantNumber ||
                2 === input.constantNumber ||
                3 === input.constantNumber ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".constantNumber",
                    expected: "(1 | 2 | 3 | null)",
                    value: input.constantNumber,
                  },
                  errorFactory,
                )) &&
              (null === input.constantString ||
                "one" === input.constantString ||
                "three" === input.constantString ||
                "two" === input.constantString ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".constantString",
                    expected: '("one" | "three" | "two" | null)',
                    value: input.constantString,
                  },
                  errorFactory,
                )) &&
              (null === input.nullableArray ||
                ((Array.isArray(input.nullableArray) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".nullableArray",
                      expected: "(Array<number> | null)",
                      value: input.nullableArray,
                    },
                    errorFactory,
                  )) &&
                  input.nullableArray.every(
                    (elem: any, _index1: number) =>
                      ("number" === typeof elem && Number.isFinite(elem)) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".nullableArray[" + _index1 + "]",
                          expected: "number",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".nullableArray",
                    expected: "(Array<number> | null)",
                    value: input.nullableArray,
                  },
                  errorFactory,
                ));
            return (
              ((("object" === typeof input && null !== input) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ObjectHttpNullable",
                    value: input,
                  },
                  errorFactory,
                )) &&
                $ao0(input, _path + "", true)) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ObjectHttpNullable",
                  value: input,
                },
                errorFactory,
              )
            );
          })(input, "$input", true);
        return input;
      };
      const output = decode(input);
      return assert(output, errorFactory) as any;
    },
  );
