import {
  GenericTransformer
} from "./chunk-UGUY3FFG.mjs";
import {
  NotationIsGeneralProgrammer
} from "./chunk-2TJ7FTK6.mjs";
import {
  StringUtil_exports
} from "./chunk-CLXKMTSC.mjs";

// src/transformers/features/notations/NotationIsGeneralTransformer.ts
var NotationIsGeneralTransformer;
(function(NotationIsGeneralTransformer2) {
  NotationIsGeneralTransformer2.transform = (rename) => GenericTransformer.scalar(`notations.is${StringUtil_exports.capitalize(rename.name)}`)((project) => (modulo) => NotationIsGeneralProgrammer.write(rename)(project)(modulo));
})(NotationIsGeneralTransformer || (NotationIsGeneralTransformer = {}));

export {
  NotationIsGeneralTransformer
};
//# sourceMappingURL=chunk-MIDZV3WM.mjs.map