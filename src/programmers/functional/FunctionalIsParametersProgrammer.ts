import ts from "typescript";

import { TypeFactory } from "../../factories/TypeFactory";

import { ITypiaProject } from "../../transformers/ITypiaProject";

import { IsProgrammer } from "../IsProgrammer";
import { FunctionalGeneralProgrammer } from "./internal/FunctionalGeneralProgrammer";
import { FunctionalIsFunctionProgrammer } from "./FunctionalIsFunctionProgrammer";
import { ImportProgrammer } from "../ImportProgrammer";
import { ITypiaContext } from "../../transformers/ITypiaContext";

export namespace FunctionalIsParametersProgrammer {
  export const write =
    (context: ITypiaContext) =>
    (equals: boolean) =>
    (
      expression: ts.Expression,
      declaration: ts.FunctionDeclaration,
    ): ts.ArrowFunction => {
      const { async } = FunctionalGeneralProgrammer.getReturnType(
        project.checker,
      )(declaration);
      return ts.factory.createArrowFunction(
        async
          ? [ts.factory.createModifier(ts.SyntaxKind.AsyncKeyword)]
          : undefined,
        undefined,
        declaration.parameters,
        FunctionalIsFunctionProgrammer.getReturnTypeNode(declaration, async),
        undefined,
        ts.factory.createBlock(
          [
            ...writeStatements(project)(modulo)(equals)(declaration),
            ts.factory.createReturnStatement(
              ts.factory.createCallExpression(
                expression,
                undefined,
                declaration.parameters.map((p) =>
                  ts.factory.createIdentifier(p.name.getText()),
                ),
              ),
            ),
          ],
          true,
        ),
      );
    };

  export const writeStatements =
    (project: ITypiaProject) =>
    (modulo: ts.LeftHandSideExpression) =>
    (equals: boolean) =>
    (declaration: ts.FunctionDeclaration): ts.Statement[] =>
      declaration.parameters
        .map((p) => [
          ts.factory.createIfStatement(
            ts.factory.createStrictEquality(
              ts.factory.createFalse(),
              ts.factory.createCallExpression(
                IsProgrammer.write(project)(modulo)(equals)(
                  project.checker.getTypeFromTypeNode(
                    p.type ?? TypeFactory.keyword("any"),
                  ),
                ),
                undefined,
                [ts.factory.createIdentifier(p.name.getText())],
              ),
            ),
            ts.factory.createReturnStatement(ts.factory.createNull()),
          ),
        ])
        .flat();
}
