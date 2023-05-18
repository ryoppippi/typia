import { JSDocTagInfo } from "typescript";
import type ts from "typescript/lib/tsclibrary";

import { IdentifierFactory } from "../factories/IdentifierFactory";
import { MetadataCollection } from "../factories/MetadataCollection";
import { StatementFactory } from "../factories/StatementFactory";
import { TypeFactory } from "../factories/TypeFactory";
import { ValueFactory } from "../factories/ValueFactory";

import { IJsDocTagInfo } from "../metadata/IJsDocTagInfo";
import { IMetadataTag } from "../metadata/IMetadataTag";
import { Metadata } from "../metadata/Metadata";
import { MetadataObject } from "../metadata/MetadataObject";

import { IProject } from "../transformers/IProject";

import { CheckerProgrammer } from "./CheckerProgrammer";
import { FunctionImporter } from "./helpers/FunctionImporeter";
import { IExpressionEntry } from "./helpers/IExpressionEntry";
import { UnionExplorer } from "./helpers/UnionExplorer";
import { feature_object_entries } from "./internal/feature_object_entries";

export namespace FeatureProgrammer {
    /* -----------------------------------------------------------
        PARAMETERS
    ----------------------------------------------------------- */
    export interface IConfig<Output extends ts.ConciseBody = ts.ConciseBody> {
        types: IConfig.ITypes;

        /**
         * Prefix name of functions for specific object types.
         */
        functors: string;

        /**
         * Prefix name of functions for union object types.
         */
        unioners: string;

        /**
         * Whether to archive access path or not.
         */
        path: boolean;

        /**
         * Whether to trace exception or not.
         */
        trace: boolean;

        addition?(collection: MetadataCollection): ts.Statement[];

        /**
         * Initializer of metadata.
         */
        initializer: (
            project: IProject,
        ) => (type: ts.Type) => [MetadataCollection, Metadata];

        /**
         * Decoder, station of every types.
         */
        decoder: Decoder<Metadata, Output>;

        /**
         * Object configurator.
         */
        objector: IConfig.IObjector;

        /**
         * Generator of functions for object types.
         */
        generator?: Partial<IConfig.IGenerator>;
    }
    export namespace IConfig {
        export interface ITypes {
            input: (type: ts.Type, name?: string) => ts.TypeNode;
            output: (type: ts.Type, name?: string) => ts.TypeNode;
        }

        export interface IObjector {
            /**
             * Type checker when union object type comes.
             */
            checker: Decoder<Metadata, ts.Expression>;

            /**
             * Decoder, function call expression generator of specific typed objects.
             */
            decoder: Decoder<MetadataObject, ts.Expression>;

            /**
             * Joiner of expressions from properties.
             */
            joiner(
                input: ts.Expression,
                entries: IExpressionEntry[],
                parent: MetadataObject,
            ): ts.ConciseBody;

            /**
             * Union type specificator.
             *
             * Expression of an algorithm specifying object type and calling
             * the `decoder` function of the specified object type.
             */
            unionizer: Decoder<MetadataObject[], ts.Expression>;

            /**
             * Handler of union type specification failure.
             *
             * @param value Expression of input parameter
             * @param expected Expected type name
             * @param explore Exploration info
             * @returns Statement of failure
             */
            failure(
                value: ts.Expression,
                expected: string,
                explore?: IExplore,
            ): ts.Statement;

            /**
             * Transformer of type checking expression by discrimination.
             *
             * When an object type has been specified by a discrimination without full
             * iteration, the `unionizer` will decode the object instance after
             * the last type checking.
             *
             * In such circumtance, you can transform the last type checking function.
             *
             * @param exp Current expression about type checking
             * @returns Transformed expression
             * @deprecated
             */
            is?(exp: ts.Expression): ts.Expression;

            /**
             * Transformer of non-undefined type checking by discrimination.
             *
             * When specifying an union type of objects, `typia` tries to find
             * descrimination way just by checking only one property type.
             * If succeeded to find the discrimination way, `typia` will check the target
             * property type and in the checking, non-undefined type checking would be
             * done.
             *
             * In such process, you can transform the non-undefined type checking.
             *
             * @param exp
             * @returns Transformed expression
             * @deprecated
             */
            required?(exp: ts.Expression): ts.Expression;

            /**
             * Conditon wrapper when unable to specify any object type.
             *
             * When failed to specify an object type through discrimination, full
             * iteration type checking would be happend. In such circumstance, you
             * can wrap the condition with additional function.
             *
             * @param condition Current condition
             * @returns A function wrapped current condition
             */
            full?: (
                condition: ts.Expression,
            ) => (
                input: ts.Expression,
                expected: string,
                explore: IExplore,
            ) => ts.Expression;

