"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6GHU2XFNjs = require('./chunk-6GHU2XFN.js');


var _chunkUNOXPWQEjs = require('./chunk-UNOXPWQE.js');


var _chunkX72M22NMjs = require('./chunk-X72M22NM.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/programmers/internal/wrap_metadata_rest_tuple.ts
var wrap_metadata_rest_tuple = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (rest) => {
  const wrapper = _chunk6GHU2XFNjs.Metadata.initialize();
  wrapper.arrays.push(_chunkUNOXPWQEjs.MetadataArray.create({
    type: _chunkX72M22NMjs.MetadataArrayType.create({
      name: `...${rest.getName()}`,
      value: rest,
      nullables: [],
      recursive: false,
      index: null
    }),
    tags: []
  }));
  return wrapper;
}, "wrap_metadata_rest_tuple");



exports.wrap_metadata_rest_tuple = wrap_metadata_rest_tuple;
//# sourceMappingURL=chunk-PDHSW2UW.js.map