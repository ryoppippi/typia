import type ts from "typescript/lib/tsclibrary";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { TemplateFactory } from "../../factories/TemplateFactory";

import { IExpressionEntry } from "../helpers/IExpressionEntry";
import { metadata_to_pattern } from "./metadata_to_pattern";

/**
 * @internal
 */
export const stringify_dynamic_properties =
    (tsc: typeof ts) =>
    (
        dynamic: IExpressionEntry<ts.Expression>[],
        regular: string[],
    ): ts.Expression => {
        // BASIC STATMEMENT, CHECK UNDEFINED
        const statements: ts.Statement[] = [
            tsc.factory.createIfStatement(
                tsc.factory.createStrictEquality(
                    tsc.factory.createIdentifier("undefined"),
                    tsc.factory.createIdentifier("value"),
                ),
                tsc.factory.createReturnStatement(
                    tsc.factory.createStringLiteral(""),
                ),
            ),
        ];

        // PREPARE RETURN FUNCTION
        const output = () => {
            const mapped = tsc.factory.createCallExpression(
                IdentifierFactory.access(tsc)(
                    tsc.factory.createCallExpression(
                        tsc.factory.createIdentifier("Object.entries"),
                        undefined,
                        [tsc.factory.createIdentifier("input")],
                    ),
                )("map"),
                undefined,
                [
                    tsc.factory.createArrowFunction(
                        undefined,
                        undefined,
                        [
                            IdentifierFactory.parameter(tsc)(
                                tsc.factory.createArrayBindingPattern([
                                    tsc.factory.createBindingElement(
                                        undefined,
                                        undefined,
                                        "key",
                                    ),
                                    tsc.factory.createBindingElement(
                                        undefined,
                                        undefined,
                                        "value",
                                    ),
                                ]),
                                tsc.factory.createTypeReferenceNode(
                                    "[string, any]",
                                ),
                            ),
                        ],
                        undefined,
                        undefined,
                        tsc.factory.createBlock(statements),
                    ),
                ],
            );
            const filtered = tsc.factory.createCallExpression(
                IdentifierFactory.access(tsc)(mapped)("filter"),
                undefined,
                [
                    tsc.factory.createArrowFunction(
                        undefined,
                        undefined,
                        [IdentifierFactory.parameter(tsc)("str")],
                        undefined,
                        undefined,
                        tsc.factory.createStrictInequality(
                            tsc.factory.createStringLiteral(""),
                            tsc.factory.createIdentifier("str"),
                        ),
                    ),
                ],
            );
            return tsc.factory.createCallExpression(
                IdentifierFactory.access(tsc)(filtered)("join"),
                undefined,
                [tsc.factory.createStringLiteral(",")],
            );
        };

        // WHEN REGULAR PROPERTY EXISTS
        if (regular.length)
            statements.push(
                tsc.factory.createIfStatement(
                    tsc.factory.createCallExpression(
                        IdentifierFactory.access(tsc)(
                            tsc.factory.createArrayLiteralExpression(
                                regular.map((key) =>
                                    tsc.factory.createStringLiteral(key),
                                ),
                            ),
                        )("some"),
                        undefined,
                        [
                            tsc.factory.createArrowFunction(
                                undefined,
                                undefined,
                                [IdentifierFactory.parameter(tsc)("regular")],
                                undefined,
                                undefined,
                                tsc.factory.createStrictEquality(
                                    tsc.factory.createIdentifier("regular"),
                                    tsc.factory.createIdentifier("key"),
                                ),
                            ),
                        ],
                    ),
                    tsc.factory.createReturnStatement(
                        tsc.factory.createStringLiteral(""),
                    ),
                ),
            );

        // ONLY STRING TYPED KEY EXISTS
        const simple: boolean =
            dynamic.length === 1 &&
            dynamic[0]!.key.size() === 1 &&
            dynamic[0]!.key.atomics[0] === "string";
        if (simple === true) {
            statements.push(stringify(tsc)(dynamic[0]!));
            return output();
        }

        // COMPOSITE TEMPLATE LITERAL TYPES
        for (const entry of dynamic) {
            const condition: ts.IfStatement = tsc.factory.createIfStatement(
                tsc.factory.createCallExpression(
                    tsc.factory.createIdentifier(
                        `RegExp(/${metadata_to_pattern(true)(
                            entry.key,
                        )}/).test`,
                    ),
                    undefined,
                    [tsc.factory.createIdentifier("key")],
                ),
                stringify(tsc)(entry),
            );
            statements.push(condition);
        }
        return output();
    };

/**
 * @internal
 */
const stringify =
    (tsc: typeof ts) =>
    (entry: IExpressionEntry<ts.Expression>): ts.ReturnStatement =>
        tsc.factory.createReturnStatement(
            TemplateFactory.generate(tsc)([
                tsc.factory.createCallExpression(
                    tsc.factory.createIdentifier("JSON.stringify"),
                    [],
                    [tsc.factory.createIdentifier("key")],
                ),
                tsc.factory.createStringLiteral(":"),
                entry.expression,
            ]),
        );
