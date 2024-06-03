import {
  MetadataAtomic
} from "./chunk-X7O4QE24.mjs";
import {
  ArrayUtil
} from "./chunk-BDIZKMW2.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/factories/internal/metadata/iterate_metadata_atomic.ts
import ts from "typescript";
var same = /* @__PURE__ */ __name((type) => {
  if (type === null) return () => false;
  return (flag) => (type.getFlags() & flag) !== 0;
}, "same");
var iterate_metadata_atomic = /* @__PURE__ */ __name((meta, type) => {
  const filter = same(type);
  const check = /* @__PURE__ */ __name((info) => {
    if (filter(info.atomic) || filter(info.literal)) {
      ArrayUtil.add(meta.atomics, MetadataAtomic.create({
        type: info.name,
        tags: []
      }), (x, y) => x.type === y.type);
      return true;
    }
    return false;
  }, "check");
  return ATOMICS.some((info) => check(info));
}, "iterate_metadata_atomic");
var ATOMICS = [
  {
    name: "boolean",
    atomic: ts.TypeFlags.BooleanLike,
    literal: ts.TypeFlags.BooleanLiteral
  },
  {
    name: "number",
    atomic: ts.TypeFlags.NumberLike,
    literal: ts.TypeFlags.NumberLiteral
  },
  {
    name: "bigint",
    atomic: ts.TypeFlags.BigInt,
    literal: ts.TypeFlags.BigIntLiteral
  },
  {
    name: "string",
    atomic: ts.TypeFlags.StringLike,
    literal: ts.TypeFlags.StringLiteral
  }
];

export {
  iterate_metadata_atomic
};
//# sourceMappingURL=chunk-WRGBZPTJ.mjs.map