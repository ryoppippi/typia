import {
  __name
} from "../chunk-TX5EWQFG.mjs";

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
__name($zigzag_encode, "$zigzag_encode");
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
__name($zigzag_decode, "$zigzag_decode");
export {
  $zigzag_decode,
  $zigzag_encode
};
//# sourceMappingURL=$zigzag.mjs.map