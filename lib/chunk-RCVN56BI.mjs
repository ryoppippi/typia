import {
  AtomicPredicator
} from "./chunk-EPGYGA2I.mjs";
import {
  TransformerError
} from "./chunk-77LTYCTZ.mjs";
import {
  MetadataFactory
} from "./chunk-MNHXN4HB.mjs";
import {
  MetadataCollection
} from "./chunk-MX63JLF5.mjs";

// src/factories/JsonMetadataFactory.ts
var JsonMetadataFactory;
(function(JsonMetadataFactory2) {
  JsonMetadataFactory2.analyze = (method) => (checker, context) => (type) => {
    const collection = new MetadataCollection();
    const result = MetadataFactory.analyze(checker, context)({
      escape: true,
      constant: true,
      absorb: true,
      validate: JsonMetadataFactory2.validate
    })(collection)(type);
    if (result.success === false) throw TransformerError.from(method)(result.errors);
    return [
      collection,
      result.data
    ];
  };
  JsonMetadataFactory2.validate = (meta) => {
    const output = [];
    if (meta.atomics.some((a) => a.type === "bigint") || meta.constants.some((c) => c.type === "bigint")) output.push("JSON does not support bigint type.");
    if (meta.tuples.some((t) => t.type.elements.some((e) => e.isRequired() === false)) || meta.arrays.some((a) => a.type.value.isRequired() === false)) output.push("JSON does not support undefined type in array.");
    if (meta.maps.length) output.push("JSON does not support Map type.");
    if (meta.sets.length) output.push("JSON does not support Set type.");
    for (const native of meta.natives) if (AtomicPredicator.native(native) === false && native !== "Date") output.push(`JSON does not support ${native} type.`);
    return output;
  };
})(JsonMetadataFactory || (JsonMetadataFactory = {}));

export {
  JsonMetadataFactory
};
//# sourceMappingURL=chunk-RCVN56BI.mjs.map