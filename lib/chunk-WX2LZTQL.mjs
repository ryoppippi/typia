import {
  RandomProgrammer
} from "./chunk-XMPAKDMK.mjs";
import {
  TransformerError
} from "./chunk-77LTYCTZ.mjs";

// src/transformers/features/CreateRandomTransformer.ts
var CreateRandomTransformer;
(function(CreateRandomTransformer2) {
  CreateRandomTransformer2.transform = (project) => (modulo) => (expression) => {
    if (!expression.typeArguments?.[0]) throw new TransformerError({
      code: "typia.createRandom",
      message: "generic argument is not specified."
    });
    const node = expression.typeArguments[0];
    const type = project.checker.getTypeFromTypeNode(node);
    if (type.isTypeParameter()) throw new TransformerError({
      code: "typia.createRandom",
      message: "non-specified generic argument."
    });
    return RandomProgrammer.write({
      ...project,
      options: {
        ...project.options,
        functional: false,
        numeric: false
      }
    })(modulo)(expression.arguments?.[0])(type, node.getFullText().trim());
  };
})(CreateRandomTransformer || (CreateRandomTransformer = {}));

export {
  CreateRandomTransformer
};
//# sourceMappingURL=chunk-WX2LZTQL.mjs.map