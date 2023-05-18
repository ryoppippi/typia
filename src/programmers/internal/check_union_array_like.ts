import { JSDocTagInfo } from "typescript";
import type ts from "typescript/lib/tsclibrary";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { IMetadataTag } from "../../metadata/IMetadataTag";

import { CheckerProgrammer } from "../CheckerProgrammer";
import { FeatureProgrammer } from "../FeatureProgrammer";
import { UnionExplorer } from "../helpers/UnionExplorer";

/**
 * @internal
 */
export const check_union_array_like =
    (tsc: typeof ts) =>
    <T>(accessor: check_union_array_like.IAccessor<T>) =>
    (props: check_union_array_like.IProps<T>) =>
    (
        input: ts.Expression,
        targets: T[],
        explore: FeatureProgrammer.IExplore,
        tags: IMetadataTag[],
        jsDocTags: JSDocTagInfo[],
    ) => {
        // ONLY ONE TYPE
        if (targets.length === 1)
            return props.decoder(
                accessor.array(input),
                targets[0]!,
                explore,
                tags,
                jsDocTags,
            );

        //----
        // LIST UP VARIABLES
        //----
        // TUPLES
        const tupleListVariable: ts.VariableStatement =
            StatementFactory.constant(tsc)(
                "tupleList",
                tsc.factory.createArrayLiteralExpression(
                    targets.map((meta) =>
                        tsc.factory.createArrayLiteralExpression([
                            tsc.factory.createArrowFunction(
                                undefined,
                                undefined,
                                [
                                    IdentifierFactory.parameter(tsc)(
                                        "top",
                                        TypeFactory.keyword(tsc)("any"),
                                    ),
                                ],
                                undefined,
                                undefined,
                                props.checker(
                                    tsc.factory.createIdentifier("top"),
                                    meta,
                                    {
                                        ...explore,
                                        tracable: false,
                                        postfix: `"[0]"`,
                                    },
                                    tags,
                                    jsDocTags,
                                    input,
                                ),
                            ),
                            tsc.factory.createArrowFunction(
                                undefined,
                                undefined,
                                [
                                    IdentifierFactory.parameter(tsc)(
                                        "top",
                                        TypeFactory.keyword(tsc)("any"),
                                    ),
                                ],
                                undefined,
                                undefined,
                                props.decoder(
                                    tsc.factory.createIdentifier("top"),
                                    meta,
                                    {
                                        ...explore,
                                        tracable: true,
                                    },
                                    tags,
                                    jsDocTags,
                                ),
                            ),
                        ]),
                    ),
                ),
            );

        // FILTERED TUPLES
        const filteredVariable = StatementFactory.constant(tsc)(
            "filtered",
            tsc.factory.createCallExpression(
                tsc.factory.createIdentifier("tupleList.filter"),
                undefined,
                [
                    tsc.factory.createArrowFunction(
                        undefined,
                        undefined,
                        [IdentifierFactory.parameter(tsc)("tuple")],
                        undefined,
                        undefined,
                        tsc.factory.createStrictEquality(
                            props.success,
                            tsc.factory.createCallExpression(
                                tsc.factory.createIdentifier("tuple[0]"),
                                undefined,
                                [tsc.factory.createIdentifier("front")],
                            ),
                        ),
                    ),
                ],
            ),
        );

        //----
        // STATEMENTS
        //----
        // ONLY ONE TYPE
        const uniqueStatement = tsc.factory.createIfStatement(
            tsc.factory.createStrictEquality(
                tsc.factory.createNumericLiteral(1),
                tsc.factory.createIdentifier("filtered.length"),
            ),
            tsc.factory.createReturnStatement(
                tsc.factory.createCallExpression(
                    tsc.factory.createIdentifier(`filtered[0][1]`),
                    undefined,
                    [accessor.array(input)],
                ),
            ),
        );

        // UNION TYPE
        const forOfStatement = tsc.factory.createForOfStatement(
            undefined,
            tsc.factory.createVariableDeclarationList(
                [tsc.factory.createVariableDeclaration("tuple")],
                tsc.NodeFlags.Const,
            ),
            // StatementFactory.variable(ts.NodeFlags.Const, "tuple"),
            tsc.factory.createIdentifier("filtered"),
            tsc.factory.createIfStatement(
                tsc.factory.createCallExpression(
                    IdentifierFactory.access(tsc)(
                        tsc.factory.createIdentifier("array"),
                    )("every"),
                    undefined,
                    [
                        tsc.factory.createArrowFunction(
                            undefined,
                            undefined,
                            [
                                IdentifierFactory.parameter(tsc)(
                                    "value",
                                    TypeFactory.keyword(tsc)("any"),
                                ),
                            ],
                            undefined,
                            undefined,
                            tsc.factory.createStrictEquality(
                                props.success,
                                tsc.factory.createCallExpression(
                                    tsc.factory.createIdentifier("tuple[0]"),
                                    undefined,
                                    [tsc.factory.createIdentifier("value")],
                                ),
                            ),
                        ),
                    ],
                ),
                tsc.factory.createReturnStatement(
                    tsc.factory.createCallExpression(
                        tsc.factory.createIdentifier(`tuple[1]`),
                        undefined,
                        [tsc.factory.createIdentifier("array")],
                    ),
                ),
            ),
        );
        const unionStatement = tsc.factory.createIfStatement(
            tsc.factory.createLessThan(
                tsc.factory.createNumericLiteral(1),
                tsc.factory.createIdentifier("filtered.length"),
            ),
            forOfStatement,
        );

        const block = [
            // ARRAY.LENGTH := 0
            ...(accessor.size !== null
                ? [
                      tsc.factory.createIfStatement(
                          tsc.factory.createStrictEquality(
                              tsc.factory.createNumericLiteral(0),
                              accessor.size(input),
                          ),
                          tsc.isReturnStatement(props.empty)
                              ? props.empty
                              : tsc.factory.createReturnStatement(props.empty),
                      ),
                  ]
                : []),

            // UNION PREDICATORS
            tupleListVariable,
            StatementFactory.constant(tsc)("front", accessor.front(input)),
            filteredVariable,
            uniqueStatement,

            // CONDITIONAL STATEMENTS
            StatementFactory.constant(tsc)("array", accessor.array(input)),
            unionStatement,
            props.failure(
                input,
                `(${targets.map((t) => accessor.name(t)).join(" | ")})`,
                explore,
            ),
        ];

        return tsc.factory.createCallExpression(
            tsc.factory.createArrowFunction(
                undefined,
                undefined,
                [],
                undefined,
                undefined,
                tsc.factory.createBlock(block, true),
            ),
            undefined,
            undefined,
        );
    };

/**
 * @internal
 */
export namespace check_union_array_like {
    export interface IProps<T> {
        checker(
            front: ts.Expression,
            target: T,
            explore: FeatureProgrammer.IExplore,
            tags: IMetadataTag[],
            jsDocTags: JSDocTagInfo[],
            array: ts.Expression,
        ): ts.Expression;
        decoder: UnionExplorer.Decoder<T>;
        empty: ts.ReturnStatement | ts.Expression;
        success: ts.Expression;
        failure(
            input: ts.Expression,
            expected: string,
            explore: CheckerProgrammer.IExplore,
        ): ts.Statement;
    }

    export interface IAccessor<T> {
        name(target: T): string;
        front(input: ts.Expression): ts.Expression;
        array(input: ts.Expression): ts.Expression;
        size: null | ((input: ts.Expression) => ts.Expression);
    }
}
