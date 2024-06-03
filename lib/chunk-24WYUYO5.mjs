import {
  __export,
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/functional/$FormDataReader/$FormDataReader.ts
var FormDataReader_exports = {};
__export(FormDataReader_exports, {
  array: () => array,
  bigint: () => bigint,
  blob: () => blob,
  boolean: () => boolean,
  file: () => file,
  number: () => number,
  string: () => string
});
var boolean = /* @__PURE__ */ __name((input) => input instanceof File ? input : input === null ? void 0 : input === "null" ? null : input.length === 0 ? true : input === "true" || input === "1" ? true : input === "false" || input === "0" ? false : input, "boolean");
var number = /* @__PURE__ */ __name((input) => input instanceof File ? input : !!input?.length ? input === "null" ? null : toNumber(input) : void 0, "number");
var bigint = /* @__PURE__ */ __name((input) => input instanceof File ? input : !!input?.length ? input === "null" ? null : toBigint(input) : void 0, "bigint");
var string = /* @__PURE__ */ __name((input) => input instanceof File ? input : input === null ? void 0 : input === "null" ? null : input, "string");
var array = /* @__PURE__ */ __name((input, alternative) => input.length ? input : alternative, "array");
var blob = /* @__PURE__ */ __name((input) => input instanceof Blob ? input : input === null ? void 0 : input === "null" ? null : input, "blob");
var file = /* @__PURE__ */ __name((input) => input instanceof File ? input : input === null ? void 0 : input === "null" ? null : input, "file");
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
  number,
  bigint,
  string,
  array,
  blob,
  file,
  FormDataReader_exports
};
//# sourceMappingURL=chunk-24WYUYO5.mjs.map