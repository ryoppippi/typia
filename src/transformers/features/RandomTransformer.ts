import ts from "typescript";

import { RandomProgrammer } from "../../programmers/RandomProgrammer";

import { TransformerError } from "../TransformerError";
import { ITypiaContext } from "../ITypiaContext";

export namespace RandomTransformer {
  export const transform =
    (context: ITypiaContext) =>
    (expression: ts.CallExpression): ts.Expression => {
      // CHECK GENERIC ARGUMENT EXISTENCE
      if (!expression.typeArguments?.[0])
        throw new TransformerError({
          code: "typia.random",
          message: "generic argument is not specified.",
        });

      // GET TYPE INFO
      const node: ts.TypeNode = expression.typeArguments[0];
      const type: ts.Type = context.checker.getTypeFromTypeNode(node);

      if (type.isTypeParameter())
        throw new TransformerError({
          code: "typia.random",
          message: "non-specified generic argument.",
        });

      // DO TRANSFORM
      return ts.factory.createCallExpression(
        RandomProgrammer.write({
          ...context,
          options: {
            ...context.options,
            functional: false,
            numeric: false,
          },
        })(type, node.getFullText().trim()),
        undefined,
        expression.arguments.length ? [expression.arguments[0]!] : undefined,
      );
    };
}
