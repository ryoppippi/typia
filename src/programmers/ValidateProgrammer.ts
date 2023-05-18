import type ts from "typescript/lib/tsclibrary";

import { IdentifierFactory } from "../factories/IdentifierFactory";
import { StatementFactory } from "../factories/StatementFactory";
import { TypeFactory } from "../factories/TypeFactory";

import { IProject } from "../transformers/IProject";

import { CheckerProgrammer } from "./CheckerProgrammer";
import { IsProgrammer } from "./IsProgrammer";
import { FunctionImporter } from "./helpers/FunctionImporeter";
import { OptionPredicator } from "./helpers/OptionPredicator";
import { check_everything } from "./internal/check_everything";
import { check_object } from "./internal/check_object";

export namespace ValidateProgrammer {
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
        (modulo: ts.LeftHandSideExpression) =>
        (equals: boolean) =>
        (type: ts.Type, name?: string) => {
            const importer: FunctionImporter = new FunctionImporter(p.tsc);
            const program: ts.ArrowFunction = CheckerProgrammer.write(p)({
                functors: "$vo",
                unioners: "$vu",
                path: true,
                trace: true,
                numeric: OptionPredicator.numeric(p.options),
                equals,
                atomist: (explore) => (tuple) => (input) =>
                    [
                        tuple.expression,
                        ...tuple.tags.map((tag) =>
                            p.tsc.factory.createLogicalOr(
                                tag.expression,
                                create_report_call(p.tsc)(
                                    explore.from === "top"
                                        ? p.tsc.factory.createTrue()
                                        : p.tsc.factory.createIdentifier(
                                              "_exceptionable",
                                          ),
                                )(
                                    p.tsc.factory.createIdentifier(
                                        explore.postfix
                                            ? `_path + ${explore.postfix}`
                                            : "_path",
                                    ),
                                    tag.expected,
                                    input,
                                ),
                            ),
                        ),
                    ].reduce((x, y) => p.tsc.factory.createLogicalAnd(x, y)),
                combiner: combine(p.tsc)(equals)(importer),
                joiner: joiner(p.tsc)(equals)(importer),
                success: p.tsc.factory.createTrue(),
            })(importer)(type, name);

            return p.tsc.factory.createArrowFunction(
                undefined,
                undefined,
                [
                    IdentifierFactory.parameter(p.tsc)(
                        "input",
                        TypeFactory.keyword(p.tsc)("any"),
                    ),
                ],
                p.tsc.factory.createTypeReferenceNode(
                    `typia.IValidation<${
                        name ?? TypeFactory.getFullName(p)(type)
                    }>`,
                ),
                undefined,
                p.tsc.factory.createBlock(
                    [
                        StatementFactory.constant(p.tsc)(
                            "__is",
                            IsProgrammer.write(p)(modulo, true)(equals)(
                                type,
                                name ?? TypeFactory.getFullName(p)(type),
                            ),
                        ),
                        StatementFactory.constant(p.tsc)(
                            "errors",
                            p.tsc.factory.createAsExpression(
                                p.tsc.factory.createArrayLiteralExpression([]),
                                p.tsc.factory.createArrayTypeNode(
                                    TypeFactory.keyword(p.tsc)("any"),
                                ),
                            ),
                        ),
                        StatementFactory.constant(p.tsc)(
                            "$report",
                            p.tsc.factory.createCallExpression(
                                IdentifierFactory.access(p.tsc)(
                                    p.tsc.factory.createParenthesizedExpression(
                                        p.tsc.factory.createAsExpression(
                                            modulo,
                                            TypeFactory.keyword(p.tsc)("any"),
                                        ),
                                    ),
                                )("report"),
                                [],
                                [p.tsc.factory.createIdentifier("errors")],
                            ),
                        ),
                        ...importer.declare(modulo),
                        p.tsc.factory.createIfStatement(
                            p.tsc.factory.createStrictEquality(
                                p.tsc.factory.createFalse(),
                                p.tsc.factory.createCallExpression(
                                    p.tsc.factory.createIdentifier("__is"),
                                    undefined,
                                    [p.tsc.factory.createIdentifier("input")],
                                ),
                            ),
                            p.tsc.factory.createExpressionStatement(
                                p.tsc.factory.createCallExpression(
                                    program,
                                    undefined,
                                    [
                                        p.tsc.factory.createIdentifier("input"),
                                        p.tsc.factory.createStringLiteral(
                                            "$input",
                                        ),
                                        p.tsc.factory.createTrue(),
                                    ],
                                ),
                            ),
                        ),
                        StatementFactory.constant(p.tsc)(
                            "success",
                            p.tsc.factory.createStrictEquality(
                                p.tsc.factory.createNumericLiteral(0),
                                p.tsc.factory.createIdentifier("errors.length"),
                            ),
                        ),
                        p.tsc.factory.createReturnStatement(
                            p.tsc.factory.createAsExpression(
                                create_output(p.tsc),
                                TypeFactory.keyword(p.tsc)("any"),
                            ),
                        ),
                    ],
                    true,
                ),
            );
        };
}

