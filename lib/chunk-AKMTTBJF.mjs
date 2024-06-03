import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/schemas/metadata/MetadataConstantValue.ts
var MetadataConstantValue = class _MetadataConstantValue {
  static {
    __name(this, "MetadataConstantValue");
  }
  value;
  tags;
  name_;
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
var getName = /* @__PURE__ */ __name((obj) => {
  const base = typeof obj.value === "string" ? JSON.stringify(obj.value) : obj.value.toString();
  if (!obj.tags?.length) return base;
  const rows = obj.tags.map((row) => {
    const str = row.map((t) => t.name).join(" & ");
    return row.length === 1 ? str : `(${str})`;
  });
  return `(${base} & (${rows.join(" | ")}))`;
}, "getName");

export {
  MetadataConstantValue
};
//# sourceMappingURL=chunk-AKMTTBJF.mjs.map