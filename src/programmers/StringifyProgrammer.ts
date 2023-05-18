import type ts from "typescript/lib/tsclibrary";

import { ExpressionFactory } from "../factories/ExpressionFactory";
import { IdentifierFactory } from "../factories/IdentifierFactory";
import { MetadataCollection } from "../factories/MetadataCollection";
import { MetadataFactory } from "../factories/MetadataFactory";
import { TypeFactory } from "../factories/TypeFactory";
import { ValueFactory } from "../factories/ValueFactory";

import { IMetadataTag } from "../metadata/IMetadataTag";
import { Metadata } from "../metadata/Metadata";
import { MetadataObject } from "../metadata/MetadataObject";

import { IProject } from "../transformers/IProject";

import { Atomic } from "../typings/Atomic";

import { ArrayUtil } from "../utils/ArrayUtil";

import { FeatureProgrammer } from "./FeatureProgrammer";
import { IsProgrammer } from "./IsProgrammer";
import { AtomicPredicator } from "./helpers/AtomicPredicator";
import { FunctionImporter } from "./helpers/FunctionImporeter";
import { IExpressionEntry } from "./helpers/IExpressionEntry";
import { OptionPredicator } from "./helpers/OptionPredicator";
import { StringifyJoiner } from "./helpers/StringifyJoinder";
import { StringifyPredicator } from "./helpers/StringifyPredicator";
import { UnionExplorer } from "./helpers/UnionExplorer";
import { check_native } from "./internal/check_native";
import { decode_union_object } from "./internal/decode_union_object";
import { feature_object_entries } from "./internal/feature_object_entries";

export namespace StringifyProgrammer {
    /* -----------------------------------------------------------
        WRITER
    ----------------------------------------------------------- */
    export const write =
        (p: IProject) => (modulo: ts.LeftHandSideExpression) => {
            const importer: FunctionImporter = new FunctionImporter(p.tsc);
            return FeatureProgrammer.analyze(p)({
                ...configure(p)(importer),
                addition: (collection) => {
                    const isFunctors =
                        IsProgrammer.write_functors(p)(importer)(collection);
                    const isUnioners =
                        IsProgrammer.write_unioners(p)(importer)(collection);

                    return [
                        ...importer.declare(modulo),
                        ...isFunctors.filter((_, i) =>
                            importer.hasLocal(`$io${i}`),
                        ),
                        ...isUnioners.filter((_, i) =>
                            importer.hasLocal(`$iu${i}`),
                        ),
                    ];
                },
            })(importer);
        };

