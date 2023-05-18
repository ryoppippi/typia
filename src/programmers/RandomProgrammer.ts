import type ts from "typescript/lib/tsclibrary";

import { ExpressionFactory } from "../factories/ExpressionFactory";
import { IdentifierFactory } from "../factories/IdentifierFactory";
import { MetadataCollection } from "../factories/MetadataCollection";
import { MetadataFactory } from "../factories/MetadataFactory";
import { StatementFactory } from "../factories/StatementFactory";
import { TemplateFactory } from "../factories/TemplateFactory";
import { TypeFactory } from "../factories/TypeFactory";

import { ICommentTag } from "../metadata/ICommentTag";
import { IMetadataTag } from "../metadata/IMetadataTag";
import { Metadata } from "../metadata/Metadata";

import { IProject } from "../transformers/IProject";

import { FunctionImporter } from "./helpers/FunctionImporeter";
import { RandomJoiner } from "./helpers/RandomJoiner";
import { RandomRanger } from "./helpers/RandomRanger";
import { random_custom } from "./internal/random_custom";

export namespace RandomProgrammer {
    export const write =
        (p: IProject) =>
        (modulo: ts.LeftHandSideExpression) =>
        (init?: ts.Expression) => {
            const tsc: typeof ts = p.tsc;
            const importer: FunctionImporter = new FunctionImporter(tsc);

            return (type: ts.Type, name?: string) => {
                // INITIALIZE METADATA
                const collection: MetadataCollection = new MetadataCollection();
                const meta: Metadata = MetadataFactory.analyze(p)({
                    resolve: true,
                    constant: true,
                })(collection)(type);

                // GENERATE FUNCTION
                const functors: ts.VariableStatement[] =
                    generate_functors(tsc)(importer)(collection);
                const output: ts.Expression = decode(tsc)(importer)({
                    object: false,
                    recursive: false,
                })(meta, [], []);

                return tsc.factory.createArrowFunction(
                    undefined,
                    undefined,
                    [
                        IdentifierFactory.parameter(tsc)(
                            "generator",
                            tsc.factory.createTypeReferenceNode(
                                "Partial<typia.IRandomGenerator>",
                            ),
                            init ??
                                tsc.factory.createToken(
                                    tsc.SyntaxKind.QuestionToken,
                                ),
                        ),
                    ],
                    tsc.factory.createTypeReferenceNode(
                        `typia.Primitive<${
                            name ?? TypeFactory.getFullName(p)(type)
                        }>`,
                    ),
                    undefined,
                    tsc.factory.createBlock(
                        [
                            ...importer.declare(modulo),
                            ...functors,
                            tsc.factory.createReturnStatement(output),
                        ],
                        true,
                    ),
                );
            };
        };

    const generate_functors =
        (tsc: typeof ts) =>
        (importer: FunctionImporter) =>
        (collection: MetadataCollection) =>
            collection.objects().map((obj, i) =>
                StatementFactory.constant(tsc)(
                    FUNCTOR(i),
                    tsc.factory.createArrowFunction(
                        undefined,
                        undefined,
                        [
                            IdentifierFactory.parameter(tsc)(
                                "_recursive",
                                TypeFactory.keyword(tsc)("boolean"),
                                tsc.factory.createIdentifier(
                                    String(obj.recursive),
                                ),
                            ),
                            IdentifierFactory.parameter(tsc)(
                                "_depth",
                                TypeFactory.keyword(tsc)("number"),
                                tsc.factory.createNumericLiteral(0),
                            ),
                        ],
                        TypeFactory.keyword(tsc)("any"),
                        undefined,
                        RandomJoiner.object(tsc)(COALESCE(tsc)(importer))(
                            decode(tsc)(importer)({
                                recursive: obj.recursive,
                                object: true,
                            }),
                        )(obj),
                    ),
                ),
            );

