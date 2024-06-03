"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/functional/$ParameterReader/$ParameterReader.ts
var ParameterReader_exports = {};
_chunkUZ5BS2M3js.__export.call(void 0, ParameterReader_exports, {
  bigint: () => bigint,
  boolean: () => boolean,
  number: () => number,
  string: () => string
});
var boolean = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (value) => value !== "null" ? value === "true" || value === "1" ? true : value === "false" || value === "0" ? false : value : null, "boolean");
var bigint = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (value) => value !== "null" ? toBigint(value) : null, "bigint");
var number = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (value) => value !== "null" ? toNumber(value) : null, "number");
var string = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (value) => value !== "null" ? value : null, "string");
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







exports.boolean = boolean; exports.bigint = bigint; exports.number = number; exports.string = string; exports.ParameterReader_exports = ParameterReader_exports;
//# sourceMappingURL=chunk-E2JPPAS4.js.map