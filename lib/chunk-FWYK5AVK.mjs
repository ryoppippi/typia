import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/utils/Singleton.ts
var Singleton = class {
  static {
    __name(this, "Singleton");
  }
  closure_;
  value_;
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

export {
  Singleton
};
//# sourceMappingURL=chunk-FWYK5AVK.mjs.map