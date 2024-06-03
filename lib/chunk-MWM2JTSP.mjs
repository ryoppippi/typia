import {
  MiscLiteralsProgrammer
} from "./chunk-J3GE22MO.mjs";
import {
  TransformerError
} from "./chunk-77LTYCTZ.mjs";

// src/transformers/features/misc/MiscLiteralsTransformer.ts
var MiscLiteralsTransformer;
(function(MiscLiteralsTransformer2) {
  MiscLiteralsTransformer2.transform = (project) => (expression) => {
    if (!expression.typeArguments?.[0]) throw new TransformerError({
      code: "typia.misc.literals",
      message: "generic argument is not specified."
    });
    const node = expression.typeArguments[0];
    const type = project.checker.getTypeFromTypeNode(node);
    if (type.isTypeParameter()) throw new TransformerError({
      code: "typia.misc.literals",
      message: "non-specified generic argument."
    });
    return MiscLiteralsProgrammer.write(project)(type);
  };
})(MiscLiteralsTransformer || (MiscLiteralsTransformer = {}));

export {
  MiscLiteralsTransformer
};
//# sourceMappingURL=chunk-MWM2JTSP.mjs.map