    /* -----------------------------------------------------------
        DECODERS
    ----------------------------------------------------------- */
    const decode =
        (p: IProject) =>
        (importer: FunctionImporter) =>
        (
            input: ts.Expression,
            meta: Metadata,
            explore: FeatureProgrammer.IExplore,
            tags: IMetadataTag[],
        ): ts.Expression => {
            // ANY TYPE
            if (meta.any === true)
                return wrap_required(p.tsc)(input, meta, explore)(
                    wrap_functional(p.tsc)(input, meta, explore)(
                        p.tsc.factory.createCallExpression(
                            p.tsc.factory.createIdentifier("JSON.stringify"),
                            undefined,
                            [input],
                        ),
                    ),
                );

            // ONLY NULL OR UNDEFINED
            const size: number = meta.size();
            if (
                size === 0 &&
                (meta.required === false || meta.nullable === true)
            ) {
                if (meta.required === false && meta.nullable === true)
                    return explore.from === "array"
                        ? p.tsc.factory.createStringLiteral("null")
                        : p.tsc.factory.createConditionalExpression(
                              p.tsc.factory.createStrictEquality(
                                  p.tsc.factory.createNull(),
                                  input,
                              ),
                              undefined,
                              p.tsc.factory.createStringLiteral("null"),
                              undefined,
                              p.tsc.factory.createIdentifier("undefined"),
                          );
                else if (meta.required === false)
                    return explore.from === "array"
                        ? p.tsc.factory.createStringLiteral("null")
                        : p.tsc.factory.createIdentifier("undefined");
                else return p.tsc.factory.createStringLiteral("null");
            }

            //----
            // LIST UP UNION TYPES
            //----
            const unions: IUnion[] = [];

            // toJSON() METHOD
            if (meta.resolved !== null)
                if (size === 1)
                    return decode_to_json(p)(importer)(
                        input,
                        meta.resolved,
                        explore,
                        tags,
                    );
                else
                    unions.push({
                        type: "resolved",
                        is: () =>
                            IsProgrammer.decode_to_json(p.tsc)(false)(input),
                        value: () =>
                            decode_to_json(p)(importer)(
                                input,
                                meta.resolved!,
                                explore,
                                tags,
                            ),
                    });
            else if (meta.functional === true)
                unions.push({
                    type: "functional",
                    is: () => IsProgrammer.decode_functional(p.tsc)(input),
                    value: () => decode_functional(p.tsc)(explore),
                });

            // TEMPLATES
            if (
                meta.templates.length ||
                ArrayUtil.has(meta.constants, (c) => c.type === "string")
            )
                if (AtomicPredicator.template(meta)) {
                    const partial = Metadata.initialize();
                    partial.atomics.push("string"),
                        unions.push({
                            type: "template literal",
                            is: () =>
                                IsProgrammer.decode(p)(importer)(
                                    input,
                                    partial,
                                    explore,
                                    [],
                                    [],
                                ),
                            value: () =>
                                decode_atomic(p)(importer)(
                                    input,
                                    "string",
                                    explore,
                                ),
                        });
                }

            // CONSTANTS
            for (const constant of meta.constants)
                if (AtomicPredicator.constant(meta)(constant.type) === false)
                    continue;
                else if (constant.type !== "string")
                    unions.push({
                        type: "atomic",
                        is: () =>
                            IsProgrammer.decode(p)(importer)(
                                input,
                                (() => {
                                    const partial = Metadata.initialize();
                                    partial.atomics.push(constant.type);
                                    return partial;
                                })(),
                                explore,
                                [],
                                [],
                            ),
                        value: () =>
                            decode_atomic(p)(importer)(
                                input,
                                constant.type,
                                explore,
                            ),
                    });
                else if (meta.templates.length === 0)
                    unions.push({
                        type: "const string",
                        is: () =>
                            IsProgrammer.decode(p)(importer)(
                                input,
                                (() => {
                                    const partial = Metadata.initialize();
                                    partial.atomics.push("string");
                                    return partial;
                                })(),
                                explore,
                                [],
                                [],
                            ),
                        value: () =>
                            decode_constant_string(p)(importer)(
                                input,
                                [...constant.values] as string[],
                                explore,
                            ),
                    });

            /// ATOMICS
            for (const type of meta.atomics)
                if (AtomicPredicator.atomic(meta)(type))
                    unions.push({
                        type: "atomic",
                        is: () =>
                            IsProgrammer.decode(p)(importer)(
                                input,
                                (() => {
                                    const partial = Metadata.initialize();
                                    partial.atomics.push(type);
                                    return partial;
                                })(),
                                explore,
                                [],
                                [],
                            ),
                        value: () =>
                            decode_atomic(p)(importer)(input, type, explore),
                    });

            // TUPLES
            for (const tuple of meta.tuples) {
                for (const child of tuple)
                    if (StringifyPredicator.undefindable(meta))
                        throw new Error(
                            `Error on typia.stringify(): tuple cannot contain undefined value - (${child.getName()}).`,
                        );
                unions.push({
                    type: "tuple",
                    is: () =>
                        IsProgrammer.decode(p)(importer)(
                            input,
                            (() => {
                                const partial = Metadata.initialize();
                                partial.tuples.push(tuple);
                                return partial;
                            })(),
                            explore,
                            [],
                            [],
                        ),
                    value: () =>
                        decode_tuple(p)(importer)(input, tuple, explore, tags),
                });
            }

            // ARRAYS
            if (meta.arrays.length) {
                for (const child of meta.arrays)
                    if (StringifyPredicator.undefindable(child))
                        throw new Error(
                            `Error on typia.stringify(): array cannot contain undefined value (${child.getName()}).`,
                        );
                const value: () => ts.Expression = meta.arrays.some(
                    (elem) => elem.any,
                )
                    ? () =>
                          p.tsc.factory.createCallExpression(
                              p.tsc.factory.createIdentifier("JSON.stringify"),
                              undefined,
                              [input],
                          )
                    : () =>
                          explore_arrays(p)(importer)(
                              input,
                              meta.arrays,
                              {
                                  ...explore,
                                  from: "array",
                              },
                              [],
                              [],
                          );

                unions.push({
                    type: "array",
                    is: () => ExpressionFactory.isArray(p.tsc)(input),
                    value,
                });
            }

            // BUILT-IN CLASSES
            if (meta.natives.length)
                for (const native of meta.natives)
                    unions.push({
                        type: "object",
                        is: () => check_native(p.tsc)(native)(input),
                        value: () =>
                            AtomicPredicator.native(native)
                                ? decode_atomic(p)(importer)(
                                      input,
                                      native.toLowerCase() as Atomic.Literal,
                                      explore,
                                  )
                                : p.tsc.factory.createStringLiteral("{}"),
                    });

            // SETS
            if (meta.sets.length)
                unions.push({
                    type: "object",
                    is: () =>
                        ExpressionFactory.isInstanceOf(p.tsc)("Set")(input),
                    value: () => p.tsc.factory.createStringLiteral("{}"),
                });

            // MAPS
            if (meta.maps.length)
                unions.push({
                    type: "object",
                    is: () =>
                        ExpressionFactory.isInstanceOf(p.tsc)("Map")(input),
                    value: () => p.tsc.factory.createStringLiteral("{}"),
                });

            // OBJECTS
            if (meta.objects.length)
                unions.push({
                    type: "object",
                    is: () =>
                        ExpressionFactory.isObject(p.tsc)({
                            checkNull: true,
                            checkArray: meta.objects.some((obj) =>
                                obj.properties.every(
                                    (prop) =>
                                        !prop.key.isSoleLiteral() ||
                                        !prop.value.required,
                                ),
                            ),
                        })(input),
                    value: () =>
                        meta.isParentResolved() === false &&
                        meta.objects.length === 1 &&
                        meta.objects[0]!._Is_simple()
                            ? (() => {
                                  const obj: MetadataObject = meta.objects[0]!;
                                  const entries: IExpressionEntry<ts.Expression>[] =
                                      feature_object_entries(
                                          p.tsc,
                                      )<ts.Expression>({
                                          decoder: decode(p)(importer),
                                          trace: false,
                                          path: false,
                                      })(importer)(obj)(input);
                                  return StringifyJoiner.object(p.tsc)(
                                      importer,
                                  )(input, entries);
                              })()
                            : explore_objects(p.tsc)(importer)(input, meta, {
                                  ...explore,
                                  from: "object",
                              }),
                });

            //----
            // RETURNS
            //----
            // CHECK NULL AND UNDEFINED
            const wrapper = (output: ts.Expression) =>
                wrap_required(p.tsc)(input, meta, explore)(
                    wrap_nullable(p.tsc)(input, meta)(output),
                );

            // DIRECT RETURN
            if (unions.length === 0)
                return p.tsc.factory.createCallExpression(
                    p.tsc.factory.createIdentifier("JSON.stringify"),
                    undefined,
                    [input],
                );
            else if (unions.length === 1) return wrapper(unions[0]!.value());

            // RETURN WITH TYPE CHECKING
            return wrapper(
                p.tsc.factory.createCallExpression(
                    p.tsc.factory.createArrowFunction(
                        undefined,
                        undefined,
                        [],
                        undefined,
                        undefined,
                        iterate(p.tsc)(importer)(input, unions, meta.getName()),
                    ),
                    undefined,
                    undefined,
                ),
            );
        };

