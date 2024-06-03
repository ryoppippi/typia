import {
  MetadataConstantValue
} from "./chunk-AKMTTBJF.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/schemas/metadata/MetadataConstant.ts
var MetadataConstant = class _MetadataConstant {
  static {
    __name(this, "MetadataConstant");
  }
  type;
  values;
  constructor(props) {
    this.type = props.type;
    this.values = props.values.map(MetadataConstantValue.create);
  }
  static create(props) {
    return new _MetadataConstant(props);
  }
  static from(json) {
    return _MetadataConstant.create({
      type: json.type,
      values: json.values.map(MetadataConstantValue.from)
    });
  }
  toJSON() {
    return {
      type: this.type,
      values: this.values.map((value) => value.toJSON())
    };
  }
};

export {
  MetadataConstant
};
//# sourceMappingURL=chunk-NKBJZZWD.mjs.map