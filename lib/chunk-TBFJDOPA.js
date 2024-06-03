"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }

var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/schemas/metadata/MetadataAtomic.ts
var MetadataAtomic = class _MetadataAtomic {
  static {
    _chunkUZ5BS2M3js.__name.call(void 0, this, "MetadataAtomic");
  }
  
  
  
  /**
  * @internal
  */
  constructor(props) {
    this.type = props.type;
    this.tags = props.tags;
  }
  static create(props) {
    return new _MetadataAtomic(props);
  }
  static from(json) {
    return _MetadataAtomic.create({
      type: json.type,
      tags: json.tags.map((row) => row.map((tag) => ({
        target: tag.target,
        name: tag.name,
        kind: tag.kind,
        value: typeof tag.value === "object" && _optionalChain([tag, 'access', _ => _.value, 'optionalAccess', _2 => _2.type]) === "bigint" && typeof tag.value.value === "string" ? BigInt(tag.value.value) : tag.value,
        validate: tag.validate,
        exclusive: tag.exclusive,
        schema: tag.schema
      })))
    });
  }
  getName() {
    return this.name_ ??= getName(this);
  }
  toJSON() {
    return {
      type: this.type,
      tags: this.tags.map((row) => row.map((tag) => ({
        target: tag.target,
        name: tag.name,
        kind: tag.kind,
        value: typeof tag.value === "bigint" ? {
          type: "bigint",
          value: tag.value.toString()
        } : tag.value,
        validate: tag.validate,
        exclusive: tag.exclusive,
        schema: this.type !== "bigint" ? tag.schema : void 0
      })))
    };
  }
};
var getName = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (obj) => {
  if (obj.tags.length === 0) return obj.type;
  else if (obj.tags.length === 1) {
    const str = [
      obj.type,
      ...obj.tags[0].map((t) => t.name)
    ].join(" & ");
    return `(${str})`;
  }
  const rows = obj.tags.map((row) => {
    const str = row.map((t) => t.name).join(" & ");
    return row.length === 1 ? str : `(${str})`;
  });
  return `(${obj.type} & (${rows.join(" | ")}))`;
}, "getName");



exports.MetadataAtomic = MetadataAtomic;
//# sourceMappingURL=chunk-TBFJDOPA.js.map