            /**
             * Return type.
             */
            type?: ts.TypeNode;
        }
        export interface IGenerator {
            /**
             *
             * @param col
             */
            functors(col: MetadataCollection): ts.VariableStatement[];

            /**
             *
             * @param col
             */
            unioners(col: MetadataCollection): ts.VariableStatement[];
        }
    }

    export interface IExplore {
        tracable: boolean;
        source: "top" | "object";
        from: "top" | "array" | "object";
        postfix: string;
        start?: number;
    }

    export interface Decoder<
        T,
        Output extends ts.ConciseBody = ts.ConciseBody,
    > {
        (
            input: ts.Expression,
            target: T,
            explore: IExplore,
            metaTags: IMetadataTag[],
            jsDocTags: JSDocTagInfo[],
        ): Output;
    }

    /* -----------------------------------------------------------
        GENERATORS
    ----------------------------------------------------------- */
    export const analyze =
        (p: IProject) =>
        (config: IConfig) =>
        (importer: FunctionImporter) =>
        (type: ts.Type, name?: string) => {
            const [collection, meta] = config.initializer(p)(type);

            // ITERATE OVER ALL METADATA
            const output: ts.ConciseBody = config.decoder(
                ValueFactory.INPUT(p.tsc)(),
                meta,
                {
                    tracable: config.path || config.trace,
                    source: "top",
                    from: "top",
                    postfix: '""',
                },
                [],
                [],
            );

            // RETURNS THE OPTIMAL ARROW FUNCTION
            const functors: ts.VariableStatement[] = (
                config.generator?.functors ??
                write_functors(p.tsc)(config)(importer)
            )(collection);
            const unioners: ts.VariableStatement[] = (
                config.generator?.unioners ??
                write_unioners(p.tsc)(config)(importer)
            )(collection);
            const added: ts.Statement[] = (config.addition ?? (() => []))(
                collection,
            );

            return p.tsc.factory.createArrowFunction(
                undefined,
                undefined,
                PARAMETERS(p.tsc)(config)(config.types.input(type, name))(
                    ValueFactory.INPUT(p.tsc)(),
                ),
                config.types.output(type, name),
                undefined,
                p.tsc.factory.createBlock(
                    [
                        ...added,
                        ...functors.filter((_, i) =>
                            importer.hasLocal(`${config.functors}${i}`),
                        ),
                        ...unioners.filter((_, i) =>
                            importer.hasLocal(`${config.unioners}${i}`),
                        ),
                        ...(p.tsc.isBlock(output)
                            ? output.statements
                            : [p.tsc.factory.createReturnStatement(output)]),
                    ],
                    true,
                ),
            );
        };

    export const write_functors =
        (tsc: typeof ts) =>
        (config: IConfig) =>
        (importer: FunctionImporter) =>
        (collection: MetadataCollection) =>
            collection
                .objects()
                .map((obj, i) =>
                    StatementFactory.constant(tsc)(
                        `${config.functors}${i}`,
                        write_object(tsc)(config)(importer)(obj),
                    ),
                );

    export const write_unioners =
        (tsc: typeof ts) =>
        (config: IConfig) =>
        (importer: FunctionImporter) =>
        (collection: MetadataCollection) =>
            collection
                .unions()
                .map((union, i) =>
                    StatementFactory.constant(tsc)(
                        importer.useLocal(`${config.unioners}${i}`),
                        write_union(tsc)(config)(union),
                    ),
                );

    const write_object =
        (tsc: typeof ts) =>
        (config: IConfig) =>
        (importer: FunctionImporter) =>
        (obj: MetadataObject) =>
            tsc.factory.createArrowFunction(
                undefined,
                undefined,
                PARAMETERS(tsc)(config)(TypeFactory.keyword(tsc)("any"))(
                    ValueFactory.INPUT(tsc)(),
                ),
                config.objector.type ?? TypeFactory.keyword(tsc)("any"),
                undefined,
                config.objector.joiner(
                    tsc.factory.createIdentifier("input"),
                    feature_object_entries(tsc)(config)(importer)(obj)(
                        tsc.factory.createIdentifier("input"),
                    ),
                    obj,
                ),
            );

    const write_union = (tsc: typeof ts) => (config: IConfig) => {
        const explorer = UnionExplorer.object(tsc)(config);
        const input = ValueFactory.INPUT(tsc)();

        return (meta: MetadataObject[]) =>
            tsc.factory.createArrowFunction(
                undefined,
                undefined,
                PARAMETERS(tsc)(config)(TypeFactory.keyword(tsc)("any"))(
                    ValueFactory.INPUT(tsc)(),
                ),
                TypeFactory.keyword(tsc)("any"),
                undefined,
                explorer(
                    input,
                    meta,
                    {
                        tracable: config.path || config.trace,
                        source: "object",
                        from: "object",
                        postfix: "",
                    },
                    [],
                    [],
                ),
            );
    };

