import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/functional/$ProtobufWriter.ts
var $ProtobufWriter = class {
  static {
    __name(this, "$ProtobufWriter");
  }
  /**
  * Related sizer
  */
  sizer;
  /**
  * Current pointer.
  */
  ptr;
  /**
  * Protobuf buffer.
  */
  buf;
  /**
  * DataView for buffer.
  */
  view;
  /**
  * Index in varlen array from sizer.
  */
  varlenidx;
  constructor(sizer) {
    this.sizer = sizer;
    this.buf = new Uint8Array(sizer.len);
    this.view = new DataView(this.buf.buffer);
    this.ptr = 0;
    this.varlenidx = 0;
  }
  buffer() {
    return this.buf;
  }
  bool(value) {
    this.byte(value ? 1 : 0);
  }
  byte(value) {
    this.buf[this.ptr++] = value & 255;
  }
  int32(value) {
    if (value < 0) this.int64(value);
    else this.variant32(value >>> 0);
  }
  sint32(value) {
    this.variant32(value << 1 ^ value >> 31);
  }
  uint32(value) {
    this.variant32(value);
  }
  sint64(value) {
    value = BigInt(value);
    this.variant64(value << ND01 ^ value >> ND63);
  }
  int64(value) {
    this.variant64(BigInt(value));
  }
  uint64(value) {
    this.variant64(BigInt(value));
  }
  float(val) {
    this.view.setFloat32(this.ptr, val, true);
    this.ptr += 4;
  }
  double(val) {
    this.view.setFloat64(this.ptr, val, true);
    this.ptr += 8;
  }
  bytes(value) {
    this.uint32(value.byteLength);
    for (let i = 0; i < value.byteLength; i++) this.buf[this.ptr++] = value[i];
  }
  string(value) {
    const len = this.varlen();
    this.uint32(len);
    const binary = utf8.encode(value);
    for (let i = 0; i < binary.byteLength; i++) this.buf[this.ptr++] = binary[i];
  }
  fork() {
    this.uint32(this.varlen());
  }
  ldelim() {
  }
  finish() {
    return this.buf;
  }
  reset() {
    this.buf = new Uint8Array(this.sizer.len);
    this.view = new DataView(this.buf.buffer);
    this.ptr = 0;
    this.varlenidx = 0;
  }
  variant32(val) {
    while (val > 127) {
      this.buf[this.ptr++] = val & 127 | 128;
      val = val >>> 7;
    }
    this.buf[this.ptr++] = val;
  }
  variant64(val) {
    val = BigInt.asUintN(64, val);
    while (val > NX7F) {
      this.buf[this.ptr++] = Number(val & NX7F | NX80);
      val = val >> ND07;
    }
    this.buf[this.ptr++] = Number(val);
  }
  varlen() {
    return this.varlenidx >= this.sizer.varlen.length ? 0 : this.sizer.varlen[this.varlenidx++];
  }
};
var utf8 = /* @__PURE__ */ new TextEncoder();
var ND01 = /* @__PURE__ */ BigInt(1);
var ND07 = /* @__PURE__ */ BigInt(7);
var ND63 = /* @__PURE__ */ BigInt(63);
var NX7F = /* @__PURE__ */ BigInt(127);
var NX80 = /* @__PURE__ */ BigInt(128);

export {
  $ProtobufWriter
};
//# sourceMappingURL=chunk-WX5VYP4B.mjs.map