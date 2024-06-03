import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/schemas/metadata/MetadataTuple.ts
var MetadataTuple = class _MetadataTuple {
  static {
    __name(this, "MetadataTuple");
  }
  type;
  tags;
  /**
  * @hidden
  */
  constructor(props) {
    this.type = props.type;
    this.tags = props.tags;
  }
  /**
  * @internal
  */
  static create(props) {
    return new _MetadataTuple(props);
  }
  toJSON() {
    return {
      type: this.type.toJSON(),
      tags: this.tags.map((row) => row.slice())
    };
  }
};

export {
  MetadataTuple
};
//# sourceMappingURL=chunk-4Q3FYUW7.mjs.map