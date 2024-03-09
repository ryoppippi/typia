import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { ITypiaProject } from "../../transformers/ITypiaProject";

import { AssertProgrammer } from "../AssertProgrammer";
import { ProtobufEncodeProgrammer } from "./ProtobufEncodeProgrammer";

export namespace ProtobufAssertEncodeProgrammer {
  export const write =
    (project: ITypiaProject) =>
    (modulo: ts.LeftHandSideExpression) =>
    (type: ts.Type, name?: string, init?: ts.Expression): ts.ArrowFunction =>
      ts.factory.createArrowFunction(
        undefined,
        undefined,
        [
          IdentifierFactory.parameter("input", TypeFactory.keyword("any")),
          AssertProgrammer.Guardian.parameter(init),
        ],
        ts.factory.createTypeReferenceNode("Uint8Array"),
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
            "encode",
            ProtobufEncodeProgrammer.write({
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
              ts.factory.createIdentifier("encode"),
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
