import typia from "typia";
import { _test_functional_assertEqualsFunction } from "../../../internal/_test_functional_assertEqualsFunction";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_functional_assertEqualsFunctionCustom_ConstantConstEnumeration =
  _test_functional_assertEqualsFunction(CustomGuardError)(
    "ConstantConstEnumeration",
  )(ConstantConstEnumeration)(
    (p: (input: ConstantConstEnumeration) => ConstantConstEnumeration) =>
      (input: ConstantConstEnumeration): ConstantConstEnumeration => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (p) => new CustomGuardError(p);
        ((
          input: any,
          errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (
            p: any,
          ) =>
            errorFactoryWrapper({
              ...p,
              path: p.path
                ? p.path.replace("$input", "$input.parameters[0]")
                : undefined,
            }),
        ): ConstantConstEnumeration => {
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is ConstantConstEnumeration => {
            return (
              Array.isArray(input) &&
              input.every(
                (elem: any, _index1: number) =>
                  0 === elem ||
                  1 === elem ||
                  2 === elem ||
                  "Four" === elem ||
                  "Three" === elem,
              )
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ConstantConstEnumeration => {
              const $guard = (typia.functional.assertEqualsFunction as any)
                .guard;
              return (
                ((Array.isArray(input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "ConstantConstEnumeration",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  input.every(
                    (elem: any, _index1: number) =>
                      0 === elem ||
                      1 === elem ||
                      2 === elem ||
                      "Four" === elem ||
                      "Three" === elem ||
                      $guard(
                        true,
                        {
                          path: _path + "[" + _index1 + "]",
                          expected: '("Four" | "Three" | 0 | 1 | 2)',
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ConstantConstEnumeration",
                    value: input,
                  },
                  errorFactory,
                )
              );
            })(input, "$input", true);
          return input;
        })(input);
        return ((
          input: any,
          errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (
            p: any,
          ) =>
            errorFactoryWrapper({
              ...p,
              path: p.path
                ? p.path.replace("$input", "$input.return")
                : undefined,
            }),
        ): ConstantConstEnumeration => {
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is ConstantConstEnumeration => {
            return (
              Array.isArray(input) &&
              input.every(
                (elem: any, _index1: number) =>
                  0 === elem ||
                  1 === elem ||
                  2 === elem ||
                  "Four" === elem ||
                  "Three" === elem,
              )
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ConstantConstEnumeration => {
              const $guard = (typia.functional.assertEqualsFunction as any)
                .guard;
              return (
                ((Array.isArray(input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "ConstantConstEnumeration",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  input.every(
                    (elem: any, _index1: number) =>
                      0 === elem ||
                      1 === elem ||
                      2 === elem ||
                      "Four" === elem ||
                      "Three" === elem ||
                      $guard(
                        true,
                        {
                          path: _path + "[" + _index1 + "]",
                          expected: '("Four" | "Three" | 0 | 1 | 2)',
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ConstantConstEnumeration",
                    value: input,
                  },
                  errorFactory,
                )
              );
            })(input, "$input", true);
          return input;
        })(p(input));
      },
  );
