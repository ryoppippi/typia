"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunkOGIS7KFPjs = require('./chunk-OGIS7KFP.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/programmers/internal/check_template.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var check_template = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (templates) => (input) => {
  const conditions = [
    _typescript2.default.factory.createStrictEquality(_typescript2.default.factory.createStringLiteral("string"), _typescript2.default.factory.createTypeOfExpression(input))
  ];
  const internal = templates.map((tpl) => _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier(`RegExp(/${_chunkOGIS7KFPjs.template_to_pattern.call(void 0, true)(tpl)}/).test`), void 0, [
    input
  ]));
  conditions.push(internal.length === 1 ? internal[0] : internal.reduce((x, y) => _typescript2.default.factory.createLogicalOr(x, y)));
  return {
    expression: conditions.reduce((x, y) => _typescript2.default.factory.createLogicalAnd(x, y)),
    conditions: [],
    expected: templates.map((tpl) => "`" + tpl.map((child) => child.isConstant() && child.size() === 1 ? child.constants[0].values[0].value : `\${${child.getName()}}`).join("").split("`").join("\\`") + "`").join(" | ")
  };
}, "check_template");



exports.check_template = check_template;
//# sourceMappingURL=chunk-NBLB3YSV.js.map