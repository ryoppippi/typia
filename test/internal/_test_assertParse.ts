import typia from "../../src";
import { Spoiler } from "../helpers/Spoiler";
import { primitive_equal_to } from "../helpers/primitive_equal_to";

export const _test_assertParse =
    <T>(
        name: string,
        generator: () => T,
        parser: (input: string) => typia.Primitive<T>,
        spoilers?: Spoiler<T>[],
    ) =>
    () => {
        const data: T = generator();
        const string: string = JSON.stringify(data);
        const expected: typia.Primitive<T> = JSON.parse(string);
        const parsed: typia.Primitive<T> = parser(string);

        if (primitive_equal_to(expected, parsed) === false) {
            throw new Error(
                `Bug on typia.assertParse(): failed to understand the ${name} type.`,
            );
        }

        for (const spoil of spoilers ?? []) {
            const elem: T = generator();
            const paths: string[] = spoil(elem);

            try {
                parser(JSON.stringify(elem));
            } catch (exp) {
                if (typia.is<typia.TypeGuardError>(exp))
                    if (exp.path && paths.includes(exp.path) === true) continue;
                    else
                        console.log({
                            input: paths,
                            expected: exp.path,
                        });
            }
            throw new Error(
                `Bug on typia.assertParse(): failed to detect error on the ${name} type.`,
            );
        }
    };
