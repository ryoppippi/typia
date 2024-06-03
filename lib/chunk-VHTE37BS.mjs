import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/programmers/internal/application_v31_native.ts
var application_v31_native = /* @__PURE__ */ __name((components) => (name) => {
  if (name === "Blob" || name === "File") return {
    type: "string",
    format: "binary"
  };
  if (components.schemas?.[name] === void 0) {
    components.schemas ??= {};
    components.schemas[name] ??= {
      type: "object",
      properties: {}
    };
  }
  return {
    $ref: `#/components/schemas/${name}`
  };
}, "application_v31_native");

export {
  application_v31_native
};
//# sourceMappingURL=chunk-VHTE37BS.mjs.map