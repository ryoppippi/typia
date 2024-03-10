import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { IsProgrammer } from "../IsProgrammer";
import { NotationGeneralProgrammer } from "./NotationGeneralProgrammer";
import { ITypiaContext } from "../../transformers/ITypiaContext";

export namespace NotationIsGeneralProgrammer {
  export const write =
    (rename: (str: string) => string) =>
    (context: ITypiaContext) =>
    (type: ts.Type, name?: string) =>
      ts.factory.createArrowFunction(
        undefined,
        undefined,
        [IdentifierFactory.parameter("input", TypeFactory.keyword("any"))],
        ts.factory.createUnionTypeNode([
          ts.factory.createTypeReferenceNode(
            NotationGeneralProgrammer.returnType(rename)(
              name ?? TypeFactory.getFullName(context.checker)(type),
            ),
          ),
          ts.factory.createLiteralTypeNode(ts.factory.createNull()),
        ]),
        undefined,
        ts.factory.createBlock([
          StatementFactory.constant(
            "is",
            IsProgrammer.write(context)(false)(type, name),
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
          ts.factory.createIfStatement(
            ts.factory.createPrefixUnaryExpression(
              ts.SyntaxKind.ExclamationToken,
              ts.factory.createCallExpression(
                ts.factory.createIdentifier("is"),
                undefined,
                [ts.factory.createIdentifier("input")],
              ),
            ),
            ts.factory.createReturnStatement(ts.factory.createNull()),
          ),
          StatementFactory.constant(
            "output",
            ts.factory.createCallExpression(
              ts.factory.createIdentifier("general"),
              undefined,
              [ts.factory.createIdentifier("input")],
            ),
          ),
          ts.factory.createReturnStatement(
            ts.factory.createIdentifier("output"),
          ),
        ]),
      );
}
