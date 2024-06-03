"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunk2FXDVN3Gjs = require('./chunk-2FXDVN3G.js');


var _chunkXIWFANFGjs = require('./chunk-XIWFANFG.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/programmers/internal/check_object.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var check_object = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (props) => (project) => (importer) => (input, entries) => {
  const regular = entries.filter((entry) => entry.key.isSoleLiteral());
  const dynamic = entries.filter((entry) => !entry.key.isSoleLiteral());
  const flags = regular.map((entry) => entry.expression);
  if (props.equals === false && dynamic.length === 0) return regular.length === 0 ? props.positive : reduce(props)(flags);
  flags.push(_chunk2FXDVN3Gjs.check_dynamic_properties.call(void 0, props)(project)(importer)(input, regular, dynamic));
  return reduce(props)(flags);
}, "check_object");
var reduce = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (props) => (expressions) => props.assert ? expressions.reduce(props.reduce) : _chunkXIWFANFGjs.check_everything.call(void 0, _typescript2.default.factory.createArrayLiteralExpression(expressions)), "reduce");



exports.check_object = check_object;
//# sourceMappingURL=chunk-I6NSYWAV.js.map