import type ts from "typescript/lib/tsclibrary";

import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { ICommentTag } from "../../metadata/ICommentTag";
import { IMetadataTag } from "../../metadata/IMetadataTag";
import { Metadata } from "../../metadata/Metadata";
import { MetadataObject } from "../../metadata/MetadataObject";
import { MetadataProperty } from "../../metadata/MetadataProperty";

import { Escaper } from "../../utils/Escaper";

import { get_comment_tags } from "../internal/get_comment_tags";
import { RandomRanger } from "./RandomRanger";

export namespace RandomJoiner {
    export type Decoder = (
        meta: Metadata,
        tags: IMetadataTag[],
        comments: ICommentTag[],
    ) => ts.Expression;

    export const array =
        (tsc: typeof ts) =>
        (coalesce: (method: string) => ts.Expression) =>
        (decoder: Decoder) =>
        (item: Metadata, tags: IMetadataTag[], comments: ICommentTag[]) => {
            const tail = RandomRanger.length(tsc)(coalesce)({
                minimum: 0,
                maximum: 3,
                gap: 3,
            })({
                fixed: "items",
                minimum: "minItems",
                maximum: "maxItems",
            })(tags);
            return tsc.factory.createCallExpression(
                coalesce("array"),
                undefined,
                [
                    tsc.factory.createArrowFunction(
                        undefined,
                        undefined,
                        [],
                        undefined,
                        undefined,
                        decoder(item, tags, comments),
                    ),
                    ...(tail ? [tail] : []),
                ],
            );
        };

    export const tuple =
        (tsc: typeof ts) =>
        (decoder: Decoder) =>
        (items: Metadata[], tags: IMetadataTag[], comments: ICommentTag[]) =>
            tsc.factory.createArrayLiteralExpression(
                items.map((i) => decoder(i.rest ?? i, tags, comments)),
                true,
            );

    export const object =
        (tsc: typeof ts) =>
        (coalesce: (method: string) => ts.Expression) =>
        (decoder: Decoder) =>
        (obj: MetadataObject): ts.ConciseBody => {
            if (obj.properties.length === 0)
                return tsc.factory.createIdentifier("{}");

            // LIST UP PROPERTIES
            const regular = obj.properties.filter((p) => p.key.isSoleLiteral());
            const dynamic = obj.properties.filter(
                (p) => !p.key.isSoleLiteral(),
            );

            // REGULAR OBJECT
            const literal: ts.ObjectLiteralExpression =
                tsc.factory.createObjectLiteralExpression(
                    regular.map((p) => {
                        const str: string = p.key.getSoleLiteral()!;
                        return tsc.factory.createPropertyAssignment(
                            Escaper.variable(str)
                                ? str
                                : tsc.factory.createStringLiteral(str),
                            decoder(
                                p.value,
                                p.tags,
                                get_comment_tags(false)(p.jsDocTags),
                            ),
                        );
                    }),
                    true,
                );
            if (dynamic.length === 0) return literal;

            const properties: ts.Statement[] = dynamic.map((p) =>
                tsc.factory.createExpressionStatement(
                    dynamicProperty(tsc)(coalesce)(decoder)(p),
                ),
            );
            return tsc.factory.createBlock(
                [
                    StatementFactory.constant(tsc)(
                        "output",
                        tsc.factory.createAsExpression(
                            literal,
                            TypeFactory.keyword(tsc)("any"),
                        ),
                    ),
                    ...(obj.recursive
                        ? [
                              tsc.factory.createIfStatement(
                                  tsc.factory.createGreaterThanEquals(
                                      tsc.factory.createNumericLiteral(5),
                                      tsc.factory.createIdentifier("_depth"),
                                  ),
                                  tsc.factory.createBlock(properties, true),
                              ),
                          ]
                        : properties),
                    tsc.factory.createReturnStatement(
                        tsc.factory.createIdentifier("output"),
                    ),
                ],
                true,
            );
        };

    const dynamicProperty =
        (tsc: typeof ts) =>
        (coalesce: (method: string) => ts.Expression) =>
        (decoder: Decoder) =>
        (p: MetadataProperty) =>
            tsc.factory.createCallExpression(coalesce("array"), undefined, [
                tsc.factory.createArrowFunction(
                    undefined,
                    undefined,
                    [],
                    undefined,
                    undefined,
                    tsc.factory.createBinaryExpression(
                        tsc.factory.createElementAccessExpression(
                            tsc.factory.createIdentifier("output"),
                            decoder(p.key, [], []),
                        ),
                        tsc.factory.createToken(tsc.SyntaxKind.EqualsToken),
                        decoder(
                            p.value,
                            p.tags,
                            get_comment_tags(false)(p.jsDocTags),
                        ),
                    ),
                ),
                tsc.factory.createCallExpression(
                    coalesce("integer"),
                    undefined,
                    [
                        tsc.factory.createNumericLiteral(0),
                        tsc.factory.createNumericLiteral(3),
                    ],
                ),
            ]);
}
