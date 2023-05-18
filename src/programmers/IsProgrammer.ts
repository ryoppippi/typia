import type ts from "typescript/lib/tsclibrary";

import { ExpressionFactory } from "../factories/ExpressionFactory";
import { IdentifierFactory } from "../factories/IdentifierFactory";
import { ValueFactory } from "../factories/ValueFactory";

import { MetadataObject } from "../metadata/MetadataObject";

import { IProject } from "../transformers/IProject";

import { CheckerProgrammer } from "./CheckerProgrammer";
import { FunctionImporter } from "./helpers/FunctionImporeter";
import { IExpressionEntry } from "./helpers/IExpressionEntry";
import { OptionPredicator } from "./helpers/OptionPredicator";
import { disable_function_importer_declare } from "./helpers/disable_function_importer_declare";
import { check_object } from "./internal/check_object";
import { feature_object_entries } from "./internal/feature_object_entries";

export namespace IsProgrammer {
    export const configure =
        (tsc: typeof ts) =>
        (options?: Partial<CONFIG.IOptions>) =>
        (importer: FunctionImporter): CheckerProgrammer.IConfig => ({
            functors: "$io",
            unioners: "$iu",
            trace: false,
            path: false,
            equals: !!options?.object,
            numeric: OptionPredicator.numeric({
                numeric: options?.numeric,
            }),
            atomist: () => (entry) => () =>
                [
                    entry.expression,
                    ...entry.tags.map((tag) => tag.expression),
                ].reduce((x, y) => tsc.factory.createLogicalAnd(x, y)),
            combiner: () => (type: "and" | "or") => {
                const initial: ts.TrueLiteral | ts.FalseLiteral =
                    type === "and"
                        ? tsc.factory.createTrue()
                        : tsc.factory.createFalse();
                const binder =
                    type === "and"
                        ? tsc.factory.createLogicalAnd
                        : tsc.factory.createLogicalOr;
                return (
                    _input: ts.Expression,
                    binaries: CheckerProgrammer.IBinary[],
                ) =>
                    binaries.length
                        ? binaries
                              .map((binary) => binary.expression)
                              .reduce((x, y) => binder(x, y))
                        : initial;
            },
            joiner: {
                object:
                    options?.object ||
                    check_object(tsc)({
                        equals: !!options?.object,
                        undefined: OptionPredicator.undefined({
                            undefined: options?.undefined,
                        }),
                        assert: true,
                        reduce: tsc.factory.createLogicalAnd,
                        positive: tsc.factory.createTrue(),
                        superfluous: () => tsc.factory.createFalse(),
                    })(importer),
                array: (input, arrow) =>
                    tsc.factory.createCallExpression(
                        IdentifierFactory.access(tsc)(input)("every"),
                        undefined,
                        [arrow],
                    ),
                failure: () => tsc.factory.createFalse(),
            },
            success: tsc.factory.createTrue(),
        });

    export namespace CONFIG {
        export interface IOptions {
            numeric: boolean;
            undefined: boolean;
            object: (
                input: ts.Expression,
                entries: IExpressionEntry<ts.Expression>[],
            ) => ts.Expression;
        }
    }

    /* -----------------------------------------------------------
        WRITERS
    ----------------------------------------------------------- */
    /**
     * @deprecated Use `write()` function instead
     */
    export const generate =
        (
            project: IProject,
            modulo: ts.LeftHandSideExpression,
            equals: boolean = false,
        ) =>
        (type: ts.Type, name?: string) =>
            write(project)(modulo)(equals)(type, name);

    export const write =
        (p: IProject) =>
        (modulo: ts.LeftHandSideExpression, disable?: boolean) =>
        (equals: boolean) => {
            const importer: FunctionImporter =
                disable === true
                    ? disable_function_importer_declare(
                          new FunctionImporter(p.tsc),
                      )
                    : new FunctionImporter(p.tsc);

            // CONFIGURATION
            const config: CheckerProgrammer.IConfig = {
                ...configure(p.tsc)({
                    object: check_object(p.tsc)({
                        equals,
                        undefined: OptionPredicator.undefined(p.options),
                        assert: true,
                        reduce: p.tsc.factory.createLogicalAnd,
                        positive: p.tsc.factory.createTrue(),
                        superfluous: () => p.tsc.factory.createFalse(),
                    })(importer),
                    numeric: OptionPredicator.numeric(p.options),
                })(importer),
                trace: equals,
                addition: () => importer.declare(modulo),
            };

            config.decoder = (input, target, explore, tags, jsDocTags) => {
                if (
                    target.size() === 1 &&
                    target.objects.length === 1 &&
                    target.required === true &&
                    target.nullable === false
                ) {
                    // ONLY WHEN OBJECT WITH SOME ATOMIC PROPERTIES
                    const obj: MetadataObject = target.objects[0]!;
                    if (
                        obj._Is_simple() &&
                        (equals === false ||
                            OptionPredicator.undefined(p.options) === false)
                    )
                        return p.tsc.factory.createLogicalAnd(
                            ExpressionFactory.isObject(p.tsc)({
                                checkNull: true,
                                checkArray: false,
                            })(input),
                            config.joiner.object(
                                input,
                                feature_object_entries(p.tsc)(config as any)(
                                    importer,
                                )(obj)(input),
                            ),
                        );
                }
                return CheckerProgrammer.decode(p)(config)(importer)(
                    input,
                    target,
                    explore,
                    tags,
                    jsDocTags,
                );
            };

            // GENERATE CHECKER
            return CheckerProgrammer.write(p)(config)(importer);
        };

    export const write_functors =
        (p: IProject) => (importer: FunctionImporter) =>
            CheckerProgrammer.write_functors(p)(configure(p.tsc)()(importer))(
                importer,
            );

    export const write_unioners =
        (p: IProject) => (importer: FunctionImporter) =>
            CheckerProgrammer.write_unioners(
                p,
                configure(p.tsc)()(importer),
                importer,
            );

    /* -----------------------------------------------------------
        DECODERS
    ----------------------------------------------------------- */
    export const decode = (p: IProject) => (importer: FunctionImporter) =>
        CheckerProgrammer.decode(p)(configure(p.tsc)()(importer))(importer);

    export const decode_object =
        (tsc: typeof ts) => (importer: FunctionImporter) =>
            CheckerProgrammer.decode_object(tsc)(configure(tsc)()(importer))(
                importer,
            );

    export const decode_to_json =
        (tsc: typeof ts) =>
        (checkNull: boolean) =>
        (input: ts.Expression): ts.Expression =>
            tsc.factory.createLogicalAnd(
                ExpressionFactory.isObject(tsc)({
                    checkArray: false,
                    checkNull,
                })(input),
                tsc.factory.createStrictEquality(
                    tsc.factory.createStringLiteral("function"),
                    ValueFactory.TYPEOF(tsc)(
                        IdentifierFactory.access(tsc)(input)("toJSON"),
                    ),
                ),
            );

    export const decode_functional =
        (tsc: typeof ts) => (input: ts.Expression) =>
            tsc.factory.createStrictEquality(
                tsc.factory.createStringLiteral("function"),
                ValueFactory.TYPEOF(tsc)(input),
            );
}
