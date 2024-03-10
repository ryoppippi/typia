import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { ValidateProgrammer } from "../ValidateProgrammer";
import { NotationGeneralProgrammer } from "./NotationGeneralProgrammer";
import { ITypiaContext } from "../../transformers/ITypiaContext";

export namespace NotationValidateGeneralProgrammer {
  export const write =
    (rename: (str: string) => string) =>
    (context: ITypiaContext) =>
    (type: ts.Type, name?: string) =>
      ts.factory.createArrowFunction(
        undefined,
        undefined,
        [IdentifierFactory.parameter("input", TypeFactory.keyword("any"))],
        ts.factory.createTypeReferenceNode(
          `typia.IValidation<${NotationGeneralProgrammer.returnType(rename)(
            name ?? TypeFactory.getFullName(context.checker)(type),
          )}>`,
        ),
        undefined,
        ts.factory.createBlock([
          StatementFactory.constant(
            "validate",
            ValidateProgrammer.write({
              ...context,
              options: {
                ...context.options,
                functional: false,
                numeric: true,
              },
            })(false)(type, name),
          ),
          StatementFactory.constant(
            "general",
            NotationGeneralProgrammer.write(rename)({
              ...context,
              options: {
                ...context.options,
                functional: false,
                numeric: false,
              },
            })(type, name),
          ),
          StatementFactory.constant(
            "output",
            ts.factory.createAsExpression(
              ts.factory.createCallExpression(
                ts.factory.createIdentifier("validate"),
                undefined,
                [ts.factory.createIdentifier("input")],
              ),
              TypeFactory.keyword("any"),
            ),
          ),
          ts.factory.createIfStatement(
            ts.factory.createIdentifier("output.success"),
            ts.factory.createExpressionStatement(
              ts.factory.createBinaryExpression(
                ts.factory.createIdentifier("output.data"),
                ts.SyntaxKind.EqualsToken,
                ts.factory.createCallExpression(
                  ts.factory.createIdentifier("general"),
                  undefined,
                  [ts.factory.createIdentifier("input")],
                ),
              ),
            ),
          ),
          ts.factory.createReturnStatement(
            ts.factory.createIdentifier("output"),
          ),
        ]),
      );
}
