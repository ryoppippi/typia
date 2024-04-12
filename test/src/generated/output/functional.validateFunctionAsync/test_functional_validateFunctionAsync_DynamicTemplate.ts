import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../../internal/_test_functional_validateFunctionAsync";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";

export const test_functional_validateFunctionAsync_DynamicTemplate =
  _test_functional_validateFunctionAsync("DynamicTemplate")(DynamicTemplate)(
    (p: (input: DynamicTemplate) => Promise<DynamicTemplate>) =>
      async (
        input: DynamicTemplate,
      ): Promise<import("typia").IValidation<DynamicTemplate>> => {
        const paramResults = [
          ((input: any): typia.IValidation<DynamicTemplate> => {
            const errors = [] as any[];
            const __is = (input: any): input is DynamicTemplate => {
              const $io0 = (input: any): boolean =>
                Object.keys(input).every((key: any) => {
                  const value = input[key];
                  if (undefined === value) return true;
                  if (
                    "string" === typeof key &&
                    RegExp(/^prefix_(.*)/).test(key)
                  )
                    return "string" === typeof value;
                  if (
                    "string" === typeof key &&
                    RegExp(/(.*)_postfix$/).test(key)
                  )
                    return "string" === typeof value;
                  if (
                    "string" === typeof key &&
                    RegExp(/^value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(
                      key,
                    )
                  )
                    return "number" === typeof value && Number.isFinite(value);
                  if (
                    "string" === typeof key &&
                    RegExp(
                      /^between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
                    ).test(key)
                  )
                    return "boolean" === typeof value;
                  return true;
                });
              return (
                "object" === typeof input &&
                null !== input &&
                false === Array.isArray(input) &&
                $io0(input)
              );
            };
            if (false === __is(input)) {
              const $report = (typia.functional.validateFunction as any).report(
                errors,
              );
              ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): input is DynamicTemplate => {
                const $join = (typia.functional.validateFunction as any).join;
                const $vo0 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): boolean =>
                  [
                    false === _exceptionable ||
                      Object.keys(input)
                        .map((key: any) => {
                          const value = input[key];
                          if (undefined === value) return true;
                          if (
                            "string" === typeof key &&
                            RegExp(/^prefix_(.*)/).test(key)
                          )
                            return (
                              "string" === typeof value ||
                              $report(_exceptionable, {
                                path: _path + $join(key),
                                expected: "string",
                                value: value,
                              })
                            );
                          if (
                            "string" === typeof key &&
                            RegExp(/(.*)_postfix$/).test(key)
                          )
                            return (
                              "string" === typeof value ||
                              $report(_exceptionable, {
                                path: _path + $join(key),
                                expected: "string",
                                value: value,
                              })
                            );
                          if (
                            "string" === typeof key &&
                            RegExp(
                              /^value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
                            ).test(key)
                          )
                            return (
                              ("number" === typeof value &&
                                Number.isFinite(value)) ||
                              $report(_exceptionable, {
                                path: _path + $join(key),
                                expected: "number",
                                value: value,
                              })
                            );
                          if (
                            "string" === typeof key &&
                            RegExp(
                              /^between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
                            ).test(key)
                          )
                            return (
                              "boolean" === typeof value ||
                              $report(_exceptionable, {
                                path: _path + $join(key),
                                expected: "boolean",
                                value: value,
                              })
                            );
                          return true;
                        })
                        .every((flag: boolean) => flag),
                  ].every((flag: boolean) => flag);
                return (
                  ((("object" === typeof input &&
                    null !== input &&
                    false === Array.isArray(input)) ||
                    $report(true, {
                      path: _path + "",
                      expected: "DynamicTemplate",
                      value: input,
                    })) &&
                    $vo0(input, _path + "", true)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "DynamicTemplate",
                    value: input,
                  })
                );
              })(input, "$input", true);
            }
            const success = 0 === errors.length;
            return {
              success,
              errors,
              data: success ? input : undefined,
            } as any;
          })(input) as import("typia").IValidation.IFailure,
        ].filter((r: any) => false === r.success);
        if (paramResults.length > 0)
          return {
            success: false,
            errors: paramResults
              .map((r: any, i: any) =>
                r.errors.map((error: any) => ({
                  ...error,
                  path: error.path.replace("$input", `$input.parameters[${i}]`),
                })),
              )
              .flat(),
          };
        const result = ((input: any): typia.IValidation<DynamicTemplate> => {
          const errors = [] as any[];
          const __is = (input: any): input is DynamicTemplate => {
            const $io0 = (input: any): boolean =>
              Object.keys(input).every((key: any) => {
                const value = input[key];
                if (undefined === value) return true;
                if ("string" === typeof key && RegExp(/^prefix_(.*)/).test(key))
                  return "string" === typeof value;
                if (
                  "string" === typeof key &&
                  RegExp(/(.*)_postfix$/).test(key)
                )
                  return "string" === typeof value;
                if (
                  "string" === typeof key &&
                  RegExp(/^value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(
                    key,
                  )
                )
                  return "number" === typeof value && Number.isFinite(value);
                if (
                  "string" === typeof key &&
                  RegExp(
                    /^between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
                  ).test(key)
                )
                  return "boolean" === typeof value;
                return true;
              });
            return (
              "object" === typeof input &&
              null !== input &&
              false === Array.isArray(input) &&
              $io0(input)
            );
          };
          if (false === __is(input)) {
            const $report = (typia.functional.validateFunction as any).report(
              errors,
            );
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is DynamicTemplate => {
              const $join = (typia.functional.validateFunction as any).join;
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  false === _exceptionable ||
                    Object.keys(input)
                      .map((key: any) => {
                        const value = input[key];
                        if (undefined === value) return true;
                        if (
                          "string" === typeof key &&
                          RegExp(/^prefix_(.*)/).test(key)
                        )
                          return (
                            "string" === typeof value ||
                            $report(_exceptionable, {
                              path: _path + $join(key),
                              expected: "string",
                              value: value,
                            })
                          );
                        if (
                          "string" === typeof key &&
                          RegExp(/(.*)_postfix$/).test(key)
                        )
                          return (
                            "string" === typeof value ||
                            $report(_exceptionable, {
                              path: _path + $join(key),
                              expected: "string",
                              value: value,
                            })
                          );
                        if (
                          "string" === typeof key &&
                          RegExp(
                            /^value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
                          ).test(key)
                        )
                          return (
                            ("number" === typeof value &&
                              Number.isFinite(value)) ||
                            $report(_exceptionable, {
                              path: _path + $join(key),
                              expected: "number",
                              value: value,
                            })
                          );
                        if (
                          "string" === typeof key &&
                          RegExp(
                            /^between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
                          ).test(key)
                        )
                          return (
                            "boolean" === typeof value ||
                            $report(_exceptionable, {
                              path: _path + $join(key),
                              expected: "boolean",
                              value: value,
                            })
                          );
                        return true;
                      })
                      .every((flag: boolean) => flag),
                ].every((flag: boolean) => flag);
              return (
                ((("object" === typeof input &&
                  null !== input &&
                  false === Array.isArray(input)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "DynamicTemplate",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "DynamicTemplate",
                  value: input,
                })
              );
            })(input, "$input", true);
          }
          const success = 0 === errors.length;
          return {
            success,
            errors,
            data: success ? input : undefined,
          } as any;
        })(await p(input));
        if (!result.success)
          result.errors = result.errors.map((error: any) => ({
            ...error,
            path: error.path.replace("$input", "$input.return"),
          }));
        return result;
      },
  );