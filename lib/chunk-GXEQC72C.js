"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6GHU2XFNjs = require('./chunk-6GHU2XFN.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/schemas/metadata/MetadataProperty.ts
var MetadataProperty = class _MetadataProperty {
  static {
    _chunkUZ5BS2M3js.__name.call(void 0, this, "MetadataProperty");
  }
  
  
  
  
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
      key: _chunk6GHU2XFNjs.Metadata.from(property.key, dict),
      value: _chunk6GHU2XFNjs.Metadata.from(property.value, dict),
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



exports.MetadataProperty = MetadataProperty;
//# sourceMappingURL=chunk-GXEQC72C.js.map