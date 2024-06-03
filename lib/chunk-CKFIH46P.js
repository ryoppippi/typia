"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/programmers/helpers/disable_function_importer_declare.ts
var disable_function_importer_declare = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (importer) => disable(importer), "disable_function_importer_declare");
var disable = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (importer) => ({
  method: importer.method,
  empty: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => importer.empty(), "empty"),
  use: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (name) => importer.use(name), "use"),
  useLocal: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (name) => importer.useLocal(name), "useLocal"),
  hasLocal: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (name) => importer.hasLocal(name), "hasLocal"),
  declare: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (_modulo) => [], "declare"),
  declareUnions: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => [], "declareUnions"),
  increment: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => importer.increment(), "increment"),
  emplaceUnion: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (prefix, name, factory) => importer.emplaceUnion(prefix, name, factory), "emplaceUnion"),
  trace: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => importer.trace(), "trace")
}), "disable");



exports.disable_function_importer_declare = disable_function_importer_declare;
//# sourceMappingURL=chunk-CKFIH46P.js.map