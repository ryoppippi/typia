"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }

var _chunkOGIS7KFPjs = require('./chunk-OGIS7KFP.js');


var _chunkT3PGTOEHjs = require('./chunk-T3PGTOEH.js');


var _chunkUUZFPK7Njs = require('./chunk-UUZFPK7N.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/programmers/internal/stringify_dynamic_properties.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var stringify_dynamic_properties = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (dynamic, regular) => {
  const statements = [
    _typescript2.default.factory.createIfStatement(_typescript2.default.factory.createStrictEquality(_typescript2.default.factory.createIdentifier("undefined"), _typescript2.default.factory.createIdentifier("value")), _typescript2.default.factory.createReturnStatement(_typescript2.default.factory.createStringLiteral("")))
  ];
  const output = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => {
    const mapped = _typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(_typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("Object.entries"), void 0, [
      _typescript2.default.factory.createIdentifier("input")
    ]))("map"), void 0, [
      _typescript2.default.factory.createArrowFunction(void 0, void 0, [
        _chunkUUZFPK7Njs.IdentifierFactory.parameter(_typescript2.default.factory.createArrayBindingPattern([
          _typescript2.default.factory.createBindingElement(void 0, void 0, "key"),
          _typescript2.default.factory.createBindingElement(void 0, void 0, "value")
        ]), _typescript2.default.factory.createTypeReferenceNode("[string, any]"))
      ], void 0, void 0, _typescript2.default.factory.createBlock(statements))
    ]);
    const filtered = _typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(mapped)("filter"), void 0, [
      _typescript2.default.factory.createArrowFunction(void 0, void 0, [
        _chunkUUZFPK7Njs.IdentifierFactory.parameter("str")
      ], void 0, void 0, _typescript2.default.factory.createStrictInequality(_typescript2.default.factory.createStringLiteral(""), _typescript2.default.factory.createIdentifier("str")))
    ]);
    return _typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(filtered)("join"), void 0, [
      _typescript2.default.factory.createStringLiteral(",")
    ]);
  }, "output");
  if (regular.length) statements.push(_typescript2.default.factory.createIfStatement(_typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(_typescript2.default.factory.createArrayLiteralExpression(regular.map((key) => _typescript2.default.factory.createStringLiteral(key))))("some"), void 0, [
    _typescript2.default.factory.createArrowFunction(void 0, void 0, [
      _chunkUUZFPK7Njs.IdentifierFactory.parameter("regular")
    ], void 0, void 0, _typescript2.default.factory.createStrictEquality(_typescript2.default.factory.createIdentifier("regular"), _typescript2.default.factory.createIdentifier("key")))
  ]), _typescript2.default.factory.createReturnStatement(_typescript2.default.factory.createStringLiteral(""))));
  const simple = dynamic.length === 1 && dynamic[0].key.size() === 1 && _optionalChain([dynamic, 'access', _ => _[0], 'access', _2 => _2.key, 'access', _3 => _3.atomics, 'access', _4 => _4[0], 'optionalAccess', _5 => _5.type]) === "string";
  if (simple === true) {
    statements.push(stringify(dynamic[0]));
    return output();
  }
  for (const entry of dynamic) {
    const condition = _typescript2.default.factory.createIfStatement(_typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier(`RegExp(/${_chunkOGIS7KFPjs.metadata_to_pattern.call(void 0, true)(entry.key)}/).test`), void 0, [
      _typescript2.default.factory.createIdentifier("key")
    ]), stringify(entry));
    statements.push(condition);
  }
  statements.push(_typescript2.default.factory.createReturnStatement(_typescript2.default.factory.createStringLiteral("")));
  return output();
}, "stringify_dynamic_properties");
var stringify = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (entry) => _typescript2.default.factory.createReturnStatement(_chunkT3PGTOEHjs.TemplateFactory.generate([
  _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("JSON.stringify"), [], [
    _typescript2.default.factory.createIdentifier("key")
  ]),
  _typescript2.default.factory.createStringLiteral(":"),
  entry.expression
])), "stringify");



exports.stringify_dynamic_properties = stringify_dynamic_properties;
//# sourceMappingURL=chunk-6FKWRQ2I.js.map