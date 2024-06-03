"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkU663UP7Njs = require('./chunk-U663UP7N.js');


var _chunk4SNDEZATjs = require('./chunk-4SNDEZAT.js');


var _chunk2B44I7L7js = require('./chunk-2B44I7L7.js');


var _chunkI6WYJFF2js = require('./chunk-I6WYJFF2.js');



var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/functional/Namespace/notations.ts
var notations_exports = {};
_chunkUZ5BS2M3js.__export.call(void 0, notations_exports, {
  camel: () => camel,
  pascal: () => pascal,
  snake: () => snake
});
var camel = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (method) => ({
  ...base(method),
  any: _chunk2B44I7L7js.$convention.call(void 0, _chunkI6WYJFF2js.NamingConvention_exports.camel)
}), "camel");
var pascal = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (method) => ({
  ...base(method),
  any: _chunk2B44I7L7js.$convention.call(void 0, _chunkI6WYJFF2js.NamingConvention_exports.pascal)
}), "pascal");
var snake = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (method) => ({
  ...base(method),
  any: _chunk2B44I7L7js.$convention.call(void 0, _chunkI6WYJFF2js.NamingConvention_exports.snake)
}), "snake");
var base = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (method) => ({
  ..._chunk4SNDEZATjs.is.call(void 0, ),
  throws: _chunkU663UP7Njs.$throws.call(void 0, `notations.${method}`)
}), "base");






exports.camel = camel; exports.pascal = pascal; exports.snake = snake; exports.notations_exports = notations_exports;
//# sourceMappingURL=chunk-T33MWPMJ.js.map