"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }

var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/schemas/metadata/MetadataConstantValue.ts
var MetadataConstantValue = class _MetadataConstantValue {
  static {
    _chunkUZ5BS2M3js.__name.call(void 0, this, "MetadataConstantValue");
  }
  
  
  
  constructor(props) {
    this.value = props.value;
    this.tags = props.tags;
  }
  static create(props) {
    return new _MetadataConstantValue(props);
  }
  static from(json) {
    return _MetadataConstantValue.create({
      value: typeof json.value === "bigint" ? BigInt(json.value) : json.value,
      tags: json.tags
    });
  }
  getName() {
    return this.name_ ??= getName(this);
  }
  toJSON() {
    return {
      value: typeof this.value === "bigint" ? this.value.toString() : this.value,
      tags: this.tags
    };
  }
};
var getName = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (obj) => {
  const base = typeof obj.value === "string" ? JSON.stringify(obj.value) : obj.value.toString();
  if (!_optionalChain([obj, 'access', _ => _.tags, 'optionalAccess', _2 => _2.length])) return base;
  const rows = obj.tags.map((row) => {
    const str = row.map((t) => t.name).join(" & ");
    return row.length === 1 ? str : `(${str})`;
  });
  return `(${base} & (${rows.join(" | ")}))`;
}, "getName");



exports.MetadataConstantValue = MetadataConstantValue;
//# sourceMappingURL=chunk-56YW7YRR.js.map