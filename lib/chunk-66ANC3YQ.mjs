import {
  __export,
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/functional/$QueryReader/$QueryReader.ts
var QueryReader_exports = {};
__export(QueryReader_exports, {
  array: () => array,
  bigint: () => bigint,
  boolean: () => boolean,
  number: () => number,
  params: () => params,
  string: () => string
});
var boolean = /* @__PURE__ */ __name((str) => str === null ? void 0 : str === "null" ? null : str.length === 0 ? true : str === "true" || str === "1" ? true : str === "false" || str === "0" ? false : str, "boolean");
var number = /* @__PURE__ */ __name((str) => !!str?.length ? str === "null" ? null : toNumber(str) : void 0, "number");
var bigint = /* @__PURE__ */ __name((str) => !!str?.length ? str === "null" ? null : toBigint(str) : void 0, "bigint");
var string = /* @__PURE__ */ __name((str) => str === null ? void 0 : str === "null" ? null : str, "string");
var params = /* @__PURE__ */ __name((input) => {
  if (typeof input === "string") {
    const index = input.indexOf("?");
    input = index === -1 ? "" : input.substring(index + 1);
    return new URLSearchParams(input);
  }
  return input;
}, "params");
var array = /* @__PURE__ */ __name((input, alternative) => input.length ? input : alternative, "array");
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
  params,
  array,
  QueryReader_exports
};
//# sourceMappingURL=chunk-66ANC3YQ.mjs.map