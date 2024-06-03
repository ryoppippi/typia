import {
  MetadataConstant
} from "./chunk-NKBJZZWD.mjs";
import {
  MetadataConstantValue
} from "./chunk-AKMTTBJF.mjs";
import {
  ArrayUtil
} from "./chunk-BDIZKMW2.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/factories/internal/metadata/iterate_metadata_constant.ts
import ts from "typescript";
var iterate_metadata_constant = /* @__PURE__ */ __name((checker) => (options) => (meta, type) => {
  if (!options.constant) return false;
  const filter = /* @__PURE__ */ __name((flag) => (type.getFlags() & flag) !== 0, "filter");
  if (type.isLiteral()) {
    const value = typeof type.value === "object" ? BigInt(`${type.value.negative ? "-" : ""}${type.value.base10Value}`) : type.value;
    const constant = ArrayUtil.take(meta.constants, (elem) => elem.type === typeof value, () => MetadataConstant.create({
      type: typeof value,
      values: []
    }));
    ArrayUtil.add(constant.values, MetadataConstantValue.create({
      value,
      tags: []
    }), (a, b) => a.value === b.value);
    return true;
  } else if (filter(ts.TypeFlags.BooleanLiteral)) {
    const value = checker.typeToString(type) === "true";
    const constant = ArrayUtil.take(meta.constants, (elem) => elem.type === "boolean", () => MetadataConstant.create({
      type: "boolean",
      values: []
    }));
    ArrayUtil.add(constant.values, MetadataConstantValue.create({
      value,
      tags: []
    }), (a, b) => a.value === b.value);
    return true;
  }
  return false;
}, "iterate_metadata_constant");

export {
  iterate_metadata_constant
};
//# sourceMappingURL=chunk-TQMHAZYB.mjs.map