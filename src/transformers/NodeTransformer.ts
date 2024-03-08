import ts from "typescript";

import { CallExpressionTransformer } from "./CallExpressionTransformer";
import { IProject } from "./IProject";
import { ImportProgrammer } from "../programmers/ImportProgrammer";

export namespace NodeTransformer {
  export const transform =
    (project: IProject) =>
    (importer: ImportProgrammer) =>
    (expression: ts.Node): ts.Node | null =>
      ts.isCallExpression(expression) && expression.parent
        ? CallExpressionTransformer.transform(project)(importer)(expression)
        : expression;
}
