"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/schemas/metadata/MetadataTuple.ts
var MetadataTuple = class _MetadataTuple {
  static {
    _chunkUZ5BS2M3js.__name.call(void 0, this, "MetadataTuple");
  }
  
  
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



exports.MetadataTuple = MetadataTuple;
//# sourceMappingURL=chunk-SIGOR7QQ.js.map