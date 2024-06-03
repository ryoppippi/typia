import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/schemas/metadata/MetadataArray.ts
var MetadataArray = class _MetadataArray {
  static {
    __name(this, "MetadataArray");
  }
  type;
  tags;
  name_;
  /**
  * @hidden
  */
  constructor(props) {
    this.type = props.type;
    this.tags = props.tags;
  }
  static create(props) {
    return new _MetadataArray(props);
  }
  getName() {
    return this.name_ ??= (() => {
      if (this.tags.length === 0) return this.type.name;
      else if (this.tags.length === 1) {
        const str = [
          this.type.name,
          ...this.tags[0].map((t) => t.name)
        ].join(" & ");
        return `(${str})`;
      }
      const rows = this.tags.map((row) => {
        const str = row.map((t) => t.name).join(" & ");
        return row.length === 1 ? str : `(${str})`;
      });
      return `(${this.type.name} & (${rows.join(" | ")}))`;
    })();
  }
  toJSON() {
    return {
      type: this.type.toJSON(),
      tags: this.tags.map((row) => row.slice())
    };
  }
};

export {
  MetadataArray
};
//# sourceMappingURL=chunk-HXFVCUNO.mjs.map