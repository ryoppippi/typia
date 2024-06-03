import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/programmers/internal/application_plugin.ts
var application_plugin = /* @__PURE__ */ __name((schema, tags) => {
  const plugins = tags.map((row) => row.filter((t) => t.schema !== void 0)).filter((row) => row.length !== 0);
  if (plugins.length === 0) return [
    schema
  ];
  return plugins.map((row) => {
    const base = {
      ...schema
    };
    for (const tag of row) Object.assign(base, tag.schema);
    return base;
  });
}, "application_plugin");

export {
  application_plugin
};
//# sourceMappingURL=chunk-3NPBR36C.mjs.map