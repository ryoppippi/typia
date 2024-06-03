import {
  GenericTransformer
} from "./chunk-UGUY3FFG.mjs";
import {
  NotationValidateGeneralProgrammer
} from "./chunk-SO5DFOJQ.mjs";
import {
  StringUtil_exports
} from "./chunk-CLXKMTSC.mjs";

// src/transformers/features/notations/NotationValidateGeneralTransformer.ts
var NotationValidateGeneralTransformer;
(function(NotationValidateGeneralTransformer2) {
  NotationValidateGeneralTransformer2.transform = (rename) => GenericTransformer.scalar(`notations.validate${StringUtil_exports.capitalize(rename.name)}`)((project) => (modulo) => NotationValidateGeneralProgrammer.write(rename)(project)(modulo));
})(NotationValidateGeneralTransformer || (NotationValidateGeneralTransformer = {}));

export {
  NotationValidateGeneralTransformer
};
//# sourceMappingURL=chunk-CO7MWMXR.mjs.map