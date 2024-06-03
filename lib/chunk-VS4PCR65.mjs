import {
  ProtobufMessageProgrammer
} from "./chunk-7TENO5ZW.mjs";
import {
  TransformerError
} from "./chunk-77LTYCTZ.mjs";

// src/transformers/features/protobuf/ProtobufMessageTransformer.ts
var ProtobufMessageTransformer;
(function(ProtobufMessageTransformer2) {
  ProtobufMessageTransformer2.transform = (project) => (_modulo) => (expression) => {
    if (!expression.typeArguments || !expression.typeArguments[0]) throw new TransformerError({
      code: "typia.protobuf.message",
      message: "generic argument is not specified."
    });
    const type = project.checker.getTypeFromTypeNode(expression.typeArguments[0]);
    if (type.isTypeParameter()) throw new TransformerError({
      code: "tyipa.protobuf.message",
      message: "non-specified generic argument."
    });
    return ProtobufMessageProgrammer.write(project)(type);
  };
})(ProtobufMessageTransformer || (ProtobufMessageTransformer = {}));

export {
  ProtobufMessageTransformer
};
//# sourceMappingURL=chunk-VS4PCR65.mjs.map