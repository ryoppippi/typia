import {
  MetadataAtomic
} from "./chunk-X7O4QE24.mjs";
import {
  ArrayUtil
} from "./chunk-BDIZKMW2.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/factories/internal/metadata/emend_metadata_atomics.ts
var emend_metadata_atomics = /* @__PURE__ */ __name((meta) => {
  for (const a of meta.atomics) {
    if (is_not_pure(a)) continue;
    const index = meta.constants.findIndex((c) => c.type === a.type);
    if (index !== -1) meta.constants.splice(index, 1);
  }
  {
    const index = meta.constants.findIndex((c) => c.type === "boolean");
    if (index !== -1 && meta.constants[index].values.length === 2) {
      const temp = meta.constants.splice(index, 1)[0];
      ArrayUtil.take(meta.atomics, (a) => a.type === "boolean", () => MetadataAtomic.create({
        type: "boolean",
        tags: temp.values[0].tags ?? []
      }));
    }
  }
  if (meta.templates.length) {
    const atomic = meta.atomics.find((a) => a.type === "string");
    if (atomic !== void 0 && false === is_not_pure(atomic)) meta.templates.splice(0, meta.templates.length);
  }
}, "emend_metadata_atomics");
var is_not_pure = /* @__PURE__ */ __name((atomic) => atomic.tags.length !== 0 && atomic.tags.every((row) => row.length !== 0 && row.every((c) => !!c.validate?.length)), "is_not_pure");

export {
  emend_metadata_atomics
};
//# sourceMappingURL=chunk-CNLFSF6C.mjs.map