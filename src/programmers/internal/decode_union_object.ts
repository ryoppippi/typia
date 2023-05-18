import type ts from "typescript/lib/tsclibrary";

import { MetadataObject } from "../../metadata/MetadataObject";

import { FeatureProgrammer } from "../FeatureProgrammer";

/**
 * @internal
 */
export const decode_union_object =
    (tsc: typeof ts) =>
    (
        checker: (
            input: ts.Expression,
            obj: MetadataObject,
            explore: FeatureProgrammer.IExplore,
        ) => ts.Expression,
    ) =>
    (
        decoder: (
            input: ts.Expression,
            obj: MetadataObject,
            explore: FeatureProgrammer.IExplore,
        ) => ts.Expression,
    ) =>
    (success: (exp: ts.Expression) => ts.Expression) =>
    (escaper: (value: ts.Expression, expected: string) => ts.Statement) =>
    (
        input: ts.Expression,
        targets: MetadataObject[],
        explore: FeatureProgrammer.IExplore,
    ): ts.CallExpression =>
        tsc.factory.createCallExpression(
            tsc.factory.createArrowFunction(
                undefined,
                undefined,
                [],
                undefined,
                undefined,
                iterate(tsc)(escaper)(
                    input,
                    targets.map((obj) => ({
                        type: "object",
                        is: () => success(checker(input, obj, explore)),
                        value: () => decoder(input, obj, explore),
                    })),
                    `(${targets.map((t) => t.name).join(" | ")})`,
                ),
            ),
            undefined,
            undefined,
        );

const iterate =
    (tsc: typeof ts) =>
    (escaper: (value: ts.Expression, expected: string) => ts.Statement) =>
    (input: ts.Expression, unions: IUnion[], expected: string) =>
        tsc.factory.createBlock(
            [
                ...unions.map((u) =>
                    tsc.factory.createIfStatement(
                        u.is(),
                        tsc.factory.createReturnStatement(u.value()),
                    ),
                ),
                escaper(input, expected),
            ],
            true,
        );

interface IUnion {
    type: string;
    is: () => ts.Expression;
    value: () => ts.Expression;
}
