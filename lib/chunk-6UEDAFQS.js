"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/utils/Singleton.ts
var Singleton = class {
  static {
    _chunkUZ5BS2M3js.__name.call(void 0, this, "Singleton");
  }
  
  
  constructor(closure) {
    this.closure_ = closure;
    this.value_ = NOT_MOUNTED_YET;
  }
  get(...args) {
    if (this.value_ === NOT_MOUNTED_YET) this.value_ = this.closure_(...args);
    return this.value_;
  }
};
var NOT_MOUNTED_YET = {};



exports.Singleton = Singleton;
//# sourceMappingURL=chunk-6UEDAFQS.js.map