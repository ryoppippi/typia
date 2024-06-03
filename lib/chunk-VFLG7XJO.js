"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/functional/$FormDataReader/$FormDataReader.ts
var FormDataReader_exports = {};
_chunkUZ5BS2M3js.__export.call(void 0, FormDataReader_exports, {
  array: () => array,
  bigint: () => bigint,
  blob: () => blob,
  boolean: () => boolean,
  file: () => file,
  number: () => number,
  string: () => string
});
var boolean = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (input) => input instanceof File ? input : input === null ? void 0 : input === "null" ? null : input.length === 0 ? true : input === "true" || input === "1" ? true : input === "false" || input === "0" ? false : input, "boolean");
var number = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (input) => input instanceof File ? input : !!_optionalChain([input, 'optionalAccess', _ => _.length]) ? input === "null" ? null : toNumber(input) : void 0, "number");
var bigint = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (input) => input instanceof File ? input : !!_optionalChain([input, 'optionalAccess', _2 => _2.length]) ? input === "null" ? null : toBigint(input) : void 0, "bigint");
var string = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (input) => input instanceof File ? input : input === null ? void 0 : input === "null" ? null : input, "string");
var array = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (input, alternative) => input.length ? input : alternative, "array");
var blob = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (input) => input instanceof Blob ? input : input === null ? void 0 : input === "null" ? null : input, "blob");
var file = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (input) => input instanceof File ? input : input === null ? void 0 : input === "null" ? null : input, "file");
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










exports.boolean = boolean; exports.number = number; exports.bigint = bigint; exports.string = string; exports.array = array; exports.blob = blob; exports.file = file; exports.FormDataReader_exports = FormDataReader_exports;
//# sourceMappingURL=chunk-VFLG7XJO.js.map