    /* -----------------------------------------------------------
        DECODERS
    ----------------------------------------------------------- */
    export const decode_array =
        (tsc: typeof ts) =>
        (config: Pick<IConfig, "trace" | "path" | "decoder">) =>
        (importer: FunctionImporter) =>
        (
            combiner: (
                input: ts.Expression,
                arrow: ts.ArrowFunction,
                metaTags: IMetadataTag[],
                jsDocTags: JSDocTagInfo[],
            ) => ts.Expression,
        ) => {
            const rand: string = importer.increment().toString();
            const tail =
                config.path || config.trace
                    ? [
                          IdentifierFactory.parameter(tsc)(
                              "_index" + rand,
                              TypeFactory.keyword(tsc)("number"),
                          ),
                      ]
                    : [];

            return (
                input: ts.Expression,
                meta: Metadata,
                explore: IExplore,
                metaTags: IMetadataTag[],
                jsDocTags: IJsDocTagInfo[],
            ) => {
                const arrow: ts.ArrowFunction = tsc.factory.createArrowFunction(
                    undefined,
                    undefined,
                    [
                        IdentifierFactory.parameter(tsc)(
                            "elem",
                            TypeFactory.keyword(tsc)("any"),
                        ),
                        ...tail,
                    ],
                    undefined,
                    undefined,
                    config.decoder(
                        ValueFactory.INPUT(tsc)("elem"),
                        meta,
                        {
                            tracable: explore.tracable,
                            source: explore.source,
                            from: "array",
                            postfix: INDEX_SYMBOL(explore.start ?? null)(
                                explore.postfix,
                            )(rand),
                        },
                        metaTags,
                        jsDocTags,
                    ),
                );
                return combiner(input, arrow, metaTags, jsDocTags);
            };
        };

    export const decode_object =
        (tsc: typeof ts) =>
        (config: Pick<IConfig, "trace" | "path" | "functors">) =>
        (importer: FunctionImporter) =>
        (input: ts.Expression, obj: MetadataObject, explore: IExplore) =>
            tsc.factory.createCallExpression(
                tsc.factory.createIdentifier(
                    importer.useLocal(`${config.functors}${obj.index}`),
                ),
                undefined,
                get_object_arguments(tsc)(config)(explore)(input),
            );

    export const get_object_arguments =
        (tsc: typeof ts) =>
        (config: Pick<IConfig, "path" | "trace">) =>
        (explore: FeatureProgrammer.IExplore) => {
            const tail: ts.Expression[] =
                config.path === false && config.trace === false
                    ? []
                    : config.path === true && config.trace === true
                    ? [
                          tsc.factory.createIdentifier(
                              explore.postfix
                                  ? `_path + ${explore.postfix}`
                                  : "_path",
                          ),
                          explore.source === "object"
                              ? tsc.factory.createIdentifier(
                                    `${explore.tracable} && _exceptionable`,
                                )
                              : explore.tracable
                              ? tsc.factory.createTrue()
                              : tsc.factory.createFalse(),
                      ]
                    : config.path === true
                    ? [
                          tsc.factory.createIdentifier(
                              explore.postfix
                                  ? `_path + ${explore.postfix}`
                                  : "_path",
                          ),
                      ]
                    : [
                          explore.source === "object"
                              ? tsc.factory.createIdentifier(
                                    `${explore.tracable} && _exceptionable`,
                                )
                              : explore.tracable
                              ? tsc.factory.createTrue()
                              : tsc.factory.createFalse(),
                      ];
            return (input: ts.Expression) => [input, ...tail];
        };
}

const INDEX_SYMBOL =
    (start: number | null) => (prev: string) => (rand: string) => {
        const tail: string =
            start !== null
                ? `"[" + (${start} + _index${rand}) + "]"`
                : `"[" + _index${rand} + "]"`;
        if (prev === "") return tail;
        else if (prev[prev.length - 1] === `"`)
            return prev.substring(0, prev.length - 1) + tail.substring(1);
        return prev + ` + ${tail}`;
    };

const PARAMETERS =
    (tsc: typeof ts) =>
    (props: Pick<CheckerProgrammer.IConfig, "path" | "trace">) =>
    (type: ts.TypeNode) => {
        const tail: ts.ParameterDeclaration[] = [];
        if (props.path)
            tail.push(
                IdentifierFactory.parameter(tsc)(
                    "_path",
                    TypeFactory.keyword(tsc)("string"),
                ),
            );
        if (props.trace)
            tail.push(
                IdentifierFactory.parameter(tsc)(
                    "_exceptionable",
                    TypeFactory.keyword(tsc)("boolean"),
                    tsc.factory.createTrue(),
                ),
            );
        return (input: ts.Identifier) => [
            IdentifierFactory.parameter(tsc)(input, type),
            ...tail,
        ];
    };
