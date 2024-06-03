import {
  Metadata
} from "./chunk-RD644GUB.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/schemas/metadata/MetadataProperty.ts
var MetadataProperty = class _MetadataProperty {
  static {
    __name(this, "MetadataProperty");
  }
  key;
  value;
  description;
  jsDocTags;
  /* -----------------------------------------------------------
      CONSTRUCTORS
  ----------------------------------------------------------- */
  /**
  * @hidden
  */
  constructor(props) {
    this.key = props.key;
    this.value = props.value;
    this.description = props.description;
    this.jsDocTags = props.jsDocTags;
  }
  /**
  * @internal
  */
  static create(props) {
    return new _MetadataProperty(props);
  }
  /**
  * @internal
  */
  static from(property, dict) {
    return _MetadataProperty.create({
      key: Metadata.from(property.key, dict),
      value: Metadata.from(property.value, dict),
      description: property.description,
      jsDocTags: property.jsDocTags.slice()
    });
  }
  toJSON() {
    return {
      key: this.key.toJSON(),
      value: this.value.toJSON(),
      description: this.description,
      jsDocTags: this.jsDocTags
    };
  }
};

export {
  MetadataProperty
};
//# sourceMappingURL=chunk-WJSELHNL.mjs.map