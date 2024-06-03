"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunkOGIS7KFPjs = require('./chunk-OGIS7KFP.js');


var _chunkTYMSCBZGjs = require('./chunk-TYMSCBZG.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/programmers/internal/prune_object_properties.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var prune_object_properties = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (obj) => {
  const input = _typescript2.default.factory.createIdentifier("input");
  const key = _typescript2.default.factory.createIdentifier("key");
  const condition = obj.properties.map((prop) => {
    const name = prop.key.getSoleLiteral();
    if (name !== null) return _typescript2.default.factory.createStrictEquality(_typescript2.default.factory.createStringLiteral(name), _typescript2.default.factory.createIdentifier("key"));
    return _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier(`RegExp(/${_chunkOGIS7KFPjs.metadata_to_pattern.call(void 0, true)(prop.key)}/).test`), void 0, [
      key
    ]);
  });
  const statements = [];
  if (condition.length) statements.push(_typescript2.default.factory.createIfStatement(condition.reduce((a, b) => _typescript2.default.factory.createLogicalOr(a, b)), _typescript2.default.factory.createContinueStatement()));
  statements.push(_typescript2.default.factory.createExpressionStatement(_typescript2.default.factory.createDeleteExpression(_typescript2.default.factory.createElementAccessExpression(input, key))));
  return _typescript2.default.factory.createForOfStatement(void 0, _chunkTYMSCBZGjs.StatementFactory.constant("key").declarationList, _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("Object.keys"), void 0, [
    input
  ]), statements.length === 1 ? statements[0] : _typescript2.default.factory.createBlock(statements, true));
}, "prune_object_properties");



exports.prune_object_properties = prune_object_properties;
//# sourceMappingURL=chunk-36WKO3OT.js.map