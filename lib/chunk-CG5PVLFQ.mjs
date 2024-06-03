import {
  GenericTransformer
} from "./chunk-UGUY3FFG.mjs";
import {
  HttpParameterProgrammer
} from "./chunk-SVNYN7MY.mjs";

// src/transformers/features/http/HttpParameterTransformer.ts
var HttpParameterTransformer;
(function(HttpParameterTransformer2) {
  HttpParameterTransformer2.transform = GenericTransformer.scalar("http.parameter")((project) => (modulo) => HttpParameterProgrammer.write(project)(modulo));
})(HttpParameterTransformer || (HttpParameterTransformer = {}));

export {
  HttpParameterTransformer
};
//# sourceMappingURL=chunk-CG5PVLFQ.mjs.map