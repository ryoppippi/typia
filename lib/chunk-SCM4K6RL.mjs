import {
  GenericTransformer
} from "./chunk-UGUY3FFG.mjs";
import {
  NotationGeneralProgrammer
} from "./chunk-ZFHM7YDT.mjs";

// src/transformers/features/notations/NotationGeneralTransformer.ts
var NotationGeneralTransformer;
(function(NotationGeneralTransformer2) {
  NotationGeneralTransformer2.transform = (rename) => GenericTransformer.scalar(`notations.${rename.name}`)((project) => (modulo) => NotationGeneralProgrammer.write(rename)(project)(modulo));
})(NotationGeneralTransformer || (NotationGeneralTransformer = {}));

export {
  NotationGeneralTransformer
};
//# sourceMappingURL=chunk-SCM4K6RL.mjs.map