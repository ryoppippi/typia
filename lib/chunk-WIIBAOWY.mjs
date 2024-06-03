import {
  RandomProgrammer
} from "./chunk-XMPAKDMK.mjs";
import {
  TransformerError
} from "./chunk-77LTYCTZ.mjs";

// src/transformers/features/RandomTransformer.ts
import ts from "typescript";
var RandomTransformer;
(function(RandomTransformer2) {
  RandomTransformer2.transform = (project) => (modulo) => (expression) => {
    if (!expression.typeArguments?.[0]) throw new TransformerError({
      code: `typia.${modulo.getText()}`,
      message: "generic argument is not specified."
    });
    const node = expression.typeArguments[0];
    const type = project.checker.getTypeFromTypeNode(node);
    if (type.isTypeParameter()) throw new TransformerError({
      code: `typia.${modulo.getText()}`,
      message: "non-specified generic argument."
    });
    return ts.factory.createCallExpression(RandomProgrammer.write({
      ...project,
      options: {
        ...project.options,
        functional: false,
        numeric: false
      }
    })(modulo)()(type, node.getFullText().trim()), void 0, expression.arguments.length ? [
      expression.arguments[0]
    ] : void 0);
  };
})(RandomTransformer || (RandomTransformer = {}));

export {
  RandomTransformer
};
//# sourceMappingURL=chunk-WIIBAOWY.mjs.map