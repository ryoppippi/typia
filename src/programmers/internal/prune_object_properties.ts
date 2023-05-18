import type ts from "typescript/lib/tsclibrary";

import { StatementFactory } from "../../factories/StatementFactory";

import { MetadataObject } from "../../metadata/MetadataObject";

import { metadata_to_pattern } from "./metadata_to_pattern";

/**
 * @internal
 */
export const prune_object_properties =
    (tsc: typeof ts) => (obj: MetadataObject) => {
        const input: ts.Expression = tsc.factory.createIdentifier("input");
        const key: ts.Expression = tsc.factory.createIdentifier("key");

        const condition: ts.Expression[] = obj.properties.map((prop) => {
            const name: string | null = prop.key.getSoleLiteral();
            if (name !== null)
                return tsc.factory.createStrictEquality(
                    tsc.factory.createStringLiteral(name),
                    tsc.factory.createIdentifier("key"),
                );
            return tsc.factory.createCallExpression(
                tsc.factory.createIdentifier(
                    `RegExp(/${metadata_to_pattern(true)(prop.key)}/).test`,
                ),
                undefined,
                [key],
            );
        });

        const statements: ts.Statement[] = [];
        if (condition.length)
            statements.push(
                tsc.factory.createIfStatement(
                    condition.reduce((a, b) =>
                        tsc.factory.createLogicalOr(a, b),
                    ),
                    tsc.factory.createContinueStatement(),
                ),
            );
        statements.push(
            tsc.factory.createExpressionStatement(
                tsc.factory.createDeleteExpression(
                    tsc.factory.createElementAccessExpression(input, key),
                ),
            ),
        );

        return tsc.factory.createForOfStatement(
            undefined,
            StatementFactory.constant(tsc)("key").declarationList,
            tsc.factory.createCallExpression(
                tsc.factory.createIdentifier("Object.keys"),
                undefined,
                [input],
            ),
            statements.length === 1
                ? statements[0]!
                : tsc.factory.createBlock(statements, true),
        );
    };
