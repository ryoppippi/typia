"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkGXEQC72Cjs = require('./chunk-GXEQC72C.js');


var _chunk6GHU2XFNjs = require('./chunk-6GHU2XFN.js');


var _chunkFDUFUJMYjs = require('./chunk-FDUFUJMY.js');


var _chunkH3SMZNB3js = require('./chunk-H3SMZNB3.js');


var _chunkX72M22NMjs = require('./chunk-X72M22NM.js');


var _chunkQ2DBVBM3js = require('./chunk-Q2DBVBM3.js');


var _chunk7TNPR4MVjs = require('./chunk-7TNPR4MV.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/schemas/metadata/MetadataComponents.ts
var MetadataComponents = class _MetadataComponents {
  static {
    _chunkUZ5BS2M3js.__name.call(void 0, this, "MetadataComponents");
  }
  
  
  
  
  
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
        _chunkQ2DBVBM3js.MetadataObject._From_without_properties(obj)
      ])),
      aliases: new Map(json.aliases.map((alias) => [
        alias.name,
        _chunkFDUFUJMYjs.MetadataAlias._From_without_value(alias)
      ])),
      arrays: new Map(json.arrays.map((arr) => [
        arr.name,
        _chunkX72M22NMjs.MetadataArrayType._From_without_value(arr)
      ])),
      tuples: new Map(json.tuples.map((tpl) => [
        tpl.name,
        _chunkH3SMZNB3js.MetadataTupleType._From_without_elements(tpl)
      ]))
    };
    for (const obj of json.objects) dictionary.objects.get(obj.name).properties.push(...obj.properties.map((prop) => _chunkGXEQC72Cjs.MetadataProperty.from(prop, dictionary)));
    for (const alias of json.aliases) _chunk7TNPR4MVjs.Writable.call(void 0, dictionary.aliases.get(alias.name)).value = _chunk6GHU2XFNjs.Metadata.from(alias.value, dictionary);
    for (const array of json.arrays) _chunk7TNPR4MVjs.Writable.call(void 0, dictionary.arrays.get(array.name)).value = _chunk6GHU2XFNjs.Metadata.from(array.value, dictionary);
    for (const tuple of json.tuples) _chunk7TNPR4MVjs.Writable.call(void 0, dictionary.tuples.get(tuple.name)).elements = tuple.elements.map((elem) => _chunk6GHU2XFNjs.Metadata.from(elem, dictionary));
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



exports.MetadataComponents = MetadataComponents;
//# sourceMappingURL=chunk-VOR7NA2H.js.map