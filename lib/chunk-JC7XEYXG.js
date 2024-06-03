"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/functional/$QueryReader/$QueryReader.ts
var QueryReader_exports = {};
_chunkUZ5BS2M3js.__export.call(void 0, QueryReader_exports, {
  array: () => array,
  bigint: () => bigint,
  boolean: () => boolean,
  number: () => number,
  params: () => params,
  string: () => string
});
var boolean = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (str) => str === null ? void 0 : str === "null" ? null : str.length === 0 ? true : str === "true" || str === "1" ? true : str === "false" || str === "0" ? false : str, "boolean");
var number = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (str) => !!_optionalChain([str, 'optionalAccess', _ => _.length]) ? str === "null" ? null : toNumber(str) : void 0, "number");
var bigint = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (str) => !!_optionalChain([str, 'optionalAccess', _2 => _2.length]) ? str === "null" ? null : toBigint(str) : void 0, "bigint");
var string = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (str) => str === null ? void 0 : str === "null" ? null : str, "string");
var params = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (input) => {
  if (typeof input === "string") {
    const index = input.indexOf("?");
    input = index === -1 ? "" : input.substring(index + 1);
    return new URLSearchParams(input);
  }
  return input;
}, "params");
var array = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (input, alternative) => input.length ? input : alternative, "array");
var toNumber = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (str) => {
  const value = Number(str);
  return isNaN(value) ? str : value;
}, "toNumber");
var toBigint = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (str) => {
  try {
    return BigInt(str);
  } catch (e) {
    return str;
  }
}, "toBigint");









exports.boolean = boolean; exports.number = number; exports.bigint = bigint; exports.string = string; exports.params = params; exports.array = array; exports.QueryReader_exports = QueryReader_exports;
//# sourceMappingURL=chunk-JC7XEYXG.js.map