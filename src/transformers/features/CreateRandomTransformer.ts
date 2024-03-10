import ts from "typescript";

import { RandomProgrammer } from "../../programmers/RandomProgrammer";

import { ITypiaProject } from "../ITypiaProject";
import { TransformerError } from "../TransformerError";
import { ImportProgrammer } from "../../programmers/ImportProgrammer";
import { ITypiaContext } from "../ITypiaContext";

export namespace CreateRandomTransformer {
  export const transform =
    (context: ITypiaContext) =>
    (expression: ts.CallExpression): ts.Expression => {
      // CHECK GENERIC ARGUMENT EXISTENCE
      if (!expression.typeArguments?.[0])
        throw new TransformerError({
          code: "typia.createRandom",
          message: "generic argument is not specified.",
        });

      // GET TYPE INFO
      const node: ts.TypeNode = expression.typeArguments[0];
      const type: ts.Type = context.checker.getTypeFromTypeNode(node);

      if (type.isTypeParameter())
        throw new TransformerError({
          code: "typia.createRandom",
          message: "non-specified generic argument.",
        });

      // DO TRANSFORM
      return RandomProgrammer.write({
        ...context,
        options: {
          ...context.options,
          functional: false,
          numeric: false,
        },
      })(expression.arguments?.[0])(type, node.getFullText().trim());
    };
}
