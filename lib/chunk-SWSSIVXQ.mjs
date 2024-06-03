import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/programmers/internal/application_v30_native.ts
var application_v30_native = /* @__PURE__ */ __name((components) => (name) => (nullable) => {
  if (name === "Blob" || name === "File") return {
    type: "string",
    format: "binary",
    nullable
  };
  const key = `${name}${nullable ? ".Nullable" : ""}`;
  if (components.schemas?.[key] === void 0) {
    components.schemas ??= {};
    components.schemas[key] ??= {
      type: "object",
      properties: {},
      nullable
    };
  }
  return {
    $ref: `#/components/schemas/${key}`
  };
}, "application_v30_native");

export {
  application_v30_native
};
//# sourceMappingURL=chunk-SWSSIVXQ.mjs.map