import type ts from "typescript/lib/tsclibrary";

import { ExpressionFactory } from "../factories/ExpressionFactory";
import { IdentifierFactory } from "../factories/IdentifierFactory";
import { MetadataCollection } from "../factories/MetadataCollection";
import { MetadataFactory } from "../factories/MetadataFactory";
import { TypeFactory } from "../factories/TypeFactory";

import { Metadata } from "../metadata/Metadata";

import { IProject } from "../transformers/IProject";

import { FeatureProgrammer } from "./FeatureProgrammer";
import { IsProgrammer } from "./IsProgrammer";
import { CloneJoiner } from "./helpers/CloneJoiner";
import { FunctionImporter } from "./helpers/FunctionImporeter";
import { UnionExplorer } from "./helpers/UnionExplorer";
import { decode_union_object } from "./internal/decode_union_object";

export namespace CloneProgrammer {
    export const write =
        (p: IProject) => (modulo: ts.LeftHandSideExpression) => {
            const importer: FunctionImporter = new FunctionImporter(p.tsc);
            return FeatureProgrammer.analyze(p)({
                ...CONFIG(p)(importer),
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
        ): ts.Expression => {
            // ANY TYPE
            if (
                meta.any ||
                meta.arrays.some((a) => a.any) ||
                meta.tuples.some((t) => t.every((e) => e.any))
            )
                return p.tsc.factory.createCallExpression(
                    importer.use("any"),
                    undefined,
                    [input],
                );

            interface IUnion {
                type: string;
                is: () => ts.Expression;
                value: () => ts.Expression;
            }
            const unions: IUnion[] = [];

            //----
            // LIST UP UNION TYPES
            //----
            // toJSON() METHOD
            if (meta.resolved !== null)
                unions.push({
                    type: "resolved",
                    is: () => IsProgrammer.decode_to_json(p.tsc)(true)(input),
                    value: () =>
                        decode_to_json(p)(importer)(
                            input,
                            meta.resolved!,
                            explore,
                        ),
                });

            // TUPLES
            for (const tuple of meta.tuples)
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
                        decode_tuple(p)(importer)(input, tuple, explore),
                });

            // ARRAYS
            if (meta.arrays.length)
                unions.push({
                    type: "array",
                    is: () => ExpressionFactory.isArray(p.tsc)(input),
                    value: () =>
                        explore_arrays(p)(importer)(
                            input,
                            meta.arrays,
                            {
                                ...explore,
                                from: "array",
                            },
                            [],
                            [],
                        ),
                });

            // NATIVE TYPES
            if (meta.sets.length)
                unions.push({
                    type: "set",
                    is: () =>
                        ExpressionFactory.isInstanceOf(p.tsc)("Set")(input),
                    value: () => p.tsc.factory.createIdentifier("{}"),
                });
            if (meta.maps.length)
                unions.push({
                    type: "map",
                    is: () =>
                        ExpressionFactory.isInstanceOf(p.tsc)("Map")(input),
                    value: () => p.tsc.factory.createIdentifier("{}"),
                });
            for (const native of meta.natives)
                unions.push({
                    type: "native",
                    is: () =>
                        ExpressionFactory.isInstanceOf(p.tsc)(native)(input),
                    value: () =>
                        native === "Boolean" ||
                        native === "Number" ||
                        native === "String"
                            ? p.tsc.factory.createCallExpression(
                                  IdentifierFactory.access(p.tsc)(input)(
                                      "valueOf",
                                  ),
                                  undefined,
                                  undefined,
                              )
                            : p.tsc.factory.createIdentifier("{}"),
                });

            // OBJECTS
            if (meta.objects.length)
                unions.push({
                    type: "object",
                    is: () =>
                        ExpressionFactory.isObject(p.tsc)({
                            checkNull: true,
                            checkArray: false,
                        })(input),
                    value: () =>
                        explore_objects(p.tsc)(importer)(input, meta, {
                            ...explore,
                            from: "object",
                        }),
                });

            // COMPOSITION
            let last: ts.Expression = input;
            for (const u of unions.reverse())
                last = p.tsc.factory.createConditionalExpression(
                    u.is(),
                    undefined,
                    u.value(),
                    undefined,
                    last,
                );
            return p.tsc.factory.createAsExpression(
                last,
                TypeFactory.keyword(p.tsc)("any"),
            );
        };

