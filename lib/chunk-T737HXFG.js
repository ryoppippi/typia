"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunk6FKWRQ2Ijs = require('./chunk-6FKWRQ2I.js');


var _chunkMASAGYS7js = require('./chunk-MASAGYS7.js');


var _chunkT3PGTOEHjs = require('./chunk-T3PGTOEH.js');


var _chunkUUZFPK7Njs = require('./chunk-UUZFPK7N.js');

// src/programmers/helpers/StringifyJoinder.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var StringifyJoiner;
(function(StringifyJoiner2) {
  StringifyJoiner2.object = (importer) => (_input, entries) => {
    if (entries.length === 0) return _typescript2.default.factory.createStringLiteral("{}");
    const regular = entries.filter((entry) => entry.key.isSoleLiteral());
    const dynamic = entries.filter((entry) => !entry.key.isSoleLiteral());
    const expressions = [
      ..._chunkMASAGYS7js.stringify_regular_properties.call(void 0, regular, dynamic),
      ...dynamic.length ? [
        _chunk6FKWRQ2Ijs.stringify_dynamic_properties.call(void 0, dynamic, regular.map((r) => r.key.getSoleLiteral()))
      ] : []
    ];
    const filtered = regular.length && regular[regular.length - 1].meta.isRequired() && dynamic.length === 0 || regular.length === 0 && dynamic.length ? expressions : [
      _typescript2.default.factory.createCallExpression(importer.use("tail"), void 0, [
        _chunkT3PGTOEHjs.TemplateFactory.generate(expressions)
      ])
    ];
    return _chunkT3PGTOEHjs.TemplateFactory.generate([
      _typescript2.default.factory.createStringLiteral(`{`),
      ...filtered,
      _typescript2.default.factory.createStringLiteral(`}`)
    ]);
  };
  StringifyJoiner2.array = (input, arrow) => _chunkT3PGTOEHjs.TemplateFactory.generate([
    _typescript2.default.factory.createStringLiteral(`[`),
    _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createPropertyAccessExpression(_typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(input)("map"), void 0, [
      arrow
    ]), _typescript2.default.factory.createIdentifier("join")), void 0, [
      _typescript2.default.factory.createStringLiteral(`,`)
    ]),
    _typescript2.default.factory.createStringLiteral(`]`)
  ]);
  StringifyJoiner2.tuple = (children, rest) => {
    if (children.length === 0) return _typescript2.default.factory.createStringLiteral("[]");
    if (rest === null && children.every((child) => _typescript2.default.isStringLiteral(child))) return _typescript2.default.factory.createStringLiteral("[" + children.map((child) => child.text).join(",") + "]");
    const elements = [
      _typescript2.default.factory.createStringLiteral(`[`)
    ];
    children.forEach((child, i) => {
      elements.push(child);
      if (i !== children.length - 1) elements.push(_typescript2.default.factory.createStringLiteral(`,`));
    });
    if (rest !== null) elements.push(rest);
    elements.push(_typescript2.default.factory.createStringLiteral(`]`));
    return _chunkT3PGTOEHjs.TemplateFactory.generate(elements);
  };
})(StringifyJoiner || (StringifyJoiner = exports.StringifyJoiner = {}));



exports.StringifyJoiner = StringifyJoiner;
//# sourceMappingURL=chunk-T737HXFG.js.map