import {
  TypeFactory
} from "./chunk-DDMKXAY2.mjs";
import {
  Writable
} from "./chunk-QOF767UG.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/factories/internal/metadata/iterate_metadata_coalesce.ts
import ts from "typescript";
var iterate_metadata_coalesce = /* @__PURE__ */ __name((meta, type) => {
  const filter = /* @__PURE__ */ __name((flag) => (type.getFlags() & flag) !== 0, "filter");
  if (filter(ts.TypeFlags.Unknown) || filter(ts.TypeFlags.Any)) {
    Writable(meta).any = true;
    return true;
  } else if (filter(ts.TypeFlags.Null)) {
    Writable(meta).nullable = true;
    return true;
  } else if (filter(ts.TypeFlags.Undefined) || filter(ts.TypeFlags.Never) || filter(ts.TypeFlags.Void) || filter(ts.TypeFlags.VoidLike)) {
    Writable(meta).required = false;
    return true;
  } else if (TypeFactory.isFunction(type) === true) {
    Writable(meta).functional = true;
    return true;
  }
  return false;
}, "iterate_metadata_coalesce");

export {
  iterate_metadata_coalesce
};
//# sourceMappingURL=chunk-7Q3CFTLP.mjs.map