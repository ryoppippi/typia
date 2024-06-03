"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunk36WKO3OTjs = require('./chunk-36WKO3OT.js');


var _chunkOGIS7KFPjs = require('./chunk-OGIS7KFP.js');


var _chunkUUZFPK7Njs = require('./chunk-UUZFPK7N.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/programmers/helpers/PruneJoiner.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var PruneJoiner;
(function(PruneJoiner2) {
  PruneJoiner2.object = (input, entries, obj) => {
    const regular = entries.filter((entry) => entry.key.isSoleLiteral());
    const dynamic = entries.filter((entry) => !entry.key.isSoleLiteral());
    const statements = regular.map((entry) => _typescript2.default.isBlock(entry.expression) ? [
      ...entry.expression.statements
    ] : [
      _typescript2.default.factory.createExpressionStatement(entry.expression)
    ]).flat();
    if (dynamic.length) statements.push(_typescript2.default.factory.createExpressionStatement(iterate_dynamic_properties({
      regular,
      dynamic
    })(input)));
    statements.push(_chunk36WKO3OTjs.prune_object_properties.call(void 0, obj));
    return _typescript2.default.factory.createBlock(statements, true);
  };
  PruneJoiner2.array = (input, arrow) => _typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(input)("forEach"), void 0, [
    arrow
  ]);
  PruneJoiner2.tuple = (children, rest) => {
    const entire = [
      ...children
    ];
    if (rest !== null) entire.push(rest);
    const statements = entire.map((elem) => _typescript2.default.isBlock(elem) ? [
      ...elem.statements
    ] : [
      _typescript2.default.factory.createExpressionStatement(elem)
    ]).flat();
    return _typescript2.default.factory.createBlock(statements, true);
  };
})(PruneJoiner || (PruneJoiner = exports.PruneJoiner = {}));
var iterate_dynamic_properties = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (props) => (input) => _typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(_typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("Object.entries"), void 0, [
  input
]))("forEach"), void 0, [
  _typescript2.default.factory.createArrowFunction(void 0, void 0, [
    _chunkUUZFPK7Njs.IdentifierFactory.parameter(_typescript2.default.factory.createArrayBindingPattern([
      "key",
      "value"
    ].map((l) => _typescript2.default.factory.createBindingElement(void 0, void 0, _typescript2.default.factory.createIdentifier(l), void 0))))
  ], void 0, void 0, _typescript2.default.factory.createBlock([
    _typescript2.default.factory.createIfStatement(_typescript2.default.factory.createStrictEquality(_typescript2.default.factory.createIdentifier("undefined"), _typescript2.default.factory.createIdentifier("value")), _typescript2.default.factory.createReturnStatement()),
    ...props.regular.map(({ key }) => _typescript2.default.factory.createIfStatement(_typescript2.default.factory.createStrictEquality(_typescript2.default.factory.createStringLiteral(key.getSoleLiteral()), _typescript2.default.factory.createIdentifier("key")), _typescript2.default.factory.createReturnStatement())),
    ...props.dynamic.map((dynamic) => _typescript2.default.factory.createIfStatement(_typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier(`RegExp(/${_chunkOGIS7KFPjs.metadata_to_pattern.call(void 0, true)(dynamic.key)}/).test`), void 0, [
      _typescript2.default.factory.createIdentifier("key")
    ]), _typescript2.default.isBlock(dynamic.expression) ? dynamic.expression : _typescript2.default.factory.createBlock([
      _typescript2.default.factory.createExpressionStatement(dynamic.expression)
    ])))
  ], true))
]), "iterate_dynamic_properties");



exports.PruneJoiner = PruneJoiner;
//# sourceMappingURL=chunk-Q6EAG4QK.js.map