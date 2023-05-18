import type ts from "typescript/lib/tsclibrary";

import { IdentifierFactory } from "../../factories/IdentifierFactory";

import { MetadataObject } from "../../metadata/MetadataObject";

import { ArrayUtil } from "../../utils/ArrayUtil";

import { metadata_to_pattern } from "../internal/metadata_to_pattern";
import { prune_object_properties } from "../internal/prune_object_properties";
import { IExpressionEntry } from "./IExpressionEntry";

export namespace PruneJoiner {
    export const object =
        (tsc: typeof ts) =>
        (
            input: ts.Expression,
            entries: IExpressionEntry[],
            obj: MetadataObject,
        ): ts.ConciseBody => {
            // PREPARE ASSETS
            const regular = entries.filter((entry) =>
                entry.key.isSoleLiteral(),
            );
            const dynamic = entries.filter(
                (entry) => !entry.key.isSoleLiteral(),
            );

            const statements: ts.Statement[] = ArrayUtil.flat(
                regular.map((entry) =>
                    tsc.isBlock(entry.expression)
                        ? [...entry.expression.statements]
                        : [
                              tsc.factory.createExpressionStatement(
                                  entry.expression,
                              ),
                          ],
                ),
            );
            if (dynamic.length)
                statements.push(
                    tsc.factory.createExpressionStatement(
                        iterate_dynamic_properties(tsc)({ regular, dynamic })(
                            input,
                        ),
                    ),
                );

            statements.push(prune_object_properties(tsc)(obj));
            return tsc.factory.createBlock(statements, true);
        };

    export const array =
        (tsc: typeof ts) => (input: ts.Expression, arrow: ts.ArrowFunction) =>
            tsc.factory.createCallExpression(
                IdentifierFactory.access(tsc)(input)("forEach"),
                undefined,
                [arrow],
            );

    export const tuple =
        (tsc: typeof ts) =>
        (children: ts.ConciseBody[], rest: ts.ConciseBody | null): ts.Block => {
            const entire: ts.ConciseBody[] = [...children];
            if (rest !== null) entire.push(rest);

            const statements: ts.Statement[] = ArrayUtil.flat(
                entire.map((elem) =>
                    tsc.isBlock(elem)
                        ? [...elem.statements]
                        : [tsc.factory.createExpressionStatement(elem)],
                ),
            );
            return tsc.factory.createBlock(statements, true);
        };
}

const iterate_dynamic_properties =
    (tsc: typeof ts) =>
    (props: { regular: IExpressionEntry[]; dynamic: IExpressionEntry[] }) =>
    (input: ts.Expression) =>
        tsc.factory.createCallExpression(
            IdentifierFactory.access(tsc)(
                tsc.factory.createCallExpression(
                    tsc.factory.createIdentifier("Object.entries"),
                    undefined,
                    [input],
                ),
            )("forEach"),
            undefined,
            [
                tsc.factory.createArrowFunction(
                    undefined,
                    undefined,
                    [
                        IdentifierFactory.parameter(tsc)(
                            tsc.factory.createArrayBindingPattern(
                                ["key", "value"].map((l) =>
                                    tsc.factory.createBindingElement(
                                        undefined,
                                        undefined,
                                        tsc.factory.createIdentifier(l),
                                        undefined,
                                    ),
                                ),
                            ),
                        ),
                    ],
                    undefined,
                    undefined,
                    tsc.factory.createBlock(
                        [
                            tsc.factory.createIfStatement(
                                tsc.factory.createStrictEquality(
                                    tsc.factory.createIdentifier("undefined"),
                                    tsc.factory.createIdentifier("value"),
                                ),
                                tsc.factory.createReturnStatement(),
                            ),
                            ...props.regular.map(({ key }) =>
                                tsc.factory.createIfStatement(
                                    tsc.factory.createStrictEquality(
                                        tsc.factory.createStringLiteral(
                                            key.getSoleLiteral()!,
                                        ),
                                        tsc.factory.createIdentifier("key"),
                                    ),
                                    tsc.factory.createReturnStatement(),
                                ),
                            ),
                            ...props.dynamic.map((dynamic) =>
                                tsc.factory.createIfStatement(
                                    tsc.factory.createCallExpression(
                                        tsc.factory.createIdentifier(
                                            `RegExp(/${metadata_to_pattern(
                                                true,
                                            )(dynamic.key)}/).test`,
                                        ),
                                        undefined,
                                        [tsc.factory.createIdentifier("key")],
                                    ),
                                    tsc.isBlock(dynamic.expression)
                                        ? dynamic.expression
                                        : tsc.factory.createBlock([
                                              tsc.factory.createExpressionStatement(
                                                  dynamic.expression,
                                              ),
                                          ]),
                                ),
                            ),
                        ],
                        true,
                    ),
                ),
            ],
        );