    const decode_array = (p: IProject) => (importer: FunctionImporter) =>
        FeatureProgrammer.decode_array(p.tsc)(configure(p)(importer))(importer)(
            StringifyJoiner.array(p.tsc),
        );

    const decode_object = (tsc: typeof ts) => (importer: FunctionImporter) =>
        FeatureProgrammer.decode_object(tsc)({
            trace: false,
            path: false,
            functors: FUNCTORS,
        })(importer);

    const decode_tuple =
        (p: IProject) =>
        (importer: FunctionImporter) =>
        (
            input: ts.Expression,
            tuple: Metadata[],
            explore: FeatureProgrammer.IExplore,
            tags: IMetadataTag[],
        ): ts.Expression => {
            const children: ts.Expression[] = tuple
                .filter((elem) => elem.rest === null)
                .map((elem, index) =>
                    decode(p)(importer)(
                        p.tsc.factory.createElementAccessExpression(
                            input,
                            index,
                        ),
                        elem,
                        {
                            ...explore,
                            from: "array",
                        },
                        tags,
                    ),
                );
            const rest = (() => {
                if (tuple.length === 0) return null;
                const last = tuple[tuple.length - 1]!;
                if (last.rest === null) return null;

                const code = decode(p)(importer)(
                    p.tsc.factory.createCallExpression(
                        IdentifierFactory.access(p.tsc)(input)("slice"),
                        undefined,
                        [p.tsc.factory.createNumericLiteral(tuple.length - 1)],
                    ),
                    (() => {
                        const wrapper: Metadata = Metadata.initialize();
                        wrapper.arrays.push(tuple[tuple.length - 1]!.rest!);
                        return wrapper;
                    })(),
                    {
                        ...explore,
                        start: tuple.length - 1,
                    },
                    tags,
                );
                return p.tsc.factory.createCallExpression(
                    importer.use("rest"),
                    undefined,
                    [code],
                );
            })();
            return StringifyJoiner.tuple(p.tsc)(children, rest);
        };

