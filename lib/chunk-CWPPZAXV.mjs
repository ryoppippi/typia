import {
  CallExpressionTransformer
} from "./chunk-F2YQ7JJT.mjs";

// src/transformers/NodeTransformer.ts
import ts from "typescript";
var NodeTransformer;
(function(NodeTransformer2) {
  NodeTransformer2.transform = (project) => (expression) => ts.isCallExpression(expression) && expression.parent ? CallExpressionTransformer.transform(project)(expression) : expression;
})(NodeTransformer || (NodeTransformer = {}));

export {
  NodeTransformer
};
//# sourceMappingURL=chunk-CWPPZAXV.mjs.map