"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkNLCVBCAHjs = require('./chunk-NLCVBCAH.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/functional/$ProtobufReader.ts
var $ProtobufReader = class {
  static {
    _chunkUZ5BS2M3js.__name.call(void 0, this, "$ProtobufReader");
  }
  /**
  * Read buffer
  */
  
  /**
  * Read buffer pointer.
  */
  
  /**
  * DataView for buffer.
  */
  
  constructor(buf) {
    this.buf = buf;
    this.ptr = 0;
    this.view = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
  }
  index() {
    return this.ptr;
  }
  size() {
    return this.buf.length;
  }
  uint32() {
    return this.varint32();
  }
  int32() {
    return this.varint32();
  }
  sint32() {
    const value = this.varint32();
    return value >>> 1 ^ -(value & 1);
  }
  uint64() {
    return this.varint64();
  }
  int64() {
    return this.varint64();
  }
  sint64() {
    const value = this.varint64();
    return value >> N01 ^ -(value & N01);
  }
  bool() {
    return this.varint32() !== 0;
  }
  float() {
    const value = this.view.getFloat32(this.ptr, true);
    this.ptr += 4;
    return value;
  }
  double() {
    const value = this.view.getFloat64(this.ptr, true);
    this.ptr += 8;
    return value;
  }
  bytes() {
    const length = this.uint32();
    const from = this.ptr;
    this.ptr += length;
    return this.buf.subarray(from, from + length);
  }
  string() {
    return utf8.decode(this.bytes());
  }
  skip(length) {
    if (length === 0) while (this.u8() & 128) ;
    else {
      if (this.index() + length > this.size()) throw new Error("Error on typia.protobuf.decode(): buffer overflow.");
      this.ptr += length;
    }
  }
  skipType(wireType) {
    switch (wireType) {
      case _chunkNLCVBCAHjs.ProtobufWire.VARIANT:
        this.skip(0);
        break;
      case _chunkNLCVBCAHjs.ProtobufWire.I64:
        this.skip(8);
        break;
      case _chunkNLCVBCAHjs.ProtobufWire.LEN:
        this.skip(this.uint32());
        break;
      case _chunkNLCVBCAHjs.ProtobufWire.START_GROUP:
        while ((wireType = this.uint32() & 7) !== _chunkNLCVBCAHjs.ProtobufWire.END_GROUP) this.skipType(wireType);
        break;
      case _chunkNLCVBCAHjs.ProtobufWire.I32:
        this.skip(4);
        break;
      default:
        throw new Error(`Invalid wire type ${wireType} at offset ${this.ptr}.`);
    }
  }
  varint32() {
    let loaded;
    let value;
    value = (loaded = this.u8()) & 127;
    if (loaded < 128) return value;
    value |= ((loaded = this.u8()) & 127) << 7;
    if (loaded < 128) return value;
    value |= ((loaded = this.u8()) & 127) << 14;
    if (loaded < 128) return value;
    value |= ((loaded = this.u8()) & 127) << 21;
    if (loaded < 128) return value;
    value |= ((loaded = this.u8()) & 15) << 28;
    if (loaded < 128) return value;
    if (this.u8() < 128) return value;
    if (this.u8() < 128) return value;
    if (this.u8() < 128) return value;
    if (this.u8() < 128) return value;
    if (this.u8() < 128) return value;
    return value;
  }
  varint64() {
    let loaded;
    let value;
    value = (loaded = this.u8n()) & N7F;
    if (loaded < N80) return value;
    value |= ((loaded = this.u8n()) & N7F) << BigInt(7);
    if (loaded < N80) return value;
    value |= ((loaded = this.u8n()) & N7F) << BigInt(14);
    if (loaded < N80) return value;
    value |= ((loaded = this.u8n()) & N7F) << BigInt(21);
    if (loaded < N80) return value;
    value |= ((loaded = this.u8n()) & N7F) << BigInt(28);
    if (loaded < N80) return value;
    value |= ((loaded = this.u8n()) & N7F) << BigInt(35);
    if (loaded < N80) return value;
    value |= ((loaded = this.u8n()) & N7F) << BigInt(42);
    if (loaded < N80) return value;
    value |= ((loaded = this.u8n()) & N7F) << BigInt(49);
    if (loaded < N80) return value;
    value |= ((loaded = this.u8n()) & N7F) << BigInt(56);
    if (loaded < N80) return value;
    value |= (this.u8n() & N01) << BigInt(63);
    return BigInt.asIntN(64, value);
  }
  u8() {
    return this.view.getUint8(this.ptr++);
  }
  u8n() {
    return BigInt(this.u8());
  }
};
var utf8 = /* @__PURE__ */ new TextDecoder();
var N01 = /* @__PURE__ */ BigInt(1);
var N7F = /* @__PURE__ */ BigInt(127);
var N80 = /* @__PURE__ */ BigInt(128);



exports.$ProtobufReader = $ProtobufReader;
//# sourceMappingURL=chunk-G3RYQDGJ.js.map