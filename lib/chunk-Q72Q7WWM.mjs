import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/schemas/metadata/MetadataTupleType.ts
var MetadataTupleType = class _MetadataTupleType {
  static {
    __name(this, "MetadataTupleType");
  }
  name;
  elements;
  index;
  recursive;
  nullables;
  /**
  * @internal
  */
  of_map;
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

export {
  MetadataTupleType
};
//# sourceMappingURL=chunk-Q72Q7WWM.mjs.map