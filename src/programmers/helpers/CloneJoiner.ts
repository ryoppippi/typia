import type ts from "typescript/lib/tsclibrary";

import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { Escaper } from "../../utils/Escaper";

import { metadata_to_pattern } from "../internal/metadata_to_pattern";
import { IExpressionEntry } from "./IExpressionEntry";

export namespace CloneJoiner {
    export const object =
        (tsc: typeof ts) =>
        (
            input: ts.Expression,
            entries: IExpressionEntry<ts.Expression>[],
        ): ts.ConciseBody => {
            if (entries.length === 0) return tsc.factory.createIdentifier("{}");

            const regular = entries.filter((e) => e.key.isSoleLiteral());
            const dynamic = entries.filter((e) => !e.key.isSoleLiteral());
            const literal = tsc.factory.createObjectLiteralExpression(
                regular.map((entry) => {
                    const str: string = entry.key.getSoleLiteral()!;
                    return tsc.factory.createPropertyAssignment(
                        Escaper.variable(str)
                            ? str
                            : tsc.factory.createStringLiteral(str),
                        entry.expression,
                    );
                }),
                true,
            );
            if (dynamic.length === 0) return literal;

            const key = tsc.factory.createIdentifier("key");
            const value = tsc.factory.createIdentifier("value");
            const output = tsc.factory.createIdentifier("output");

            const statements: ts.Statement[] = dynamic.map((entry) =>
                tsc.factory.createIfStatement(
                    tsc.factory.createCallExpression(
                        tsc.factory.createIdentifier(
                            `RegExp(/${metadata_to_pattern(true)(
                                entry.key,
                            )}/).test`,
                        ),
                        undefined,
                        [key],
                    ),
                    tsc.factory.createBlock([
                        tsc.factory.createExpressionStatement(
                            tsc.factory.createBinaryExpression(
                                tsc.factory.createElementAccessExpression(
                                    output,
                                    key,
                                ),
                                tsc.factory.createToken(
                                    tsc.SyntaxKind.EqualsToken,
                                ),
                                entry.expression,
                            ),
                        ),
                        tsc.factory.createContinueStatement(),
                    ]),
                ),
            );

            return tsc.factory.createBlock([
                StatementFactory.constant(tsc)(
                    "output",
                    tsc.factory.createAsExpression(
                        literal,
                        TypeFactory.keyword(tsc)("any"),
                    ),
                ),
                tsc.factory.createForOfStatement(
                    undefined,
                    tsc.factory.createVariableDeclarationList(
                        [
                            tsc.factory.createVariableDeclaration(
                                tsc.factory.createArrayBindingPattern([
                                    tsc.factory.createBindingElement(
                                        undefined,
                                        undefined,
                                        key,
                                        undefined,
                                    ),
                                    tsc.factory.createBindingElement(
                                        undefined,
                                        undefined,
                                        value,
                                        undefined,
                                    ),
                                ]),
                                undefined,
                                undefined,
                                undefined,
                            ),
                        ],
                        tsc.NodeFlags.Const,
                    ),
                    tsc.factory.createCallExpression(
                        tsc.factory.createIdentifier("Object.entries"),
                        undefined,
                        [input],
                    ),
                    tsc.factory.createBlock(statements),
                ),
                tsc.factory.createReturnStatement(output),
            ]);
        };

    export const tuple =
        (tsc: typeof ts) =>
        (
            children: ts.Expression[],
            rest: ts.Expression | null,
        ): ts.Expression => {
            return tsc.factory.createAsExpression(
                tsc.factory.createArrayLiteralExpression(
                    rest === null
                        ? children
                        : [...children, tsc.factory.createSpreadElement(rest)],
                    true,
                ),
                TypeFactory.keyword(tsc)("any"),
            );
        };

    export const array =
        (tsc: typeof ts) => (input: ts.Expression, arrow: ts.Expression) =>
            tsc.factory.createCallExpression(
                tsc.factory.createPropertyAccessExpression(input, "map"),
                undefined,
                [arrow],
            );
}
