import {
  GenericTransformer
} from "./chunk-UGUY3FFG.mjs";
import {
  HttpHeadersProgrammer
} from "./chunk-TWGRRBX4.mjs";

// src/transformers/features/http/CreateHttpHeadersTransformer.ts
var CreateHttpHeadersTransformer;
(function(CreateHttpHeadersTransformer2) {
  CreateHttpHeadersTransformer2.transform = GenericTransformer.factory("http.createHeaders")((project) => (modulo) => HttpHeadersProgrammer.write(project)(modulo));
})(CreateHttpHeadersTransformer || (CreateHttpHeadersTransformer = {}));

export {
  CreateHttpHeadersTransformer
};
//# sourceMappingURL=chunk-TEBFJA7X.mjs.map