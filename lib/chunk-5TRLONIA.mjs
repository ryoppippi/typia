import {
  StatementFactory
} from "./chunk-RR3Z23V6.mjs";
import {
  IdentifierFactory
} from "./chunk-F63GUEWK.mjs";
import {
  TypeFactory
} from "./chunk-DDMKXAY2.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/programmers/helpers/FunctionImporter.ts
import ts from "typescript";
var FunctionImporter = class {
  static {
    __name(this, "FunctionImporter");
  }
  method;
  used_;
  local_;
  unions_;
  sequence_;
  constructor(method) {
    this.method = method;
    this.used_ = /* @__PURE__ */ new Set();
    this.local_ = /* @__PURE__ */ new Set();
    this.unions_ = /* @__PURE__ */ new Map();
    this.sequence_ = 0;
  }
  empty() {
    return this.used_.size === 0;
  }
  use(name) {
    this.used_.add(name);
    return ts.factory.createIdentifier("$" + name);
  }
  useLocal(name) {
    this.local_.add(name);
    return name;
  }
  hasLocal(name) {
    return this.local_.has(name);
  }
  declare(modulo, includeUnions = true) {
    return [
      ...[
        ...this.used_
      ].map((name) => StatementFactory.constant("$" + name, IdentifierFactory.access(ts.factory.createParenthesizedExpression(ts.factory.createAsExpression(modulo, TypeFactory.keyword("any"))))(name))),
      ...includeUnions === true ? [
        ...this.unions_.values()
      ].map(([key, arrow]) => StatementFactory.constant(key, arrow)) : []
    ];
  }
  declareUnions() {
    return [
      ...this.unions_.values()
    ].map(([key, arrow]) => StatementFactory.constant(key, arrow));
  }
  increment() {
    return ++this.sequence_;
  }
  emplaceUnion(prefix, name, factory) {
    const oldbie = this.unions_.get(name);
    if (oldbie) return oldbie[0];
    const index = this.unions_.size;
    const accessor = `${prefix}p${index}`;
    const tuple = [
      accessor,
      null
    ];
    this.unions_.set(name, tuple);
    tuple[1] = factory();
    return accessor;
  }
  trace() {
    console.log(...this.used_);
    console.log(...this.local_);
  }
};

export {
  FunctionImporter
};
//# sourceMappingURL=chunk-5TRLONIA.mjs.map