"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/TypeGuardError.ts
var TypeGuardError = class extends Error {
  static {
    _chunkUZ5BS2M3js.__name.call(void 0, this, "TypeGuardError");
  }
  
  
  
  
  constructor(props) {
    super(props.message || `Error on ${props.method}(): invalid type${props.path ? ` on ${props.path}` : ""}, expect to be ${props.expected}`);
    const proto = new.target.prototype;
    if (Object.setPrototypeOf) Object.setPrototypeOf(this, proto);
    else this.__proto__ = proto;
    this.method = props.method;
    this.path = props.path;
    this.expected = props.expected;
    this.value = props.value;
  }
};



exports.TypeGuardError = TypeGuardError;
//# sourceMappingURL=chunk-VYRJRZRT.js.map