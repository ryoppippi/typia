import {
  GenericTransformer
} from "./chunk-UGUY3FFG.mjs";
import {
  IsProgrammer
} from "./chunk-3IJJRDF3.mjs";

// src/transformers/features/CreateIsTransformer.ts
var CreateIsTransformer;
(function(CreateIsTransformer2) {
  CreateIsTransformer2.transform = (equals) => GenericTransformer.factory(equals ? "createEquals" : "createIs")((project) => (modulo) => IsProgrammer.write(project)(modulo)(equals));
})(CreateIsTransformer || (CreateIsTransformer = {}));

export {
  CreateIsTransformer
};
//# sourceMappingURL=chunk-77QQCWST.mjs.map