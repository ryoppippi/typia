import "../chunk-TX5EWQFG.mjs";

// src/functional/$dictionary.ts
var blackhole = {};
var $dictionary = (() => {
  const glob = typeof global === "object" && typeof global.process === "object" && typeof global.process.versions === "object" && typeof global.process.versions.node !== "undefined" ? global ?? blackhole : self ?? blackhole;
  return glob.__typia_custom_validator ??= /* @__PURE__ */ new Map();
})();
export {
  $dictionary
};
//# sourceMappingURL=$dictionary.mjs.map