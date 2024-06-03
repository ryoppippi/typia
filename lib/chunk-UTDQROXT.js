"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/functional/$HeadersReader/$HeadersReader.ts
var HeadersReader_exports = {};
_chunkUZ5BS2M3js.__export.call(void 0, HeadersReader_exports, {
  bigint: () => bigint,
  boolean: () => boolean,
  number: () => number,
  string: () => string
});
var boolean = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (value) => value !== void 0 ? value === "true" ? true : value === "false" ? false : value : void 0, "boolean");
var bigint = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (value) => value !== void 0 ? toBigint(value) : void 0, "bigint");
var number = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (value) => value !== void 0 ? toNumber(value) : void 0, "number");
var string = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (value) => value, "string");
var toBigint = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (str) => {
  try {
    return BigInt(str);
  } catch (e) {
    return str;
  }
}, "toBigint");
var toNumber = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (str) => {
  const value = Number(str);
  return isNaN(value) ? str : value;
}, "toNumber");







exports.boolean = boolean; exports.bigint = bigint; exports.number = number; exports.string = string; exports.HeadersReader_exports = HeadersReader_exports;
//# sourceMappingURL=chunk-UTDQROXT.js.map