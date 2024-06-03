import {
  TransformerError
} from "./chunk-77LTYCTZ.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/transformers/internal/GenericTransformer.ts
import ts from "typescript";
var GenericTransformer;
(function(GenericTransformer2) {
  GenericTransformer2.scalar = (method) => (programmer) => (project) => (modulo) => (expression) => {
    if (expression.arguments.length === 0) throw new TransformerError({
      code: `typia.${method}`,
      message: `no input value.`
    });
    const [type, node, generic] = expression.typeArguments && expression.typeArguments[0] ? [
      project.checker.getTypeFromTypeNode(expression.typeArguments[0]),
      expression.typeArguments[0],
      true
    ] : [
      project.checker.getTypeAtLocation(expression.arguments[0]),
      expression.arguments[0],
      false
    ];
    if (type.isTypeParameter()) throw new TransformerError({
      code: `typia.${method}`,
      message: `non-specified generic argument.`
    });
    return ts.factory.createCallExpression(programmer(project)(modulo)(type, generic ? node.getFullText().trim() : name(project.checker)(type)(node)), void 0, expression.arguments);
  };
  GenericTransformer2.factory = (method) => (programmer) => (project) => (modulo) => (expression) => {
    if (!expression.typeArguments?.[0]) throw new TransformerError({
      code: `typia.${method}`,
      message: `generic argument is not specified.`
    });
    const node = expression.typeArguments[0];
    const type = project.checker.getTypeFromTypeNode(node);
    if (type.isTypeParameter()) throw new TransformerError({
      code: `typia.${method}`,
      message: `non-specified generic argument.`
    });
    return programmer(project)(modulo)(type, node.getFullText().trim(), expression.arguments[0]);
  };
  const name = /* @__PURE__ */ __name((checker) => (type) => (node) => checker.typeToString(type, node, ts.TypeFormatFlags.NodeBuilderFlagsMask), "name");
})(GenericTransformer || (GenericTransformer = {}));

export {
  GenericTransformer
};
//# sourceMappingURL=chunk-UGUY3FFG.mjs.map