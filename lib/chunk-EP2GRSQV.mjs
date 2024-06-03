import {
  GenericTransformer
} from "./chunk-UGUY3FFG.mjs";
import {
  JsonStringifyProgrammer
} from "./chunk-CPQPG5GK.mjs";

// src/transformers/features/json/JsonStringifyTransformer.ts
var JsonStringifyTransformer;
(function(JsonStringifyTransformer2) {
  JsonStringifyTransformer2.transform = GenericTransformer.scalar("json.stringify")((project) => (modulo) => JsonStringifyProgrammer.write(project)(modulo));
})(JsonStringifyTransformer || (JsonStringifyTransformer = {}));

export {
  JsonStringifyTransformer
};
//# sourceMappingURL=chunk-EP2GRSQV.mjs.map