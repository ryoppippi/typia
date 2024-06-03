"use strict";Object.defineProperty(exports, "__esModule", {value: true}); var _class;

var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/schemas/metadata/MetadataObject.ts
var MetadataObject = (_class = class _MetadataObject {
  static {
    _chunkUZ5BS2M3js.__name.call(void 0, this, "MetadataObject");
  }
  
  
  
  
  
  
  
  __init() {this.nullables = []}
  /**
  * @internal
  */
  __init2() {this.tagged_ = false}
  /**
  * @internal
  */
  
  /* -----------------------------------------------------------
      CONSTRUCTORS
  ----------------------------------------------------------- */
  /**
  * @hidden
  */
  constructor(props) {;_class.prototype.__init.call(this);_class.prototype.__init2.call(this);
    this.name = props.name;
    this.properties = props.properties;
    this.description = props.description;
    this.jsDocTags = props.jsDocTags;
    this.index = props.index;
    this.validated = props.validated;
    this.recursive = props.recursive;
    this.nullables = props.nullables.slice();
    this.tagged_ = false;
  }
  /**
  * @internal
  */
  static create(props) {
    return new _MetadataObject(props);
  }
  /**
  * @internal
  */
  static _From_without_properties(obj) {
    return _MetadataObject.create({
      name: obj.name,
      properties: [],
      description: obj.description,
      jsDocTags: obj.jsDocTags,
      index: obj.index,
      validated: false,
      recursive: obj.recursive,
      nullables: obj.nullables.slice()
    });
  }
  /**
  * @internal
  */
  _Messagable() {
    return this.properties.length >= 1 && this.properties.every((p) => p.key.isSoleLiteral());
  }
  /**
  * @internal
  */
  _Is_simple(level = 0) {
    return this.recursive === false && this.properties.length < 10 && this.properties.every((property) => property.key.isSoleLiteral() && property.value.size() === 1 && property.value.isRequired() === true && property.value.nullable === false && (property.value.atomics.length === 1 || level < 1 && property.value.objects.length === 1 && property.value.objects[0]._Is_simple(level + 1)));
  }
  /**
  * @internal
  */
  _Is_literal() {
    return this.literal_ ??= (() => {
      if (this.recursive === true) return false;
      else if (this.name === "__type") return true;
      else if (this.name.startsWith("__type.o") === false) return false;
      const last = this.name.substr("__type.o".length);
      const value = Number(last);
      return isNaN(value) === false && Number.isInteger(value);
    })();
  }
  toJSON() {
    return {
      name: this.name,
      properties: this.properties.map((property) => property.toJSON()),
      description: this.description,
      jsDocTags: this.jsDocTags,
      index: this.index,
      recursive: this.recursive,
      nullables: this.nullables.slice()
    };
  }
}, _class);
(function(MetadataObject2) {
  MetadataObject2.intersects = (x, y) => x.properties.some((prop) => y.properties.find((oppo) => prop.key.getName() === oppo.key.getName()) !== void 0);
  MetadataObject2.covers = (x, y) => x.properties.length >= y.properties.length && x.properties.every((prop) => y.properties.find((oppo) => prop.key.getName() === oppo.key.getName()) !== void 0);
})(MetadataObject || (MetadataObject = exports.MetadataObject = {}));



exports.MetadataObject = MetadataObject;
//# sourceMappingURL=chunk-Q2DBVBM3.js.map