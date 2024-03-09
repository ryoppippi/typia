import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { ITypiaProject } from "../../transformers/ITypiaProject";

import { AssertProgrammer } from "../AssertProgrammer";
import { JsonStringifyProgrammer } from "./JsonStringifyProgrammer";

export namespace JsonAssertStringifyProgrammer {
  export const write =
    (project: ITypiaProject) =>
    (modulo: ts.LeftHandSideExpression) =>
    (type: ts.Type, name?: string, init?: ts.Expression) =>
      ts.factory.createArrowFunction(
        undefined,
        undefined,
        [
          IdentifierFactory.parameter("input", TypeFactory.keyword("any")),
          AssertProgrammer.Guardian.parameter(init),
        ],
        TypeFactory.keyword("string"),
        undefined,
        ts.factory.createBlock([
          StatementFactory.constant(
            "assert",
            AssertProgrammer.write({
              ...project,
              options: {
                ...project.options,
                functional: false,
                numeric: true,
              },
            })(modulo)(false)(type, name),
          ),
          StatementFactory.constant(
            "stringify",
            JsonStringifyProgrammer.write({
              ...project,
              options: {
                ...project.options,
                functional: false,
                numeric: false,
              },
            })(modulo)(type, name),
          ),
          ts.factory.createReturnStatement(
            ts.factory.createCallExpression(
              ts.factory.createIdentifier("stringify"),
              undefined,
              [
                ts.factory.createCallExpression(
                  ts.factory.createIdentifier("assert"),
                  undefined,
                  [
                    ts.factory.createIdentifier("input"),
                    AssertProgrammer.Guardian.identifier(),
                  ],
                ),
              ],
            ),
          ),
        ]),
      );
}