const combine =
    (tsc: typeof ts) =>
    (equals: boolean) =>
    (importer: FunctionImporter): CheckerProgrammer.IConfig.Combiner =>
    (explore: CheckerProgrammer.IExplore) => {
        if (explore.tracable === false)
            return IsProgrammer.configure(tsc)({
                object: validate_object(tsc)(equals)(importer),
                numeric: true,
            })(importer).combiner(explore);

        const path: string = explore.postfix
            ? `_path + ${explore.postfix}`
            : "_path";
        return (logic) => (input, binaries, expected) =>
            logic === "and"
                ? binaries
                      .map((binary) =>
                          binary.combined
                              ? binary.expression
                              : tsc.factory.createLogicalOr(
                                    binary.expression,
                                    create_report_call(tsc)(
                                        explore.source === "top"
                                            ? tsc.factory.createTrue()
                                            : tsc.factory.createIdentifier(
                                                  "_exceptionable",
                                              ),
                                    )(
                                        tsc.factory.createIdentifier(path),
                                        expected,
                                        input,
                                    ),
                                ),
                      )
                      .reduce(tsc.factory.createLogicalAnd)
                : tsc.factory.createLogicalOr(
                      binaries
                          .map((binary) => binary.expression)
                          .reduce(tsc.factory.createLogicalOr),
                      create_report_call(tsc)(
                          explore.source === "top"
                              ? tsc.factory.createTrue()
                              : tsc.factory.createIdentifier("_exceptionable"),
                      )(tsc.factory.createIdentifier(path), expected, input),
                  );
    };

const validate_object =
    (tsc: typeof ts) => (equals: boolean) => (importer: FunctionImporter) =>
        check_object(tsc)({
            equals,
            undefined: true,
            assert: false,
            reduce: tsc.factory.createLogicalAnd,
            positive: tsc.factory.createTrue(),
            superfluous: (value) =>
                create_report_call(tsc)()(
                    tsc.factory.createAdd(
                        tsc.factory.createIdentifier("_path"),
                        tsc.factory.createCallExpression(
                            importer.use("join"),
                            undefined,
                            [tsc.factory.createIdentifier("key")],
                        ),
                    ),
                    "undefined",
                    value,
                ),
            halt: (expr) =>
                tsc.factory.createLogicalOr(
                    tsc.factory.createStrictEquality(
                        tsc.factory.createFalse(),
                        tsc.factory.createIdentifier("_exceptionable"),
                    ),
                    expr,
                ),
        })(importer);

const joiner =
    (tsc: typeof ts) =>
    (equals: boolean) =>
    (importer: FunctionImporter): CheckerProgrammer.IConfig.IJoiner => ({
        object: validate_object(tsc)(equals)(importer),
        array: (input, arrow) =>
            check_everything(tsc)(
                tsc.factory.createCallExpression(
                    IdentifierFactory.access(tsc)(input)("map"),
                    undefined,
                    [arrow],
                ),
            ),
        failure: (value, expected, explore) =>
            create_report_call(tsc)(
                explore?.from === "top"
                    ? tsc.factory.createTrue()
                    : tsc.factory.createIdentifier("_exceptionable"),
            )(
                tsc.factory.createIdentifier(
                    explore?.postfix ? `_path + ${explore.postfix}` : "_path",
                ),
                expected,
                value,
            ),
        tuple: (binaries) =>
            check_everything(tsc)(
                tsc.factory.createArrayLiteralExpression(binaries, true),
            ),
    });

const create_output = (tsc: typeof ts) =>
    tsc.factory.createObjectLiteralExpression(
        [
            tsc.factory.createShorthandPropertyAssignment("success"),
            tsc.factory.createShorthandPropertyAssignment("errors"),
            tsc.factory.createPropertyAssignment(
                "data",
                tsc.factory.createConditionalExpression(
                    tsc.factory.createIdentifier("success"),
                    undefined,
                    tsc.factory.createIdentifier("input"),
                    undefined,
                    tsc.factory.createIdentifier("undefined"),
                ),
            ),
        ],
        true,
    );

const create_report_call =
    (tsc: typeof ts) =>
    (exceptionable?: ts.Expression) =>
    (
        path: ts.Expression,
        expected: string,
        value: ts.Expression,
    ): ts.Expression =>
        tsc.factory.createCallExpression(
            tsc.factory.createIdentifier("$report"),
            undefined,
            [
                exceptionable ?? tsc.factory.createIdentifier("_exceptionable"),
                tsc.factory.createObjectLiteralExpression(
                    [
                        tsc.factory.createPropertyAssignment("path", path),
                        tsc.factory.createPropertyAssignment(
                            "expected",
                            tsc.factory.createStringLiteral(expected),
                        ),
                        tsc.factory.createPropertyAssignment("value", value),
                    ],
                    true,
                ),
            ],
        );
