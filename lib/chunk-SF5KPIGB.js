"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/programmers/internal/application_v31_tuple.ts
var application_v31_tuple = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (generator) => (tuple) => {
  const tail = tuple.type.elements.at(-1);
  const prefixItems = tuple.type.isRest() ? tuple.type.elements.slice(0, -1) : tuple.type.elements;
  return {
    type: "array",
    prefixItems: prefixItems.map(generator),
    additionalItems: tail ? generator(tail) : false
  };
}, "application_v31_tuple");



exports.application_v31_tuple = application_v31_tuple;
//# sourceMappingURL=chunk-SF5KPIGB.js.map