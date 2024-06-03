"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUZ5BS2M3js = require('../chunk-UZ5BS2M3.js');

// src/functional/$zigzag.ts
function $zigzag_encode(value) {
  if (typeof value === "bigint") {
    if (value < BigInt(0)) {
      value = -value;
      return value * BigInt(2) - BigInt(1);
    }
    return value * BigInt(2);
  }
  if (value < 0) {
    value = -value;
    return value * 2 - 1;
  }
  return value * 2;
}
_chunkUZ5BS2M3js.__name.call(void 0, $zigzag_encode, "$zigzag_encode");
function $zigzag_decode(value) {
  if (typeof value === "bigint") {
    value = BigInt.asUintN(64, value);
    if (value & BigInt(1)) {
      return -(value + BigInt(1)) / BigInt(2);
    }
    return value / BigInt(2);
  }
  value = value >>> 0;
  if (value & 1) {
    return -(value + 1) / 2;
  }
  return value / 2;
}
_chunkUZ5BS2M3js.__name.call(void 0, $zigzag_decode, "$zigzag_decode");



exports.$zigzag_decode = $zigzag_decode; exports.$zigzag_encode = $zigzag_encode;
//# sourceMappingURL=$zigzag.js.map