    const decode_atomic =
        (p: IProject) =>
        (importer: FunctionImporter) =>
        (
            input: ts.Expression,
            type: string,
            explore: FeatureProgrammer.IExplore,
        ) => {
            if (type === "string")
                return p.tsc.factory.createCallExpression(
                    importer.use("string"),
                    undefined,
                    [input],
                );
            else if (type === "number" && OptionPredicator.numeric(p.options))
                input = p.tsc.factory.createCallExpression(
                    importer.use("number"),
                    undefined,
                    [input],
                );
            return explore.from !== "top"
                ? input
                : p.tsc.factory.createCallExpression(
                      IdentifierFactory.access(p.tsc)(input)("toString"),
                      undefined,
                      undefined,
                  );
        };

    const decode_constant_string =
        (p: IProject) =>
        (importer: FunctionImporter) =>
        (
            input: ts.Expression,
            values: string[],
            explore: FeatureProgrammer.IExplore,
        ): ts.Expression => {
            if (values.every((v) => !StringifyPredicator.require_escape(v)))
                return [
                    p.tsc.factory.createStringLiteral('"'),
                    input,
                    p.tsc.factory.createStringLiteral('"'),
                ].reduce((x, y) => p.tsc.factory.createAdd(x, y));
            else return decode_atomic(p)(importer)(input, "string", explore);
        };

    const decode_to_json =
        (p: IProject) =>
        (importer: FunctionImporter) =>
        (
            input: ts.Expression,
            resolved: Metadata,
            explore: FeatureProgrammer.IExplore,
            tags: IMetadataTag[],
        ): ts.Expression => {
            return decode(p)(importer)(
                p.tsc.factory.createCallExpression(
                    IdentifierFactory.access(p.tsc)(input)("toJSON"),
                    undefined,
                    [],
                ),
                resolved,
                explore,
                tags,
            );
        };

    const decode_functional =
        (tsc: typeof ts) => (explore: FeatureProgrammer.IExplore) =>
            explore.from === "array"
                ? tsc.factory.createStringLiteral("null")
                : tsc.factory.createIdentifier("undefined");

    /* -----------------------------------------------------------
        EXPLORERS
    ----------------------------------------------------------- */
    const explore_arrays = (p: IProject) => (importer: FunctionImporter) =>
        UnionExplorer.array(p.tsc)({
            checker: IsProgrammer.decode(p)(importer),
            decoder: decode_array(p)(importer),
            empty: p.tsc.factory.createStringLiteral("[]"),
            success: p.tsc.factory.createTrue(),
            failure: (input, expected) =>
                create_throw_error(p.tsc)(importer, input, expected),
        });

    const explore_objects =
        (tsc: typeof ts) =>
        (importer: FunctionImporter) =>
        (
            input: ts.Expression,
            meta: Metadata,
            explore: FeatureProgrammer.IExplore,
        ) => {
            if (meta.objects.length === 1)
                return decode_object(tsc)(importer)(
                    input,
                    meta.objects[0]!,
                    explore,
                );

            return tsc.factory.createCallExpression(
                tsc.factory.createIdentifier(`${UNIONERS}${meta.union_index!}`),
                undefined,
                [input],
            );
        };

    /* -----------------------------------------------------------
        RETURN SCRIPTS
    ----------------------------------------------------------- */
    const wrap_required =
        (tsc: typeof ts) =>
        (
            input: ts.Expression,
            meta: Metadata,
            explore: FeatureProgrammer.IExplore,
        ): ((expression: ts.Expression) => ts.Expression) => {
            if (meta.required === true && meta.any === false)
                return (expression) => expression;
            return (expression) =>
                tsc.factory.createConditionalExpression(
                    tsc.factory.createStrictInequality(
                        tsc.factory.createIdentifier("undefined"),
                        input,
                    ),
                    undefined,
                    expression,
                    undefined,
                    explore.from === "array"
                        ? tsc.factory.createStringLiteral("null")
                        : tsc.factory.createIdentifier("undefined"),
                );
        };

