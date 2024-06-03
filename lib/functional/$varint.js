"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUZ5BS2M3js = require('../chunk-UZ5BS2M3.js');

// src/functional/$varint.ts
function EncodeVarNumber(dst, offset, value) {
  value = (value | 0) >>> 0;
  while (value > 127) {
    dst[offset++] = value & 127 | 128;
    value >>>= 7;
  }
  dst[offset++] = value;
  return offset;
}
_chunkUZ5BS2M3js.__name.call(void 0, EncodeVarNumber, "EncodeVarNumber");
function DecodeVarNumber(buf, offset) {
  let value = 0;
  let shift = 0;
  while (true) {
    const byte = buf[offset++];
    value |= (byte & 127) << shift;
    if (byte < 128) {
      break;
    }
    shift += 7;
  }
  return [
    value | 0,
    offset
  ];
}
_chunkUZ5BS2M3js.__name.call(void 0, DecodeVarNumber, "DecodeVarNumber");
function DecodeVarBigInt(buf, offset) {
  let value = BigInt(0);
  let shift = BigInt(0);
  while (true) {
    const byte = buf[offset++];
    value |= BigInt(byte & 127) << shift;
    if (byte < 128) {
      break;
    }
    shift += BigInt(7);
  }
  return [
    BigInt.asIntN(64, value),
    offset
  ];
}
_chunkUZ5BS2M3js.__name.call(void 0, DecodeVarBigInt, "DecodeVarBigInt");
function $varint_decode_i32(buf, offset) {
  const [v, o] = DecodeVarNumber(buf, offset);
  return [
    v,
    o
  ];
}
_chunkUZ5BS2M3js.__name.call(void 0, $varint_decode_i32, "$varint_decode_i32");
function $varint_decode_u32(buf, offset) {
  const [v, o] = DecodeVarNumber(buf, offset);
  return [
    v >>> 0,
    o
  ];
}
_chunkUZ5BS2M3js.__name.call(void 0, $varint_decode_u32, "$varint_decode_u32");
function $varint_decode_i64(buf, offset) {
  const [v, o] = DecodeVarBigInt(buf, offset);
  return [
    v,
    o
  ];
}
_chunkUZ5BS2M3js.__name.call(void 0, $varint_decode_i64, "$varint_decode_i64");
function $varint_decode_u64(buf, offset) {
  const [v, o] = DecodeVarBigInt(buf, offset);
  return [
    BigInt.asUintN(64, v),
    o
  ];
}
_chunkUZ5BS2M3js.__name.call(void 0, $varint_decode_u64, "$varint_decode_u64");
function EncodeVarBigInt(dst, offset, value) {
  value = BigInt.asUintN(64, value);
  while (value > BigInt(127)) {
    dst[offset++] = Number(value & BigInt(127)) | 128;
    value >>= BigInt(7);
  }
  dst[offset++] = Number(value);
  return offset;
}
_chunkUZ5BS2M3js.__name.call(void 0, EncodeVarBigInt, "EncodeVarBigInt");
function $varint_encode(dst, offset, value) {
  if (typeof value === "bigint") {
    offset = EncodeVarBigInt(dst, offset, value);
  } else {
    if (value < 0) {
      offset = EncodeVarBigInt(dst, offset, BigInt(value));
    } else {
      offset = EncodeVarNumber(dst, offset, value);
    }
  }
  return offset;
}
_chunkUZ5BS2M3js.__name.call(void 0, $varint_encode, "$varint_encode");






exports.$varint_decode_i32 = $varint_decode_i32; exports.$varint_decode_i64 = $varint_decode_i64; exports.$varint_decode_u32 = $varint_decode_u32; exports.$varint_decode_u64 = $varint_decode_u64; exports.$varint_encode = $varint_encode;
//# sourceMappingURL=$varint.js.map