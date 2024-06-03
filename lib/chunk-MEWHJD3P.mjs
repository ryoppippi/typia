import {
  GenericTransformer
} from "./chunk-UGUY3FFG.mjs";
import {
  IsProgrammer
} from "./chunk-3IJJRDF3.mjs";

// src/transformers/features/IsTransformer.ts
var IsTransformer;
(function(IsTransformer2) {
  IsTransformer2.transform = (equals) => GenericTransformer.scalar(equals ? "equals" : "is")((project) => (modulo) => IsProgrammer.write(project)(modulo)(equals));
})(IsTransformer || (IsTransformer = {}));

export {
  IsTransformer
};
//# sourceMappingURL=chunk-MEWHJD3P.mjs.map