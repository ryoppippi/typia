"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }


var _chunkNWMPQT3Jjs = require('./chunk-NWMPQT3J.js');


var _chunkI6NSYWAVjs = require('./chunk-I6NSYWAV.js');


var _chunkXIWFANFGjs = require('./chunk-XIWFANFG.js');


var _chunkKX6W4A6Gjs = require('./chunk-KX6W4A6G.js');


var _chunkYAAJ76CEjs = require('./chunk-YAAJ76CE.js');


var _chunkTYMSCBZGjs = require('./chunk-TYMSCBZG.js');


var _chunkUUZFPK7Njs = require('./chunk-UUZFPK7N.js');


var _chunk2F43GCPEjs = require('./chunk-2F43GCPE.js');


var _chunkPK6R5VEJjs = require('./chunk-PK6R5VEJ.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/programmers/ValidateProgrammer.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var ValidateProgrammer;
(function(ValidateProgrammer2) {
  ValidateProgrammer2.write = (project) => (modulo) => (equals) => (type, name) => {
    const importer = new (0, _chunkYAAJ76CEjs.FunctionImporter)(modulo.getText());
    const is = _chunkNWMPQT3Jjs.IsProgrammer.write(project)(modulo, true)(equals)(type, _nullishCoalesce(name, () => ( _chunkPK6R5VEJjs.TypeFactory.getFullName(project.checker)(type))));
    const validate = _chunkNWMPQT3Jjs.CheckerProgrammer.write(project)({
      prefix: "$v",
      path: true,
      trace: true,
      numeric: _chunkKX6W4A6Gjs.OptionPredicator.numeric(project.options),
      equals,
      atomist: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (explore) => (entry) => (input) => [
        ...entry.expression ? [
          entry.expression
        ] : [],
        ...entry.conditions.length === 0 ? [] : entry.conditions.length === 1 ? entry.conditions[0].map((cond) => _typescript2.default.factory.createLogicalOr(cond.expression, create_report_call(explore.from === "top" ? _typescript2.default.factory.createTrue() : _typescript2.default.factory.createIdentifier("_exceptionable"))(_typescript2.default.factory.createIdentifier(explore.postfix ? `_path + ${explore.postfix}` : "_path"), cond.expected, input))) : [
          _typescript2.default.factory.createLogicalOr(entry.conditions.map((set) => set.map((s) => s.expression).reduce((a, b) => _typescript2.default.factory.createLogicalAnd(a, b))).reduce((a, b) => _typescript2.default.factory.createLogicalOr(a, b)), create_report_call(explore.from === "top" ? _typescript2.default.factory.createTrue() : _typescript2.default.factory.createIdentifier("_exceptionable"))(_typescript2.default.factory.createIdentifier(explore.postfix ? `_path + ${explore.postfix}` : "_path"), entry.expected, input))
        ]
      ].reduce((x, y) => _typescript2.default.factory.createLogicalAnd(x, y)), "atomist"),
      combiner: combine(equals)(project)(importer),
      joiner: joiner(equals)(project)(importer),
      success: _typescript2.default.factory.createTrue(),
      addition: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => importer.declare(modulo), "addition")
    })(importer)(type, name);
    return _typescript2.default.factory.createArrowFunction(void 0, void 0, [
      _chunkUUZFPK7Njs.IdentifierFactory.parameter("input", _chunkPK6R5VEJjs.TypeFactory.keyword("any"))
    ], _typescript2.default.factory.createTypeReferenceNode(`typia.IValidation<${_nullishCoalesce(name, () => ( _chunkPK6R5VEJjs.TypeFactory.getFullName(project.checker)(type)))}>`), void 0, _typescript2.default.factory.createBlock([
      _chunkTYMSCBZGjs.StatementFactory.constant("errors", _typescript2.default.factory.createAsExpression(_typescript2.default.factory.createArrayLiteralExpression([]), _typescript2.default.factory.createArrayTypeNode(_chunkPK6R5VEJjs.TypeFactory.keyword("any")))),
      _chunkTYMSCBZGjs.StatementFactory.constant("__is", is),
      _typescript2.default.factory.createIfStatement(_typescript2.default.factory.createStrictEquality(_typescript2.default.factory.createFalse(), _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("__is"), void 0, [
        _typescript2.default.factory.createIdentifier("input")
      ])), _typescript2.default.factory.createBlock([
        _chunkTYMSCBZGjs.StatementFactory.constant("$report", _typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(_typescript2.default.factory.createParenthesizedExpression(_typescript2.default.factory.createAsExpression(modulo, _chunkPK6R5VEJjs.TypeFactory.keyword("any"))))("report"), [], [
          _typescript2.default.factory.createIdentifier("errors")
        ])),
        _typescript2.default.factory.createExpressionStatement(_typescript2.default.factory.createCallExpression(validate, void 0, [
          _typescript2.default.factory.createIdentifier("input"),
          _typescript2.default.factory.createStringLiteral("$input"),
          _typescript2.default.factory.createTrue()
        ]))
      ])),
      _chunkTYMSCBZGjs.StatementFactory.constant("success", _typescript2.default.factory.createStrictEquality(_chunk2F43GCPEjs.ExpressionFactory.number(0), _typescript2.default.factory.createIdentifier("errors.length"))),
      _typescript2.default.factory.createReturnStatement(_typescript2.default.factory.createAsExpression(create_output(), _chunkPK6R5VEJjs.TypeFactory.keyword("any")))
    ], true));
  };
})(ValidateProgrammer || (ValidateProgrammer = exports.ValidateProgrammer = {}));
var combine = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (equals) => (project) => (importer) => (explore) => {
  if (explore.tracable === false) return _chunkNWMPQT3Jjs.IsProgrammer.configure({
    object: validate_object(equals)(project)(importer),
    numeric: true
  })(project)(importer).combiner(explore);
  const path = explore.postfix ? `_path + ${explore.postfix}` : "_path";
  return (logic) => (input, binaries, expected) => logic === "and" ? binaries.map((binary) => binary.combined ? binary.expression : _typescript2.default.factory.createLogicalOr(binary.expression, create_report_call(explore.source === "top" ? _typescript2.default.factory.createTrue() : _typescript2.default.factory.createIdentifier("_exceptionable"))(_typescript2.default.factory.createIdentifier(path), expected, input))).reduce(_typescript2.default.factory.createLogicalAnd) : _typescript2.default.factory.createLogicalOr(binaries.map((binary) => binary.expression).reduce(_typescript2.default.factory.createLogicalOr), create_report_call(explore.source === "top" ? _typescript2.default.factory.createTrue() : _typescript2.default.factory.createIdentifier("_exceptionable"))(_typescript2.default.factory.createIdentifier(path), expected, input));
}, "combine");
var validate_object = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (equals) => (project) => (importer) => _chunkI6NSYWAVjs.check_object.call(void 0, {
  equals,
  undefined: true,
  assert: false,
  reduce: _typescript2.default.factory.createLogicalAnd,
  positive: _typescript2.default.factory.createTrue(),
  superfluous: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (value) => create_report_call()(_typescript2.default.factory.createAdd(_typescript2.default.factory.createIdentifier("_path"), _typescript2.default.factory.createCallExpression(importer.use("join"), void 0, [
    _typescript2.default.factory.createIdentifier("key")
  ])), "undefined", value), "superfluous"),
  halt: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (expr) => _typescript2.default.factory.createLogicalOr(_typescript2.default.factory.createStrictEquality(_typescript2.default.factory.createFalse(), _typescript2.default.factory.createIdentifier("_exceptionable")), expr), "halt")
})(project)(importer), "validate_object");
var joiner = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (equals) => (project) => (importer) => ({
  object: validate_object(equals)(project)(importer),
  array: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (input, arrow) => _chunkXIWFANFGjs.check_everything.call(void 0, _typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(input)("map"), void 0, [
    arrow
  ])), "array"),
  failure: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (value, expected, explore) => create_report_call(_optionalChain([explore, 'optionalAccess', _ => _.from]) === "top" ? _typescript2.default.factory.createTrue() : _typescript2.default.factory.createIdentifier("_exceptionable"))(_typescript2.default.factory.createIdentifier(_optionalChain([explore, 'optionalAccess', _2 => _2.postfix]) ? `_path + ${explore.postfix}` : "_path"), expected, value), "failure"),
  tuple: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (binaries) => _chunkXIWFANFGjs.check_everything.call(void 0, _typescript2.default.factory.createArrayLiteralExpression(binaries, true)), "tuple")
}), "joiner");
var create_output = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => _typescript2.default.factory.createObjectLiteralExpression([
  _typescript2.default.factory.createShorthandPropertyAssignment("success"),
  _typescript2.default.factory.createShorthandPropertyAssignment("errors"),
  _typescript2.default.factory.createPropertyAssignment("data", _typescript2.default.factory.createConditionalExpression(_typescript2.default.factory.createIdentifier("success"), void 0, _typescript2.default.factory.createIdentifier("input"), void 0, _typescript2.default.factory.createIdentifier("undefined")))
], true), "create_output");
var create_report_call = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (exceptionable) => (path, expected, value) => _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("$report"), void 0, [
  _nullishCoalesce(exceptionable, () => ( _typescript2.default.factory.createIdentifier("_exceptionable"))),
  _typescript2.default.factory.createObjectLiteralExpression([
    _typescript2.default.factory.createPropertyAssignment("path", path),
    _typescript2.default.factory.createPropertyAssignment("expected", _typescript2.default.factory.createStringLiteral(expected)),
    _typescript2.default.factory.createPropertyAssignment("value", value)
  ], true)
]), "create_report_call");



exports.ValidateProgrammer = ValidateProgrammer;
//# sourceMappingURL=chunk-OH66G5XY.js.map