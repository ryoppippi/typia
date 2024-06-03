"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/schemas/metadata/MetadataArrayType.ts
var MetadataArrayType = class _MetadataArrayType {
  static {
    _chunkUZ5BS2M3js.__name.call(void 0, this, "MetadataArrayType");
  }
  
  
  
  
  
  /**
  * @hidden
  */
  constructor(props) {
    this.name = props.name;
    this.value = props.value;
    this.index = props.index;
    this.recursive = props.recursive;
    this.nullables = props.nullables;
  }
  /**
  * @internal
  */
  static _From_without_value(props) {
    return _MetadataArrayType.create({
      name: props.name,
      value: null,
      index: props.index,
      recursive: props.recursive,
      nullables: props.nullables
    });
  }
  /**
  * @internal
  */
  static create(props) {
    return new _MetadataArrayType(props);
  }
  toJSON() {
    return {
      name: this.name,
      value: this.value.toJSON(),
      nullables: this.nullables,
      recursive: this.recursive,
      index: this.index
    };
  }
};



exports.MetadataArrayType = MetadataArrayType;
//# sourceMappingURL=chunk-X72M22NM.js.map