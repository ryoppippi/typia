import {
  __export,
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/functional/$ParameterReader/$ParameterReader.ts
var ParameterReader_exports = {};
__export(ParameterReader_exports, {
  bigint: () => bigint,
  boolean: () => boolean,
  number: () => number,
  string: () => string
});
var boolean = /* @__PURE__ */ __name((value) => value !== "null" ? value === "true" || value === "1" ? true : value === "false" || value === "0" ? false : value : null, "boolean");
var bigint = /* @__PURE__ */ __name((value) => value !== "null" ? toBigint(value) : null, "bigint");
var number = /* @__PURE__ */ __name((value) => value !== "null" ? toNumber(value) : null, "number");
var string = /* @__PURE__ */ __name((value) => value !== "null" ? value : null, "string");
var toNumber = /* @__PURE__ */ __name((str) => {
  const value = Number(str);
  return isNaN(value) ? str : value;
}, "toNumber");
var toBigint = /* @__PURE__ */ __name((str) => {
  try {
    return BigInt(str);
  } catch {
    return str;
  }
}, "toBigint");

export {
  boolean,
  bigint,
  number,
  string,
  ParameterReader_exports
};
//# sourceMappingURL=chunk-HC4U3DLA.mjs.map