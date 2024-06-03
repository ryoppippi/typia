import {
  GenericTransformer
} from "./chunk-UGUY3FFG.mjs";
import {
  HttpHeadersProgrammer
} from "./chunk-TWGRRBX4.mjs";

// src/transformers/features/http/HttpHeadersTransformer.ts
var HttpHeadersTransformer;
(function(HttpHeadersTransformer2) {
  HttpHeadersTransformer2.transform = GenericTransformer.scalar("http.headers")((project) => (modulo) => HttpHeadersProgrammer.write(project)(modulo));
})(HttpHeadersTransformer || (HttpHeadersTransformer = {}));

export {
  HttpHeadersTransformer
};
//# sourceMappingURL=chunk-6FTNDMII.mjs.map