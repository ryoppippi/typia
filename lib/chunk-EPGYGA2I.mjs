import {
  ArrayUtil
} from "./chunk-BDIZKMW2.mjs";

// src/programmers/helpers/AtomicPredicator.ts
var AtomicPredicator;
(function(AtomicPredicator2) {
  AtomicPredicator2.constant = (meta) => (name) => !ArrayUtil.has(meta.natives, (native) => native.toLowerCase() === name);
  AtomicPredicator2.atomic = (meta) => (name) => !ArrayUtil.has(meta.natives, (native) => native.toLowerCase() === name);
  AtomicPredicator2.native = (name) => LIKE.has(name.toLowerCase());
  AtomicPredicator2.template = (meta) => !ArrayUtil.has(meta.natives, (native) => native.toLowerCase() === "string");
})(AtomicPredicator || (AtomicPredicator = {}));
var LIKE = /* @__PURE__ */ new Set([
  "boolean",
  "bigint",
  "number",
  "string"
]);

export {
  AtomicPredicator
};
//# sourceMappingURL=chunk-EPGYGA2I.mjs.map