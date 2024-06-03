"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }require('../chunk-UZ5BS2M3.js');

// src/functional/$dictionary.ts
var blackhole = {};
var $dictionary = (() => {
  const glob = typeof global === "object" && typeof global.process === "object" && typeof global.process.versions === "object" && typeof global.process.versions.node !== "undefined" ? _nullishCoalesce(global, () => ( blackhole)) : _nullishCoalesce(self, () => ( blackhole));
  return glob.__typia_custom_validator ??= /* @__PURE__ */ new Map();
})();


exports.$dictionary = $dictionary;
//# sourceMappingURL=$dictionary.js.map