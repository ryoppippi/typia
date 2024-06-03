import {
  GenericTransformer
} from "./chunk-UGUY3FFG.mjs";
import {
  AssertProgrammer
} from "./chunk-7UTIIEMR.mjs";

// src/transformers/features/AssertTransformer.ts
var AssertTransformer;
(function(AssertTransformer2) {
  AssertTransformer2.transform = (props) => GenericTransformer.scalar(props.equals ? props.guard ? "assertGuardEquals" : "assertEquals" : props.guard ? "assertGuard" : "assert")((project) => (modulo) => AssertProgrammer.write(project)(modulo)(props));
})(AssertTransformer || (AssertTransformer = {}));

export {
  AssertTransformer
};
//# sourceMappingURL=chunk-PX36W445.mjs.map