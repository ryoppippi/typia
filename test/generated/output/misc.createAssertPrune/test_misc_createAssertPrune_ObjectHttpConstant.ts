import typia from "../../../../src";
import { _test_misc_assertPrune } from "../../../internal/_test_misc_assertPrune";
import { ObjectHttpConstant } from "../../../structures/ObjectHttpConstant";

export const test_misc_createAssertPrune_ObjectHttpConstant =
    _test_misc_assertPrune("ObjectHttpConstant")<ObjectHttpConstant>(
        ObjectHttpConstant,
    )((input: any): ObjectHttpConstant => {
        const assert = (input: any): ObjectHttpConstant => {
            const __is = (input: any): input is ObjectHttpConstant => {
                const $io0 = (input: any): boolean =>
                    false === input.boolean &&
                    (BigInt(1) === input.bigint ||
                        BigInt(99) === input.bigint) &&
                    (2 === input.number || 98 === input.number) &&
                    ("something" === input.string ||
                        "three" === input.string ||
                        "ninety-seven" === input.string) &&
                    "string" === typeof input.template &&
                    RegExp(/^abcd_(.*)/).test(input.template);
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ObjectHttpConstant => {
                    const $guard = (typia.misc.createAssertPrune as any).guard;
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (false === input.boolean ||
                            $guard(_exceptionable, {
                                path: _path + ".boolean",
                                expected: "false",
                                value: input.boolean,
                            })) &&
                        (BigInt(1) === input.bigint ||
                            BigInt(99) === input.bigint ||
                            $guard(_exceptionable, {
                                path: _path + ".bigint",
                                expected: "(1 | 99)",
                                value: input.bigint,
                            })) &&
                        (2 === input.number ||
                            98 === input.number ||
                            $guard(_exceptionable, {
                                path: _path + ".number",
                                expected: "(2 | 98)",
                                value: input.number,
                            })) &&
                        ("something" === input.string ||
                            "three" === input.string ||
                            "ninety-seven" === input.string ||
                            $guard(_exceptionable, {
                                path: _path + ".string",
                                expected:
                                    '("ninety-seven" | "something" | "three")',
                                value: input.string,
                            })) &&
                        (("string" === typeof input.template &&
                            RegExp(/^abcd_(.*)/).test(input.template)) ||
                            $guard(_exceptionable, {
                                path: _path + ".template",
                                expected: "`abcd_${string}`",
                                value: input.template,
                            }));
                    return (
                        ((("object" === typeof input && null !== input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "ObjectHttpConstant",
                                value: input,
                            })) &&
                            $ao0(input, _path + "", true)) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "ObjectHttpConstant",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            return input;
        };
        const prune = (input: ObjectHttpConstant): void => {
            const $po0 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if (
                        "boolean" === key ||
                        "bigint" === key ||
                        "number" === key ||
                        "string" === key ||
                        "template" === key
                    )
                        continue;
                    delete input[key];
                }
            };
            if ("object" === typeof input && null !== input) $po0(input);
        };
        assert(input);
        prune(input);
        return input;
    });