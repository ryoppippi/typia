import type ts from "typescript/lib/tsclibrary";

import { IdentifierFactory } from "../factories/IdentifierFactory";
import { StatementFactory } from "../factories/StatementFactory";
import { TypeFactory } from "../factories/TypeFactory";

import { IProject } from "../transformers/IProject";

import { CheckerProgrammer } from "./CheckerProgrammer";
import { IsProgrammer } from "./IsProgrammer";
import { FunctionImporter } from "./helpers/FunctionImporeter";
import { OptionPredicator } from "./helpers/OptionPredicator";
import { check_object } from "./internal/check_object";

export namespace AssertProgrammer {
    export const write =
        (p: IProject) =>
        (modulo: ts.LeftHandSideExpression) =>
        (equals: boolean) =>
        (type: ts.Type, name?: string) => {
            const importer: FunctionImporter = new FunctionImporter(p.tsc);
            const program: ts.ArrowFunction = CheckerProgrammer.write(p)({
                functors: "$ao",
                unioners: "$au",
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
                                create_guard_call(p.tsc)(importer)(
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
                combiner: combiner(p.tsc)(equals)(importer),
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
                    name ?? TypeFactory.getFullName(p)(type),
                ),
                undefined,
                p.tsc.factory.createBlock(
                    [
                        ...importer.declare(modulo),
                        StatementFactory.constant(p.tsc)(
                            "__is",
                            IsProgrammer.write(p)(modulo, true)(equals)(
                                type,
                                name ?? TypeFactory.getFullName(p)(type),
                            ),
                        ),
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
                            undefined,
                        ),
                        p.tsc.factory.createReturnStatement(
                            p.tsc.factory.createIdentifier(`input`),
                        ),
                    ],
                    true,
                ),
            );
        };

    const combiner =
        (tsc: typeof ts) =>
        (equals: boolean) =>
        (importer: FunctionImporter): CheckerProgrammer.IConfig.Combiner =>
        (explore: CheckerProgrammer.IExplore) => {
            if (explore.tracable === false)
                return IsProgrammer.configure(tsc)({
                    object: assert_object(tsc)(equals)(importer),
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
                                        create_guard_call(tsc)(importer)(
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
                    : (() => {
                          const addicted = binaries.slice();
                          if (
                              addicted[addicted.length - 1]!.combined === false
                          ) {
                              addicted.push({
                                  combined: true,
                                  expression: create_guard_call(tsc)(importer)(
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
                              });
                          }
                          return addicted
                              .map((b) => b.expression)
                              .reduce(tsc.factory.createLogicalOr);
                      })();
        };

    const assert_object =
        (tsc: typeof ts) => (equals: boolean) => (importer: FunctionImporter) =>
            check_object(tsc)({
                equals,
                assert: true,
                undefined: true,
                reduce: tsc.factory.createLogicalAnd,
                positive: tsc.factory.createTrue(),
                superfluous: (value) =>
                    create_guard_call(tsc)(importer)()(
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
            object: assert_object(tsc)(equals)(importer),
            array: (input, arrow) =>
                tsc.factory.createCallExpression(
                    IdentifierFactory.access(tsc)(input)("every"),
                    undefined,
                    [arrow],
                ),
            failure: (value, expected, explore) =>
                create_guard_call(tsc)(importer)(
                    explore?.from === "top"
                        ? tsc.factory.createTrue()
                        : tsc.factory.createIdentifier("_exceptionable"),
                )(
                    tsc.factory.createIdentifier(
                        explore?.postfix
                            ? `_path + ${explore.postfix}`
                            : "_path",
                    ),
                    expected,
                    value,
                ),
            full: equals
                ? undefined
                : (condition) => (input, expected, explore) =>
                      tsc.factory.createLogicalOr(
                          condition,
                          create_guard_call(tsc)(importer)(
                              explore.from === "top"
                                  ? tsc.factory.createTrue()
                                  : tsc.factory.createIdentifier(
                                        "_exceptionable",
                                    ),
                          )(
                              tsc.factory.createIdentifier("_path"),
                              expected,
                              input,
                          ),
                      ),
        });

    const create_guard_call =
        (tsc: typeof ts) =>
        (importer: FunctionImporter) =>
        (exceptionable?: ts.Expression) =>
        (
            path: ts.Expression,
            expected: string,
            value: ts.Expression,
        ): ts.Expression =>
            tsc.factory.createCallExpression(importer.use("guard"), undefined, [
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
            ]);
}