    /* -----------------------------------------------------------
        DECODERS
    ----------------------------------------------------------- */
    const decode =
        (tsc: typeof ts) =>
        (importer: FunctionImporter) =>
        (explore: IExplore) =>
        (
            meta: Metadata,
            tags: IMetadataTag[],
            comments: ICommentTag[],
        ): ts.Expression => {
            const expressions: ts.Expression[] = [];
            if (meta.any)
                expressions.push(
                    tsc.factory.createStringLiteral(
                        "fucking any type exists...",
                    ),
                );

            // NULL COALESCING
            if (meta.required === false)
                expressions.push(tsc.factory.createIdentifier("undefined"));
            if (meta.nullable === true)
                expressions.push(tsc.factory.createNull());

            // CONSTANT TYPES
            for (const constant of meta.constants)
                for (const value of constant.values)
                    expressions.push(decode_atomic(tsc)(value));

            // ATOMIC VARIABLES
            for (const template of meta.templates)
                expressions.push(
                    decode_template(tsc)(importer)(explore)(template),
                );
            for (const atomic of meta.atomics)
                if (atomic === "boolean")
                    expressions.push(decode_boolean(tsc)(importer));
                else if (atomic === "number")
                    expressions.push(
                        decode_number(tsc)(importer)(tags)(comments),
                    );
                else if (atomic === "string")
                    expressions.push(
                        decode_string(tsc)(importer)(tags)(comments),
                    );
                else if (atomic === "bigint")
                    expressions.push(
                        decode_bigint(tsc)(importer)(tags)(comments),
                    );

            // INSTANCE TYPES
            if (meta.resolved)
                expressions.push(
                    decode(tsc)(importer)(explore)(
                        meta.resolved,
                        tags,
                        comments,
                    ),
                );
            for (const t of meta.tuples)
                expressions.push(
                    RandomJoiner.tuple(tsc)(decode(tsc)(importer)(explore))(
                        t,
                        tags,
                        comments,
                    ),
                );
            for (const a of meta.arrays) {
                const array = RandomJoiner.array(tsc)(COALESCE(tsc)(importer))(
                    decode(tsc)(importer)(explore),
                )(a, tags, comments);
                expressions.push(
                    explore.recursive && a.objects.length
                        ? tsc.factory.createConditionalExpression(
                              tsc.factory.createLogicalAnd(
                                  tsc.factory.createIdentifier("_recursive"),
                                  tsc.factory.createLessThan(
                                      tsc.factory.createNumericLiteral(5),
                                      tsc.factory.createIdentifier("_depth"),
                                  ),
                              ),
                              undefined,
                              tsc.factory.createIdentifier("[]"),
                              undefined,
                              array,
                          )
                        : array,
                );
            }
            for (const o of meta.objects)
                expressions.push(
                    tsc.factory.createCallExpression(
                        tsc.factory.createIdentifier(FUNCTOR(o.index)),
                        undefined,
                        explore.object
                            ? [
                                  explore.recursive
                                      ? tsc.factory.createTrue()
                                      : tsc.factory.createIdentifier(
                                            "_recursive",
                                        ),
                                  tsc.factory.createConditionalExpression(
                                      tsc.factory.createIdentifier(
                                          "_recursive",
                                      ),
                                      undefined,
                                      tsc.factory.createAdd(
                                          tsc.factory.createNumericLiteral(1),
                                          tsc.factory.createIdentifier(
                                              "_depth",
                                          ),
                                      ),
                                      undefined,
                                      tsc.factory.createIdentifier("_depth"),
                                  ),
                              ]
                            : undefined,
                    ),
                );
            for (const native of meta.natives)
                if (native === "Boolean")
                    expressions.push(decode_boolean(tsc)(importer));
                else if (native === "Number")
                    expressions.push(
                        decode_number(tsc)(importer)(tags)(comments),
                    );
                else if (native === "String")
                    expressions.push(
                        decode_string(tsc)(importer)(tags)(comments),
                    );
                else expressions.push(tsc.factory.createIdentifier("{}"));
            if (meta.sets.length || meta.maps.length)
                expressions.push(tsc.factory.createIdentifier("{}"));

            // PRIMITIVE TYPES
            if (expressions.length === 1) return expressions[0]!;
            return tsc.factory.createCallExpression(
                tsc.factory.createCallExpression(
                    importer.use("pick"),
                    undefined,
                    [
                        tsc.factory.createArrayLiteralExpression(
                            expressions.map((expr) =>
                                tsc.factory.createArrowFunction(
                                    undefined,
                                    undefined,
                                    [],
                                    undefined,
                                    undefined,
                                    expr,
                                ),
                            ),
                            true,
                        ),
                    ],
                ),
                undefined,
                undefined,
            );
        };

    const decode_boolean = (tsc: typeof ts) => (importer: FunctionImporter) =>
        tsc.factory.createCallExpression(
            COALESCE(tsc)(importer)("boolean"),
            undefined,
            undefined,
        );

    const decode_atomic = (tsc: typeof ts) => (value: Atomic) =>
        typeof value === "boolean"
            ? tsc.factory.createIdentifier(value.toString())
            : typeof value === "number"
            ? tsc.factory.createNumericLiteral(value)
            : typeof value === "string"
            ? tsc.factory.createStringLiteral(value)
            : tsc.factory.createBigIntLiteral(value.toString());