    const wrap_nullable =
        (tsc: typeof ts) =>
        (
            input: ts.Expression,
            meta: Metadata,
        ): ((expression: ts.Expression) => ts.Expression) => {
            if (meta.nullable === false) return (expression) => expression;
            return (expression) =>
                tsc.factory.createConditionalExpression(
                    tsc.factory.createStrictInequality(
                        tsc.factory.createNull(),
                        input,
                    ),
                    undefined,
                    expression,
                    undefined,
                    tsc.factory.createStringLiteral("null"),
                );
        };

    const wrap_functional =
        (tsc: typeof ts) =>
        (
            input: ts.Expression,
            meta: Metadata,
            explore: FeatureProgrammer.IExplore,
        ): ((expression: ts.Expression) => ts.Expression) => {
            if (meta.functional === false) return (expression) => expression;
            return (expression) =>
                tsc.factory.createConditionalExpression(
                    tsc.factory.createStrictInequality(
                        tsc.factory.createStringLiteral("function"),
                        ValueFactory.TYPEOF(tsc)(input),
                    ),
                    undefined,
                    expression,
                    undefined,
                    decode_functional(tsc)(explore),
                );
        };

    const iterate =
        (tsc: typeof ts) =>
        (importer: FunctionImporter) =>
        (input: ts.Expression, unions: IUnion[], expected: string) =>
            tsc.factory.createBlock(
                [
                    ...unions.map((u) =>
                        tsc.factory.createIfStatement(
                            u.is(),
                            tsc.factory.createReturnStatement(u.value()),
                        ),
                    ),
                    create_throw_error(tsc)(importer, input, expected),
                ],
                true,
            );

    /* -----------------------------------------------------------
        CONFIGURATIONS
    ----------------------------------------------------------- */
    const FUNCTORS = "$so";
    const UNIONERS = "$su";

    const configure =
        (p: IProject) =>
        (importer: FunctionImporter): FeatureProgrammer.IConfig => ({
            types: {
                input: (type, name) =>
                    p.tsc.factory.createTypeReferenceNode(
                        name ?? TypeFactory.getFullName(p)(type),
                    ),
                output: () => TypeFactory.keyword(p.tsc)("string"),
            },
            functors: FUNCTORS,
            unioners: UNIONERS,
            trace: false,
            path: false,
            initializer,
            decoder: decode(p)(importer),
            objector: OBJECTOR(p)(importer),
        });

    const initializer: FeatureProgrammer.IConfig["initializer"] =
        (p) => (type) => {
            const collection: MetadataCollection = new MetadataCollection();
            const meta: Metadata = MetadataFactory.analyze(p)({
                resolve: true,
                constant: true,
                validate: (meta) => {
                    if (meta.atomics.find((str) => str === "bigint"))
                        throw new Error(NO_BIGINT);
                },
            })(collection)(type);
            return [collection, meta];
        };

    const OBJECTOR =
        (p: IProject) =>
        (importer: FunctionImporter): FeatureProgrammer.IConfig.IObjector => ({
            checker: IsProgrammer.decode(p)(importer),
            decoder: decode_object(p.tsc)(importer),
            joiner: StringifyJoiner.object(p.tsc)(importer),
            unionizer: decode_union_object(p.tsc)(
                IsProgrammer.decode_object(p.tsc)(importer),
            )(decode_object(p.tsc)(importer))((exp) => exp)((value, expected) =>
                create_throw_error(p.tsc)(importer, value, expected),
            ),
            failure: (input, expected) =>
                create_throw_error(p.tsc)(importer, input, expected),
        });

    const create_throw_error =
        (tsc: typeof ts) =>
        (importer: FunctionImporter, value: ts.Expression, expected: string) =>
            tsc.factory.createExpressionStatement(
                tsc.factory.createCallExpression(
                    importer.use("throws"),
                    [],
                    [
                        tsc.factory.createObjectLiteralExpression(
                            [
                                tsc.factory.createPropertyAssignment(
                                    "expected",
                                    tsc.factory.createStringLiteral(expected),
                                ),
                                tsc.factory.createPropertyAssignment(
                                    "value",
                                    value,
                                ),
                            ],
                            true,
                        ),
                    ],
                ),
            );
}

interface IUnion {
    type: string;
    is: () => ts.Expression;
    value: () => ts.Expression;
}

const NO_BIGINT = "Error on typia.stringify(): does not allow bigint type.";
