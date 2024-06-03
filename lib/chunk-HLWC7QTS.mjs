import {
  TransformerError
} from "./chunk-77LTYCTZ.mjs";
import {
  LiteralFactory
} from "./chunk-NTPNM66C.mjs";
import {
  MetadataFactory
} from "./chunk-MNHXN4HB.mjs";
import {
  MetadataCollection
} from "./chunk-MX63JLF5.mjs";

// src/transformers/features/reflect/ReflectMetadataTransformer.ts
import ts from "typescript";
var ReflectMetadataTransformer;
(function(ReflectMetadataTransformer2) {
  ReflectMetadataTransformer2.transform = (project) => (_modulo) => (expression) => {
    if (!expression.typeArguments?.length) throw new TransformerError({
      code: "typia.metadata",
      message: "no generic argument."
    });
    const top = expression.typeArguments[0];
    if (!ts.isTupleTypeNode(top)) return expression;
    else if (top.elements.some((child) => !ts.isTypeNode(child))) return expression;
    const types = top.elements.map((child) => project.checker.getTypeFromTypeNode(child));
    if (types.some((t) => t.isTypeParameter())) throw new TransformerError({
      code: "typia.reflect.metadata",
      message: "non-specified generic argument(s)."
    });
    const collection = new MetadataCollection();
    const metadatas = types.map((type) => {
      const result = MetadataFactory.analyze(project.checker, project.context)({
        escape: true,
        constant: true,
        absorb: true
      })(collection)(type);
      if (result.success === false) throw TransformerError.from("typia.reflect.metadata")(result.errors);
      return result.data;
    });
    const app = {
      metadatas: metadatas.map((metadata) => metadata.toJSON()),
      components: collection.toJSON()
    };
    return LiteralFactory.generate(app);
  };
})(ReflectMetadataTransformer || (ReflectMetadataTransformer = {}));

export {
  ReflectMetadataTransformer
};
//# sourceMappingURL=chunk-HLWC7QTS.mjs.map