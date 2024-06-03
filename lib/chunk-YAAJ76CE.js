"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunkTYMSCBZGjs = require('./chunk-TYMSCBZG.js');


var _chunkUUZFPK7Njs = require('./chunk-UUZFPK7N.js');


var _chunkPK6R5VEJjs = require('./chunk-PK6R5VEJ.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/programmers/helpers/FunctionImporter.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var FunctionImporter = class {
  static {
    _chunkUZ5BS2M3js.__name.call(void 0, this, "FunctionImporter");
  }
  
  
  
  
  
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
    return _typescript2.default.factory.createIdentifier("$" + name);
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
      ].map((name) => _chunkTYMSCBZGjs.StatementFactory.constant("$" + name, _chunkUUZFPK7Njs.IdentifierFactory.access(_typescript2.default.factory.createParenthesizedExpression(_typescript2.default.factory.createAsExpression(modulo, _chunkPK6R5VEJjs.TypeFactory.keyword("any"))))(name))),
      ...includeUnions === true ? [
        ...this.unions_.values()
      ].map(([key, arrow]) => _chunkTYMSCBZGjs.StatementFactory.constant(key, arrow)) : []
    ];
  }
  declareUnions() {
    return [
      ...this.unions_.values()
    ].map(([key, arrow]) => _chunkTYMSCBZGjs.StatementFactory.constant(key, arrow));
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



exports.FunctionImporter = FunctionImporter;
//# sourceMappingURL=chunk-YAAJ76CE.js.map