"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunkUUZFPK7Njs = require('./chunk-UUZFPK7N.js');


var _chunkMCMQ56RXjs = require('./chunk-MCMQ56RX.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/programmers/internal/feature_object_entries.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var feature_object_entries = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (config) => (importer) => (obj) => (input, from = "object") => obj.properties.map((prop) => {
  const sole = prop.key.getSoleLiteral();
  const propInput = sole === null ? _typescript2.default.factory.createIdentifier("value") : _chunkMCMQ56RXjs.Escaper.variable(sole) ? _typescript2.default.factory.createPropertyAccessExpression(input, _typescript2.default.factory.createIdentifier(sole)) : _typescript2.default.factory.createElementAccessExpression(input, _typescript2.default.factory.createStringLiteral(sole));
  return {
    input: propInput,
    key: prop.key,
    meta: prop.value,
    expression: config.decoder()(propInput, prop.value, {
      tracable: config.path || config.trace,
      source: "function",
      from,
      postfix: config.trace ? sole !== null ? _chunkUUZFPK7Njs.IdentifierFactory.postfix(sole) : (() => {
        importer.use("join");
        return `$join(key)`;
      })() : ""
    })
  };
}), "feature_object_entries");



exports.feature_object_entries = feature_object_entries;
//# sourceMappingURL=chunk-A44UIBYD.js.map