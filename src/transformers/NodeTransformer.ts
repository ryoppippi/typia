import type ts from "typescript/lib/tsclibrary";

import { CallExpressionTransformer } from "./CallExpressionTransformer";
import { IProject } from "./IProject";

export namespace NodeTransformer {
    export const transform =
        (project: IProject) =>
        (expression: ts.Node): ts.Node =>
            project.tsc.isCallExpression(expression)
                ? CallExpressionTransformer.transform(project)(expression)
                : expression;
}
