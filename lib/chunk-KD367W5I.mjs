import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/programmers/helpers/disable_function_importer_declare.ts
var disable_function_importer_declare = /* @__PURE__ */ __name((importer) => disable(importer), "disable_function_importer_declare");
var disable = /* @__PURE__ */ __name((importer) => ({
  method: importer.method,
  empty: /* @__PURE__ */ __name(() => importer.empty(), "empty"),
  use: /* @__PURE__ */ __name((name) => importer.use(name), "use"),
  useLocal: /* @__PURE__ */ __name((name) => importer.useLocal(name), "useLocal"),
  hasLocal: /* @__PURE__ */ __name((name) => importer.hasLocal(name), "hasLocal"),
  declare: /* @__PURE__ */ __name((_modulo) => [], "declare"),
  declareUnions: /* @__PURE__ */ __name(() => [], "declareUnions"),
  increment: /* @__PURE__ */ __name(() => importer.increment(), "increment"),
  emplaceUnion: /* @__PURE__ */ __name((prefix, name, factory) => importer.emplaceUnion(prefix, name, factory), "emplaceUnion"),
  trace: /* @__PURE__ */ __name(() => importer.trace(), "trace")
}), "disable");

export {
  disable_function_importer_declare
};
//# sourceMappingURL=chunk-KD367W5I.mjs.map