import {
  __export,
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/functional/$HeadersReader/$HeadersReader.ts
var HeadersReader_exports = {};
__export(HeadersReader_exports, {
  bigint: () => bigint,
  boolean: () => boolean,
  number: () => number,
  string: () => string
});
var boolean = /* @__PURE__ */ __name((value) => value !== void 0 ? value === "true" ? true : value === "false" ? false : value : void 0, "boolean");
var bigint = /* @__PURE__ */ __name((value) => value !== void 0 ? toBigint(value) : void 0, "bigint");
var number = /* @__PURE__ */ __name((value) => value !== void 0 ? toNumber(value) : void 0, "number");
var string = /* @__PURE__ */ __name((value) => value, "string");
var toBigint = /* @__PURE__ */ __name((str) => {
  try {
    return BigInt(str);
  } catch {
    return str;
  }
}, "toBigint");
var toNumber = /* @__PURE__ */ __name((str) => {
  const value = Number(str);
  return isNaN(value) ? str : value;
}, "toNumber");

export {
  boolean,
  bigint,
  number,
  string,
  HeadersReader_exports
};
//# sourceMappingURL=chunk-4VKMZH7Y.mjs.map