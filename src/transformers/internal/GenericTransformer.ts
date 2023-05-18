import type ts from "typescript/lib/tsclibrary";

import { TsNodeUtil } from "../../utils/TsNodeUtil";
import { TsTypeUtil } from "../../utils/TsTypeUtil";

import { IProject } from "../IProject";

export namespace GenericTransformer {
    export const scalar =
        (method: string) =>
        (
            programmer: (
                project: IProject,
            ) => (
                modulo: ts.LeftHandSideExpression,
            ) => (type: ts.Type, name: string) => ts.ArrowFunction,
        ) =>
        (p: IProject) =>
        (modulo: ts.LeftHandSideExpression) =>
        (expression: ts.CallExpression) => {
            // CHECK PARAMETER
            if (expression.arguments.length !== 1)
                throw new Error(`Error on typia.${method}(): no input value.`);

            // GET TYPE INFO
            const [type, node, generic]: [ts.Type, ts.Node, boolean] =
                expression.typeArguments && expression.typeArguments[0]
                    ? [
                          p.checker.getTypeFromTypeNode(
                              expression.typeArguments[0],
                          ),
                          expression.typeArguments[0],
                          true,
                      ]
                    : [
                          p.checker.getTypeAtLocation(expression.arguments[0]!),
                          expression.arguments[0]!,
                          false,
                      ];
            if (TsTypeUtil.isTypeParameter(p.tsc)(type))
                throw new Error(
                    `Error on typia.${method}(): non-specified generic argument.`,
                );

            // DO TRANSFORM
            return p.tsc.factory.createCallExpression(
                programmer(p)(modulo)(
                    type,
                    generic
                        ? TsNodeUtil.getFullText(p.tsc)(node).trim()
                        : name(p)(type)(node),
                ),
                undefined,
                [expression.arguments[0]!],
            );
        };

    export const factory =
        (method: string) =>
        (
            programmer: (
                project: IProject,
            ) => (
                modulo: ts.LeftHandSideExpression,
            ) => (type: ts.Type, name: string) => ts.ArrowFunction,
        ) =>
        (p: IProject) =>
        (modulo: ts.LeftHandSideExpression) =>
        (expression: ts.CallExpression) => {
            // CHECK GENERIC ARGUMENT EXISTENCE
            if (!expression.typeArguments?.[0])
                throw new Error(
                    `Error on typia.${method}(): generic argument is not specified.`,
                );

            // GET TYPE INFO
            const node: ts.TypeNode = expression.typeArguments[0];
            const type: ts.Type = p.checker.getTypeFromTypeNode(node);

            if (TsTypeUtil.isTypeParameter(p.tsc)(type))
                throw new Error(
                    `Error on typia.${method}(): non-specified generic argument.`,
                );

            // DO TRANSFORM
            return programmer(p)(modulo)(
                type,
                TsNodeUtil.getFullText(p.tsc)(node).trim(),
            );
        };

    const name =
        (project: IProject) =>
        (type: ts.Type) =>
        (node: ts.Node): string =>
            project.checker.typeToString(
                type,
                node,
                project.tsc.TypeFormatFlags.NodeBuilderFlagsMask,
            );
}
