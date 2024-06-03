import {
  GenericTransformer
} from "./chunk-UGUY3FFG.mjs";
import {
  AssertProgrammer
} from "./chunk-7UTIIEMR.mjs";

// src/transformers/features/CreateAssertTransformer.ts
var CreateAssertTransformer;
(function(CreateAssertTransformer2) {
  CreateAssertTransformer2.transform = (props) => GenericTransformer.factory(props.equals ? props.guard ? "createAssertGuardEquals" : "createAssertEquals" : props.guard ? "createAssertGuard" : "createAssert")((project) => (modulo) => AssertProgrammer.write(project)(modulo)(props));
})(CreateAssertTransformer || (CreateAssertTransformer = {}));

export {
  CreateAssertTransformer
};
//# sourceMappingURL=chunk-T62GXR23.mjs.map