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
import { FunctionImporter } from "./helpers/FunctionImporeter";
import { PruneJoiner } from "./helpers/PruneJoiner";
import { UnionExplorer } from "./helpers/UnionExplorer";
import { decode_union_object } from "./internal/decode_union_object";

export namespace PruneProgrammer {
    /**
     * @deprecated Use `write()` function instead
     */
    export const generate =
        (project: IProject, modulo: ts.LeftHandSideExpression) =>
        (type: ts.Type, name?: string) =>
            write(project)(modulo)(type, name);

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
        ): ts.ConciseBody => {
            const tsc: typeof ts = p.tsc;
            if (filter(meta) === false) return tsc.factory.createBlock([]);

            interface IUnion {
                type: string;
                is: () => ts.Expression;
                value: () => ts.Expression | ts.Block | ts.ReturnStatement;
            }
            const unions: IUnion[] = [];

            //----
            // LIST UP UNION TYPES
            //----
            // TUPLES
            for (const tuple of meta.tuples.filter((t) =>
                t.some((e) => filter(e.rest ?? e)),
            ))
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
            if (meta.arrays.filter(filter).length)
                unions.push({
                    type: "array",
                    is: () => ExpressionFactory.isArray(tsc)(input),
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

            // BUILT-IN CLASSES
            if (meta.natives.length)
                for (const native of meta.natives)
                    unions.push({
                        type: "native",
                        is: () =>
                            ExpressionFactory.isInstanceOf(tsc)(native)(input),
                        value: () => tsc.factory.createReturnStatement(),
                    });
            if (meta.sets.length)
                unions.push({
                    type: "set",
                    is: () => ExpressionFactory.isInstanceOf(tsc)("Set")(input),
                    value: () => tsc.factory.createReturnStatement(),
                });
            if (meta.maps.length)
                unions.push({
                    type: "map",
                    is: () => ExpressionFactory.isInstanceOf(tsc)("Map")(input),
                    value: () => tsc.factory.createReturnStatement(),
                });

            // OBJECTS
            if (meta.objects.length)
                unions.push({
                    type: "object",
                    is: () =>
                        ExpressionFactory.isObject(tsc)({
                            checkNull: true,
                            checkArray: false,
                        })(input),
                    value: () =>
                        explore_objects(tsc)(importer)(input, meta, {
                            ...explore,
                            from: "object",
                        }),
                });

            //----
            // STATEMENTS
            //----
            const converter = (
                v: ts.Expression | ts.Block | ts.ReturnStatement,
            ) =>
                tsc.isReturnStatement(v) || tsc.isBlock(v)
                    ? v
                    : tsc.factory.createExpressionStatement(v);

            const statements: ts.Statement[] = unions.map((u) =>
                tsc.factory.createIfStatement(u.is(), converter(u.value())),
            );
            return tsc.factory.createBlock(statements, true);
        };

    const decode_tuple =
        (p: IProject) =>
        (importer: FunctionImporter) =>
        (
            input: ts.Expression,
            tuple: Metadata[],
            explore: FeatureProgrammer.IExplore,
        ): ts.Block => {
            const children: ts.ConciseBody[] = tuple
                .map((elem, index) => [elem, index] as const)
                .filter(([elem]) => filter(elem) && elem.rest === null)
                .map(([elem, index]) =>
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
                if (rest === null || filter(rest) === false) return null;

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
            return PruneJoiner.tuple(p.tsc)(children, rest);
        };

    const decode_array = (p: IProject) => (importer: FunctionImporter) =>
        FeatureProgrammer.decode_array(p.tsc)(configure(p)(importer))(importer)(
            PruneJoiner.array(p.tsc),
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
            decoder: decode_array(p)(importer),
            empty: p.tsc.factory.createReturnStatement(),
            success: p.tsc.factory.createTrue(),
            failure: (input, expected) =>
                create_throw_error(p.tsc)(importer)(expected)(input),
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

    const filter = (meta: Metadata): boolean =>
        meta.any === false &&
        (meta.objects.length !== 0 ||
            meta.tuples.some((t) => t.some((e) => filter(e.rest ?? e))) ||
            meta.arrays.some((e) => filter(e)));

    /* -----------------------------------------------------------
        CONFIGURATIONS
    ----------------------------------------------------------- */
    const FUNCTORS = "$po";
    const UNIONERS = "$pu";

    const configure =
        (p: IProject) =>
        (importer: FunctionImporter): FeatureProgrammer.IConfig => ({
            types: {
                input: (type, name) =>
                    p.tsc.factory.createTypeReferenceNode(
                        name ?? TypeFactory.getFullName(p)(type),
                    ),
                output: () => TypeFactory.keyword(p.tsc)("void"),
            },
            functors: FUNCTORS,
            unioners: UNIONERS,
            trace: false,
            path: false,
            initializer,
            decoder: decode(p)(importer),
            objector: objector(p)(importer),
        });

    const objector =
        (p: IProject) =>
        (importer: FunctionImporter): FeatureProgrammer.IConfig.IObjector => ({
            checker: IsProgrammer.decode(p)(importer),
            decoder: decode_object(p.tsc)(importer),
            joiner: PruneJoiner.object(p.tsc),
            unionizer: decode_union_object(p.tsc)(
                IsProgrammer.decode_object(p.tsc)(importer),
            )(decode_object(p.tsc)(importer))((exp) => exp)((value, expected) =>
                create_throw_error(p.tsc)(importer)(expected)(value),
            ),
            failure: (input, expected) =>
                create_throw_error(p.tsc)(importer)(expected)(input),
        });

    const initializer: FeatureProgrammer.IConfig["initializer"] =
        (p) => (type) => {
            const collection = new MetadataCollection();
            const meta = MetadataFactory.analyze(p)({
                resolve: false,
                constant: true,
            })(collection)(type);
            return [collection, meta];
        };

    const create_throw_error =
        (tsc: typeof ts) =>
        (importer: FunctionImporter) =>
        (expected: string) =>
        (value: ts.Expression) =>
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
