"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk56YW7YRRjs = require('./chunk-56YW7YRR.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/schemas/metadata/MetadataConstant.ts
var MetadataConstant = class _MetadataConstant {
  static {
    _chunkUZ5BS2M3js.__name.call(void 0, this, "MetadataConstant");
  }
  
  
  constructor(props) {
    this.type = props.type;
    this.values = props.values.map(_chunk56YW7YRRjs.MetadataConstantValue.create);
  }
  static create(props) {
    return new _MetadataConstant(props);
  }
  static from(json) {
    return _MetadataConstant.create({
      type: json.type,
      values: json.values.map(_chunk56YW7YRRjs.MetadataConstantValue.from)
    });
  }
  toJSON() {
    return {
      type: this.type,
      values: this.values.map((value) => value.toJSON())
    };
  }
};



exports.MetadataConstant = MetadataConstant;
//# sourceMappingURL=chunk-6P6Q2LJH.js.map