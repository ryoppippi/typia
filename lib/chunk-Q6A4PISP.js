"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/programmers/helpers/HttpMetadataUtil.ts
var HttpMetadataUtil;
(function(HttpMetadataUtil2) {
  HttpMetadataUtil2.atomics = (meta) => /* @__PURE__ */ new Set([
    ...meta.atomics.map((a) => a.type),
    ...meta.constants.map((c) => c.type),
    ...meta.templates.length ? [
      "string"
    ] : []
  ]);
  HttpMetadataUtil2.isUnion = (meta) => HttpMetadataUtil2.atomics(meta).size + meta.arrays.length + meta.tuples.length + meta.natives.length + meta.maps.length + meta.objects.length > 1;
})(HttpMetadataUtil || (HttpMetadataUtil = exports.HttpMetadataUtil = {}));



exports.HttpMetadataUtil = HttpMetadataUtil;
//# sourceMappingURL=chunk-Q6A4PISP.js.map