    const decode_template =
        (tsc: typeof ts) =>
        (importer: FunctionImporter) =>
        (explore: IExplore) =>
        (template: Metadata[]) =>
            TemplateFactory.generate(tsc)(
                template.map((meta) =>
                    decode(tsc)(importer)(explore)(meta, [], []),
                ),
            );

    const decode_number =
        (tsc: typeof ts) =>
        (importer: FunctionImporter) =>
        (tags: IMetadataTag[]) =>
        (comments: ICommentTag[]): ts.Expression => {
            const type = tags.find(
                (t) => t.kind === "type" && t.value === "uint",
            )
                ? "int"
                : tags.find((t) => t.kind === "type" && t.value === "int")
                ? "uint"
                : "double";
            return random_custom(tsc)(COALESCE(tsc)(importer))("number")(
                comments,
            )(
                RandomRanger.number(tsc)({
                    type,
                    transform: (value) =>
                        tsc.factory.createNumericLiteral(value),
                    setter: (args) =>
                        tsc.factory.createCallExpression(
                            type === "double" &&
                                tags.every(
                                    (t) =>
                                        t.kind !== "multipleOf" &&
                                        t.kind !== "step",
                                )
                                ? COALESCE(tsc)(importer)("number")
                                : COALESCE(tsc)(importer)("integer"),
                            undefined,
                            args.map((val) =>
                                tsc.factory.createNumericLiteral(val),
                            ),
                        ),
                })({
                    minimum: 0,
                    maximum: 100,
                    gap: 10,
                })(tags),
            );
        };

    const decode_bigint =
        (tsc: typeof ts) =>
        (importer: FunctionImporter) =>
        (tags: IMetadataTag[]) =>
        (comments: ICommentTag[]): ts.Expression =>
            random_custom(tsc)(COALESCE(tsc)(importer))("bigint")(comments)(
                RandomRanger.number(tsc)({
                    type: tags.find(
                        (t) => t.kind === "type" && t.value === "uint",
                    )
                        ? "uint"
                        : "int",
                    transform: (value) =>
                        tsc.factory.createCallExpression(
                            tsc.factory.createIdentifier("BigInt"),
                            undefined,
                            [tsc.factory.createStringLiteral(value.toString())],
                        ),
                    setter: (args) =>
                        tsc.factory.createCallExpression(
                            COALESCE(tsc)(importer)("bigint"),
                            undefined,
                            args.map((value) =>
                                tsc.factory.createCallExpression(
                                    tsc.factory.createIdentifier("BigInt"),
                                    undefined,
                                    [
                                        tsc.factory.createStringLiteral(
                                            value.toString(),
                                        ),
                                    ],
                                ),
                            ),
                        ),
                })({
                    minimum: 0,
                    maximum: 100,
                    gap: 10,
                })(tags),
            );

    const decode_string =
        (tsc: typeof ts) =>
        (importer: FunctionImporter) =>
        (tags: IMetadataTag[]) =>
        (comments: ICommentTag[]): ts.Expression =>
            random_custom(tsc)(COALESCE(tsc)(importer))("string")(comments)(
                (() => {
                    for (const t of tags)
                        if (t.kind === "format")
                            return tsc.factory.createCallExpression(
                                COALESCE(tsc)(importer)(t.value),
                                undefined,
                                undefined,
                            );
                        else if (t.kind === "pattern")
                            return tsc.factory.createCallExpression(
                                COALESCE(tsc)(importer)("pattern"),
                                undefined,
                                [tsc.factory.createIdentifier(`/${t.value}/`)],
                            );

                    const tail = RandomRanger.length(tsc)(
                        COALESCE(tsc)(importer),
                    )({
                        minimum: 5,
                        maximum: 25,
                        gap: 5,
                    })({
                        fixed: "length",
                        minimum: "minLength",
                        maximum: "maxLength",
                    })(tags);
                    return tsc.factory.createCallExpression(
                        COALESCE(tsc)(importer)("string"),
                        undefined,
                        tail ? [tail] : undefined,
                    );
                })(),
            );
}

type Atomic = boolean | number | string | bigint;
interface IExplore {
    object: boolean;
    recursive: boolean;
}

const FUNCTOR = (i: number) => `$ro${i}`;
const COALESCE =
    (tsc: typeof ts) => (importer: FunctionImporter) => (name: string) =>
        ExpressionFactory.coalesce(tsc)(
            tsc.factory.createPropertyAccessChain(
                tsc.factory.createIdentifier("generator"),
                tsc.factory.createToken(tsc.SyntaxKind.QuestionDotToken),
                tsc.factory.createIdentifier(name),
            ),
        )(IdentifierFactory.access(tsc)(importer.use("generator"))(name));
