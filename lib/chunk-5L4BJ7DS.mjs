import {
  MetadataProperty
} from "./chunk-WJSELHNL.mjs";
import {
  Metadata
} from "./chunk-RD644GUB.mjs";
import {
  MetadataAlias
} from "./chunk-T4RZTIDZ.mjs";
import {
  MetadataTupleType
} from "./chunk-Q72Q7WWM.mjs";
import {
  MetadataArrayType
} from "./chunk-S6FVASNO.mjs";
import {
  MetadataObject
} from "./chunk-JXCRSL4P.mjs";
import {
  Writable
} from "./chunk-QOF767UG.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/schemas/metadata/MetadataComponents.ts
var MetadataComponents = class _MetadataComponents {
  static {
    __name(this, "MetadataComponents");
  }
  aliases;
  objects;
  arrays;
  tuples;
  dictionary;
  constructor(props) {
    this.aliases = props.aliases;
    this.objects = props.objects;
    this.arrays = props.arrays;
    this.tuples = props.tuples;
    this.dictionary = props.dictionary;
  }
  static from(json) {
    const dictionary = {
      objects: new Map(json.objects.map((obj) => [
        obj.name,
        MetadataObject._From_without_properties(obj)
      ])),
      aliases: new Map(json.aliases.map((alias) => [
        alias.name,
        MetadataAlias._From_without_value(alias)
      ])),
      arrays: new Map(json.arrays.map((arr) => [
        arr.name,
        MetadataArrayType._From_without_value(arr)
      ])),
      tuples: new Map(json.tuples.map((tpl) => [
        tpl.name,
        MetadataTupleType._From_without_elements(tpl)
      ]))
    };
    for (const obj of json.objects) dictionary.objects.get(obj.name).properties.push(...obj.properties.map((prop) => MetadataProperty.from(prop, dictionary)));
    for (const alias of json.aliases) Writable(dictionary.aliases.get(alias.name)).value = Metadata.from(alias.value, dictionary);
    for (const array of json.arrays) Writable(dictionary.arrays.get(array.name)).value = Metadata.from(array.value, dictionary);
    for (const tuple of json.tuples) Writable(dictionary.tuples.get(tuple.name)).elements = tuple.elements.map((elem) => Metadata.from(elem, dictionary));
    return new _MetadataComponents({
      aliases: [
        ...dictionary.aliases.values()
      ],
      objects: [
        ...dictionary.objects.values()
      ],
      arrays: [
        ...dictionary.arrays.values()
      ],
      tuples: [
        ...dictionary.tuples.values()
      ],
      dictionary
    });
  }
  toJSON() {
    return {
      aliases: this.aliases.map((alias) => alias.toJSON()),
      objects: this.objects.map((object) => object.toJSON()),
      arrays: this.arrays.map((array) => array.toJSON()),
      tuples: this.tuples.map((tuple) => tuple.toJSON())
    };
  }
};

export {
  MetadataComponents
};
//# sourceMappingURL=chunk-5L4BJ7DS.mjs.map