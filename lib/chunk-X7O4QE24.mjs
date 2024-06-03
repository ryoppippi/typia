import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/schemas/metadata/MetadataAtomic.ts
var MetadataAtomic = class _MetadataAtomic {
  static {
    __name(this, "MetadataAtomic");
  }
  type;
  tags;
  name_;
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
        value: typeof tag.value === "object" && tag.value?.type === "bigint" && typeof tag.value.value === "string" ? BigInt(tag.value.value) : tag.value,
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
var getName = /* @__PURE__ */ __name((obj) => {
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

export {
  MetadataAtomic
};
//# sourceMappingURL=chunk-X7O4QE24.mjs.map