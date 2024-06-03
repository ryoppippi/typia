import {
  GenericTransformer
} from "./chunk-UGUY3FFG.mjs";
import {
  NotationIsGeneralProgrammer
} from "./chunk-2TJ7FTK6.mjs";
import {
  StringUtil_exports
} from "./chunk-CLXKMTSC.mjs";

// src/transformers/features/notations/NotationCreateIsGeneralTransformer.ts
var NotationCreateIsGeneralTransformer;
(function(NotationCreateIsGeneralTransformer2) {
  NotationCreateIsGeneralTransformer2.transform = (rename) => GenericTransformer.factory(`notations.createIs${StringUtil_exports.capitalize(rename.name)}`)((project) => (modulo) => NotationIsGeneralProgrammer.write(rename)(project)(modulo));
})(NotationCreateIsGeneralTransformer || (NotationCreateIsGeneralTransformer = {}));

export {
  NotationCreateIsGeneralTransformer
};
//# sourceMappingURL=chunk-T3YQ4ZCT.mjs.map