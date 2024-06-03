import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/schemas/metadata/MetadataAlias.ts
var MetadataAlias = class _MetadataAlias {
  static {
    __name(this, "MetadataAlias");
  }
  name;
  value;
  description;
  jsDocTags;
  recursive;
  nullables;
  /* -----------------------------------------------------------
      CONSTRUCTORS
  ----------------------------------------------------------- */
  /**
  * @hidden
  */
  constructor(props) {
    this.name = props.name;
    this.value = props.value;
    this.description = props.description;
    this.jsDocTags = props.jsDocTags;
    this.recursive = props.recursive;
    this.nullables = props.nullables;
  }
  /**
  * @internal
  */
  static create(props) {
    return new _MetadataAlias(props);
  }
  /**
  * @internal
  */
  static _From_without_value(props) {
    return _MetadataAlias.create({
      name: props.name,
      value: null,
      description: props.description,
      recursive: props.recursive,
      jsDocTags: props.jsDocTags.slice(),
      nullables: props.nullables.slice()
    });
  }
  toJSON() {
    return {
      name: this.name,
      value: this.value.toJSON(),
      description: this.description,
      recursive: this.recursive,
      jsDocTags: this.jsDocTags.slice(),
      nullables: this.nullables.slice()
    };
  }
};

export {
  MetadataAlias
};
//# sourceMappingURL=chunk-T4RZTIDZ.mjs.map