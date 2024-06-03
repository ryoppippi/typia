import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/TypeGuardError.ts
var TypeGuardError = class extends Error {
  static {
    __name(this, "TypeGuardError");
  }
  method;
  path;
  expected;
  value;
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

export {
  TypeGuardError
};
//# sourceMappingURL=chunk-ERALXJG2.mjs.map