    const decode_to_json =
        (p: IProject) =>
        (importer: FunctionImporter) =>
        (
            input: ts.Expression,
            resolved: Metadata,
            explore: FeatureProgrammer.IExplore,
        ): ts.Expression => {
            return decode(p)(importer)(
                p.tsc.factory.createCallExpression(
                    IdentifierFactory.access(p.tsc)(input)("toJSON"),
                    undefined,
                    [],
                ),
                resolved,
                explore,
            );
        };

    const decode_tuple =
        (p: IProject) =>
        (importer: FunctionImporter) =>
        (
            input: ts.Expression,
            tuple: Metadata[],
            explore: FeatureProgrammer.IExplore,
        ): ts.Expression => {
            const children: ts.Expression[] = tuple
                .filter((m) => m.rest === null)
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
                    ),
                );
            const rest = (() => {
                if (tuple.length === 0) return null;

                const last: Metadata = tuple[tuple.length - 1]!;
                const rest: Metadata | null = last.rest;
                if (rest === null) return null;

                return decode(p)(importer)(
                    p.tsc.factory.createCallExpression(
                        IdentifierFactory.access(p.tsc)(input)("slice"),
                        undefined,
                        [p.tsc.factory.createNumericLiteral(tuple.length - 1)],
                    ),
                    (() => {
                        const wrapper: Metadata = Metadata.initialize();
                        wrapper.arrays.push(rest);
                        return wrapper;
                    })(),
                    {
                        ...explore,
                        start: tuple.length - 1,
                    },
                );
            })();
            return CloneJoiner.tuple(p.tsc)(children, rest);
        };

    const decode_array = (p: IProject, importer: FunctionImporter) =>
        FeatureProgrammer.decode_array(p.tsc)(CONFIG(p)(importer))(importer)(
            CloneJoiner.array(p.tsc),
        );

    const decode_object = (tsc: typeof ts) => (importer: FunctionImporter) =>
        FeatureProgrammer.decode_object(tsc)({
            trace: false,
            path: false,
            functors: FUNCTORS,
        })(importer);

    const explore_arrays = (p: IProject) => (importer: FunctionImporter) =>
        UnionExplorer.array(p.tsc)({
            checker: IsProgrammer.decode(p)(importer),
            decoder: decode_array(p, importer),
            empty: p.tsc.factory.createReturnStatement(),
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
        CONFIGURATIONS
    ----------------------------------------------------------- */
    const FUNCTORS = "$co";
    const UNIONERS = "$cu";

    const CONFIG =
        (p: IProject) =>
        (importer: FunctionImporter): FeatureProgrammer.IConfig => ({
            types: {
                input: (type, name) =>
                    p.tsc.factory.createTypeReferenceNode(
                        name ?? TypeFactory.getFullName(p)(type),
                    ),
                output: (type, name) =>
                    p.tsc.factory.createTypeReferenceNode(
                        `typia.Primitive<${
                            name ?? TypeFactory.getFullName(p)(type)
                        }>`,
                    ),
            },
            functors: FUNCTORS,
            unioners: UNIONERS,
            trace: false,
            path: false,
            initializer,
            decoder: decode(p)(importer),
            objector: OBJECTOR(p)(importer),
        });

    const OBJECTOR =
        (p: IProject) =>
        (importer: FunctionImporter): FeatureProgrammer.IConfig.IObjector => ({
            checker: IsProgrammer.decode(p)(importer),
            decoder: decode_object(p.tsc)(importer),
            joiner: CloneJoiner.object(p.tsc),
            unionizer: decode_union_object(p.tsc)(
                IsProgrammer.decode_object(p.tsc)(importer),
            )(decode_object(p.tsc)(importer))((exp) => exp)((value, expected) =>
                create_throw_error(p.tsc)(importer, value, expected),
            ),
            failure: (input, expected) =>
                create_throw_error(p.tsc)(importer, input, expected),
        });

    const initializer: FeatureProgrammer.IConfig["initializer"] =
        (p) => (type) => {
            const collection = new MetadataCollection();
            const meta = MetadataFactory.analyze(p)({
                resolve: true,
                constant: true,
            })(collection)(type);
            return [collection, meta];
        };

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
