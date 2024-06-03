import {
  TransformerError
} from "./chunk-77LTYCTZ.mjs";
import {
  TypeFactory
} from "./chunk-DDMKXAY2.mjs";

// src/transformers/features/functional/FunctionalGenericTransformer.ts
var FunctionalGenericTransformer;
(function(FunctionalGenericTransformer2) {
  FunctionalGenericTransformer2.transform = (props) => (project) => (modulo) => (expression) => {
    if (expression.arguments.length === 0) throw new TransformerError({
      code: `typia.functional.${props.method}`,
      message: `no input value.`
    });
    const type = expression.typeArguments && expression.typeArguments[0] ? project.checker.getTypeFromTypeNode(expression.typeArguments[0]) : project.checker.getTypeAtLocation(expression.arguments[0]);
    if (TypeFactory.isFunction(type) === false) throw new TransformerError({
      code: `typia.functional.${props.method}`,
      message: `input value is not a function.`
    });
    return props.programmer(project)(modulo)(props.equals)(expression.arguments[0], type.symbol.declarations[0], expression.arguments[1]);
  };
})(FunctionalGenericTransformer || (FunctionalGenericTransformer = {}));

export {
  FunctionalGenericTransformer
};
//# sourceMappingURL=chunk-UZ57UDRO.mjs.map