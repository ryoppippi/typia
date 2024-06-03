import {
  GenericTransformer
} from "./chunk-UGUY3FFG.mjs";
import {
  NotationGeneralProgrammer
} from "./chunk-ZFHM7YDT.mjs";
import {
  StringUtil_exports
} from "./chunk-CLXKMTSC.mjs";

// src/transformers/features/notations/NotationCreateGeneralTransformer.ts
var NotationCreateGeneralTransformer;
(function(NotationCreateGeneralTransformer2) {
  NotationCreateGeneralTransformer2.transform = (rename) => GenericTransformer.factory(`notations.create${StringUtil_exports.capitalize(rename.name)}`)((project) => (modulo) => NotationGeneralProgrammer.write(rename)(project)(modulo));
})(NotationCreateGeneralTransformer || (NotationCreateGeneralTransformer = {}));

export {
  NotationCreateGeneralTransformer
};
//# sourceMappingURL=chunk-JSB5EIHG.mjs.map