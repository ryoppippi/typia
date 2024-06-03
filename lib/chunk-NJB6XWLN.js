"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDEEK72LSjs = require('./chunk-DEEK72LS.js');


var _chunkH3MUGVKWjs = require('./chunk-H3MUGVKW.js');


var _chunk6TJDJHWOjs = require('./chunk-6TJDJHWO.js');


var _chunkERQBF2DGjs = require('./chunk-ERQBF2DG.js');

// src/factories/JsonMetadataFactory.ts
var JsonMetadataFactory;
(function(JsonMetadataFactory2) {
  JsonMetadataFactory2.analyze = (method) => (checker, context) => (type) => {
    const collection = new (0, _chunkERQBF2DGjs.MetadataCollection)();
    const result = _chunk6TJDJHWOjs.MetadataFactory.analyze(checker, context)({
      escape: true,
      constant: true,
      absorb: true,
      validate: JsonMetadataFactory2.validate
    })(collection)(type);
    if (result.success === false) throw _chunkH3MUGVKWjs.TransformerError.from(method)(result.errors);
    return [
      collection,
      result.data
    ];
  };
  JsonMetadataFactory2.validate = (meta) => {
    const output = [];
    if (meta.atomics.some((a) => a.type === "bigint") || meta.constants.some((c) => c.type === "bigint")) output.push("JSON does not support bigint type.");
    if (meta.tuples.some((t) => t.type.elements.some((e) => e.isRequired() === false)) || meta.arrays.some((a) => a.type.value.isRequired() === false)) output.push("JSON does not support undefined type in array.");
    if (meta.maps.length) output.push("JSON does not support Map type.");
    if (meta.sets.length) output.push("JSON does not support Set type.");
    for (const native of meta.natives) if (_chunkDEEK72LSjs.AtomicPredicator.native(native) === false && native !== "Date") output.push(`JSON does not support ${native} type.`);
    return output;
  };
})(JsonMetadataFactory || (JsonMetadataFactory = exports.JsonMetadataFactory = {}));



exports.JsonMetadataFactory = JsonMetadataFactory;
//# sourceMappingURL=chunk-NJB6XWLN.js.map