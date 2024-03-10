import ts from "typescript";

import { TransformerError } from "../TransformerError";
import { ITypiaContext } from "../ITypiaContext";

export namespace GenericTransformer {
  export const scalar =
    (method: string) =>
    (
      programmer: (
        context: ITypiaContext,
      ) => (type: ts.Type, name: string) => ts.ArrowFunction,
    ) =>
    (context: ITypiaContext) =>
    (expression: ts.CallExpression) => {
      // CHECK PARAMETER
      if (expression.arguments.length === 0)
        throw new TransformerError({
          code: `typia.${method}`,
          message: `no input value.`,
        });

      // GET TYPE INFO
      const [type, node, generic]: [ts.Type, ts.Node, boolean] =
        expression.typeArguments && expression.typeArguments[0]
          ? [
              context.checker.getTypeFromTypeNode(expression.typeArguments[0]),
              expression.typeArguments[0],
              true,
            ]
          : [
              context.checker.getTypeAtLocation(expression.arguments[0]!),
              expression.arguments[0]!,
              false,
            ];
      if (type.isTypeParameter())
        throw new TransformerError({
          code: `typia.${method}`,
          message: `non-specified generic argument.`,
        });

      // DO TRANSFORM
      return ts.factory.createCallExpression(
        programmer(context)(
          type,
          generic
            ? node.getFullText().trim()
            : name(context.checker)(type)(node),
        ),
        undefined,
        expression.arguments,
      );
    };

  export const factory =
    (method: string) =>
    (
      programmer: (
        context: ITypiaContext,
      ) => (
        type: ts.Type,
        name: string,
        init?: ts.Expression,
      ) => ts.ArrowFunction,
    ) =>
    (context: ITypiaContext) =>
    (expression: ts.CallExpression) => {
      // CHECK GENERIC ARGUMENT EXISTENCE
      if (!expression.typeArguments?.[0])
        throw new TransformerError({
          code: `typia.${method}`,
          message: `generic argument is not specified.`,
        });

      // GET TYPE INFO
      const node: ts.TypeNode = expression.typeArguments[0];
      const type: ts.Type = context.checker.getTypeFromTypeNode(node);

      if (type.isTypeParameter())
        throw new TransformerError({
          code: `typia.${method}`,
          message: `non-specified generic argument.`,
        });

      // DO TRANSFORM
      return programmer(context)(
        type,
        node.getFullText().trim(),
        expression.arguments[0],
      );
    };

  const name =
    (checker: ts.TypeChecker) =>
    (type: ts.Type) =>
    (node: ts.Node): string =>
      checker.typeToString(type, node, ts.TypeFormatFlags.NodeBuilderFlagsMask);
}
