import ts from "typescript";

import { ProtobufMessageProgrammer } from "../../../programmers/protobuf/ProtobufMessageProgrammer";

import { ITypiaProject } from "../../ITypiaProject";
import { TransformerError } from "../../TransformerError";

export namespace ProtobufMessageTransformer {
  export const transform =
    (project: ITypiaProject) =>
    (expression: ts.CallExpression): ts.Expression => {
      // CHECK GENERIC ARGUMENT EXISTENCE
      if (!expression.typeArguments || !expression.typeArguments[0])
        throw new TransformerError({
          code: "typia.protobuf.message",
          message: "generic argument is not specified.",
        });

      // GET TYPE INFO
      const type: ts.Type = project.checker.getTypeFromTypeNode(
        expression.typeArguments[0],
      );
      if (type.isTypeParameter())
        throw new TransformerError({
          code: "tyipa.protobuf.message",
          message: "non-specified generic argument.",
        });

      // DO TRANSFORM
      return ProtobufMessageProgrammer.write(project)(type);
    };
}
