import ts from "typescript";

import { StatementFactory } from "../../factories/StatementFactory";

import { IProject } from "../../transformers/IProject";

import { StringUtil } from "../../utils/StringUtil";

import { IsProgrammer } from "../IsProgrammer";
import { FunctionalIsFunctionProgrammer } from "./FunctionalIsFunctionProgrammer";
import { FunctionalGeneralProgrammer } from "./internal/FunctionalGeneralProgrammer";

export namespace FunctionalIsReturnProgrammer {
  export const write =
    (project: IProject) =>
    (modulo: ts.LeftHandSideExpression) =>
    (equals: boolean) =>
    (
      expression: ts.Expression,
      declaration: ts.FunctionDeclaration,
    ): ts.ArrowFunction => {
      const { async, statements } = writeStatements(project)(modulo)(equals)(
        expression,
        declaration,
      );
      return ts.factory.createArrowFunction(
        async
          ? [ts.factory.createModifier(ts.SyntaxKind.AsyncKeyword)]
          : undefined,
        undefined,
        declaration.parameters,
        FunctionalIsFunctionProgrammer.getReturnTypeNode(declaration, async),
        undefined,
        ts.factory.createBlock(statements, true),
      );
    };

  export const writeStatements =
    (project: IProject) =>
    (modulo: ts.LeftHandSideExpression) =>
    (equals: boolean) =>
    (
      expression: ts.Expression,
      declaration: ts.FunctionDeclaration,
    ): {
      async: boolean;
      statements: ts.Statement[];
    } => {
      const { type, async } = FunctionalGeneralProgrammer.getReturnType(
        project.checker,
      )(declaration);
      const caller: ts.CallExpression = ts.factory.createCallExpression(
        expression,
        undefined,
        declaration.parameters.map((p) =>
          ts.factory.createIdentifier(p.name.getText()),
        ),
      );

      const name: string = StringUtil.escapeDuplicate(
        declaration.parameters.map((p) => p.name.getText()),
      )("result");
      const statements: ts.Statement[] = [
        StatementFactory.constant(
          name,
          async ? ts.factory.createAwaitExpression(caller) : caller,
        ),
        ts.factory.createReturnStatement(
          ts.factory.createConditionalExpression(
            ts.factory.createCallExpression(
              IsProgrammer.write(project)(modulo)(equals)(type),
              undefined,
              [ts.factory.createIdentifier(name)],
            ),
            undefined,
            ts.factory.createIdentifier(name),
            undefined,
            ts.factory.createNull(),
          ),
        ),
      ];
      return { async, statements };
    };
}
