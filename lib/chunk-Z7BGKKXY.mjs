import {
  GenericTransformer
} from "./chunk-UGUY3FFG.mjs";
import {
  NotationValidateGeneralProgrammer
} from "./chunk-SO5DFOJQ.mjs";
import {
  StringUtil_exports
} from "./chunk-CLXKMTSC.mjs";

// src/transformers/features/notations/NotationCreateValidateGeneralTransformer.ts
var NotationCreateValidateGeneralTransformer;
(function(NotationCreateValidateGeneralTransformer2) {
  NotationCreateValidateGeneralTransformer2.transform = (rename) => GenericTransformer.factory(`notations.createValidate${StringUtil_exports.capitalize(rename.name)}`)((project) => (modulo) => NotationValidateGeneralProgrammer.write(rename)(project)(modulo));
})(NotationCreateValidateGeneralTransformer || (NotationCreateValidateGeneralTransformer = {}));

export {
  NotationCreateValidateGeneralTransformer
};
//# sourceMappingURL=chunk-Z7BGKKXY.mjs.map