import typia from "typia";
import { _test_misc_assertPrune } from "../../../internal/_test_misc_assertPrune";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_misc_createAssertPruneCustom_ConstantConstEnumeration =
  _test_misc_assertPrune(CustomGuardError)(
    "ConstantConstEnumeration",
  )<ConstantConstEnumeration>(ConstantConstEnumeration)(
    (
      input: any,
      errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
        new CustomGuardError(p),
    ): ConstantConstEnumeration => {
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): ConstantConstEnumeration => {
        const __is = (input: any): input is ConstantConstEnumeration => {
          return (
            Array.isArray(input) &&
            input.every(
              (elem: any) =>
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
            const $guard = (typia.misc.createAssertPrune as any).guard;
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
      };
      const prune = (input: ConstantConstEnumeration): void => {};
      assert(input, errorFactory);
      prune(input);
      return input;
    },
  );
