"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkFWB2UBAKjs = require('./chunk-FWB2UBAK.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/functional/$ProtobufSizer.ts
var $ProtobufSizer = class {
  static {
    _chunkUZ5BS2M3js.__name.call(void 0, this, "$ProtobufSizer");
  }
  /**
  * Total length.
  */
  
  /**
  * Position stack.
  */
  
  /**
  * Variable length list.
  */
  
  /**
  * Variable length index stack.
  */
  
  constructor(length = 0) {
    this.len = length;
    this.pos = [];
    this.varlen = [];
    this.varlenidx = [];
  }
  bool() {
    this.len += 1;
  }
  int32(value) {
    if (value < 0) {
      this.len += 10;
    } else {
      this.varint32(value);
    }
  }
  sint32(value) {
    this.varint32(value << 1 ^ value >> 31);
  }
  uint32(value) {
    this.varint32(value);
  }
  int64(value) {
    this.varint64(typeof value === "number" ? BigInt(value) : value);
  }
  sint64(value) {
    if (typeof value === "number") value = BigInt(value);
    this.varint64(value << BigInt(1) ^ value >> BigInt(63));
  }
  uint64(value) {
    this.varint64(typeof value === "number" ? BigInt(value) : value);
  }
  // public fixed32(_value: number): void {
  //     this.len += 4;
  // }
  // public sfixed32(_value: number): void {
  //     this.len += 4;
  // }
  // public fixed64(_value: number | bigint): void {
  //     this.len += 8;
  // }
  // public sfixed64(_value: number | bigint): void {
  //     this.len += 8;
  // }
  float(_value) {
    this.len += 4;
  }
  double(_value) {
    this.len += 8;
  }
  bytes(value) {
    this.uint32(value.byteLength);
    this.len += value.byteLength;
  }
  string(value) {
    const len = _chunkFWB2UBAKjs.$strlen.call(void 0, value);
    this.varlen.push(len);
    this.uint32(len);
    this.len += len;
  }
  fork() {
    this.pos.push(this.len);
    this.varlenidx.push(this.varlen.length);
    this.varlen.push(0);
  }
  ldelim() {
    if (!(this.pos.length && this.varlenidx.length)) throw new Error("Error on typia.protobuf.encode(): missing fork() before ldelim() call.");
    const endPos = this.len;
    const startPos = this.pos.pop();
    const idx = this.varlenidx.pop();
    const len = endPos - startPos;
    this.varlen[idx] = len;
    this.uint32(len);
  }
  reset() {
    this.len = 0;
    this.pos.length = 0;
    this.varlen.length = 0;
    this.varlenidx.length = 0;
  }
  varint32(value) {
    this.len += value < 0 ? 10 : value < 128 ? 1 : value < 16384 ? 2 : value < 2097152 ? 3 : value < 268435456 ? 4 : 5;
  }
  varint64(val) {
    val = BigInt.asUintN(64, val);
    while (val > NX7F) {
      ++this.len;
      val = val >> ND07;
    }
    ++this.len;
  }
};
var ND07 = /* @__PURE__ */ BigInt(7);
var NX7F = /* @__PURE__ */ BigInt(127);



exports.$ProtobufSizer = $ProtobufSizer;
//# sourceMappingURL=chunk-55UCD3JG.js.map