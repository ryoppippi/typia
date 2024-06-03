import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/schemas/metadata/MetadataObject.ts
var MetadataObject = class _MetadataObject {
  static {
    __name(this, "MetadataObject");
  }
  name;
  properties;
  description;
  jsDocTags;
  index;
  validated;
  recursive;
  nullables = [];
  /**
  * @internal
  */
  tagged_ = false;
  /**
  * @internal
  */
  literal_;
  /* -----------------------------------------------------------
      CONSTRUCTORS
  ----------------------------------------------------------- */
  /**
  * @hidden
  */
  constructor(props) {
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
};
(function(MetadataObject2) {
  MetadataObject2.intersects = (x, y) => x.properties.some((prop) => y.properties.find((oppo) => prop.key.getName() === oppo.key.getName()) !== void 0);
  MetadataObject2.covers = (x, y) => x.properties.length >= y.properties.length && x.properties.every((prop) => y.properties.find((oppo) => prop.key.getName() === oppo.key.getName()) !== void 0);
})(MetadataObject || (MetadataObject = {}));

export {
  MetadataObject
};
//# sourceMappingURL=chunk-JXCRSL4P.mjs.map