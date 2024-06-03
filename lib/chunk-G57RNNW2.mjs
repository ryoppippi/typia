import {
  GenericTransformer
} from "./chunk-UGUY3FFG.mjs";
import {
  NotationAssertGeneralProgrammer
} from "./chunk-VMJZKRUU.mjs";
import {
  StringUtil_exports
} from "./chunk-CLXKMTSC.mjs";

// src/transformers/features/notations/NotationAssertGeneralTransformer.ts
var NotationAssertGeneralTransformer;
(function(NotationAssertGeneralTransformer2) {
  NotationAssertGeneralTransformer2.transform = (rename) => GenericTransformer.scalar(`notations.assert${StringUtil_exports.capitalize(rename.name)}`)((project) => (modulo) => NotationAssertGeneralProgrammer.write(rename)(project)(modulo));
})(NotationAssertGeneralTransformer || (NotationAssertGeneralTransformer = {}));

export {
  NotationAssertGeneralTransformer
};
//# sourceMappingURL=chunk-G57RNNW2.mjs.map