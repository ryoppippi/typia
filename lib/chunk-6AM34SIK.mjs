import {
  GenericTransformer
} from "./chunk-UGUY3FFG.mjs";
import {
  NotationAssertGeneralProgrammer
} from "./chunk-VMJZKRUU.mjs";
import {
  StringUtil_exports
} from "./chunk-CLXKMTSC.mjs";

// src/transformers/features/notations/NotationCreateAssertGeneralTransformer.ts
var NotationCreateAssertGeneralTransformer;
(function(NotationCreateAssertGeneralTransformer2) {
  NotationCreateAssertGeneralTransformer2.transform = (rename) => GenericTransformer.factory(`notations.createAssert${StringUtil_exports.capitalize(rename.name)}`)((project) => (modulo) => NotationAssertGeneralProgrammer.write(rename)(project)(modulo));
})(NotationCreateAssertGeneralTransformer || (NotationCreateAssertGeneralTransformer = {}));

export {
  NotationCreateAssertGeneralTransformer
};
//# sourceMappingURL=chunk-6AM34SIK.mjs.map