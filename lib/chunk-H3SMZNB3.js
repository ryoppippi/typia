"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/schemas/metadata/MetadataTupleType.ts
var MetadataTupleType = class _MetadataTupleType {
  static {
    _chunkUZ5BS2M3js.__name.call(void 0, this, "MetadataTupleType");
  }
  
  
  
  
  
  /**
  * @internal
  */
  
  /**
  * @internal
  */
  constructor(props) {
    this.name = props.name;
    this.elements = props.elements;
    this.index = props.index;
    this.recursive = props.recursive;
    this.nullables = props.nullables;
  }
  /**
  * @internal
  */
  static _From_without_elements(props) {
    return _MetadataTupleType.create({
      name: props.name,
      index: props.index,
      elements: null,
      recursive: props.recursive,
      nullables: props.nullables.slice()
    });
  }
  static create(props) {
    return new _MetadataTupleType(props);
  }
  isRest() {
    return this.elements.length > 0 && this.elements[this.elements.length - 1].rest !== null;
  }
  toJSON() {
    return {
      name: this.name,
      index: this.index,
      elements: this.elements.map((elem) => elem.toJSON()),
      recursive: this.recursive,
      nullables: this.nullables.slice()
    };
  }
};



exports.MetadataTupleType = MetadataTupleType;
//# sourceMappingURL=chunk-H3SMZNB3.js.map