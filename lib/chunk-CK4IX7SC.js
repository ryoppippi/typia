"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }


var _chunkNWMPQT3Jjs = require('./chunk-NWMPQT3J.js');


var _chunkI6NSYWAVjs = require('./chunk-I6NSYWAV.js');


var _chunkKX6W4A6Gjs = require('./chunk-KX6W4A6G.js');


var _chunkYAAJ76CEjs = require('./chunk-YAAJ76CE.js');


var _chunkTYMSCBZGjs = require('./chunk-TYMSCBZG.js');


var _chunkUUZFPK7Njs = require('./chunk-UUZFPK7N.js');


var _chunkPK6R5VEJjs = require('./chunk-PK6R5VEJ.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/programmers/AssertProgrammer.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var AssertProgrammer;
(function(AssertProgrammer2) {
  AssertProgrammer2.write = (project) => (modulo) => (props) => (type, name, init) => {
    if (typeof props === "boolean") props = {
      equals: props,
      guard: false
    };
    const importer = new (0, _chunkYAAJ76CEjs.FunctionImporter)(modulo.getText());
    const is = _chunkNWMPQT3Jjs.IsProgrammer.write(project)(modulo, true)(props.equals)(type, _nullishCoalesce(name, () => ( _chunkPK6R5VEJjs.TypeFactory.getFullName(project.checker)(type))));
    const assert = _chunkNWMPQT3Jjs.CheckerProgrammer.write(project)({
      prefix: "$a",
      path: true,
      trace: true,
      numeric: _chunkKX6W4A6Gjs.OptionPredicator.numeric(project.options),
      equals: props.equals,
      atomist: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (explore) => (entry) => (input) => [
        ...entry.expression ? [
          entry.expression
        ] : [],
        ...entry.conditions.length === 0 ? [] : entry.conditions.length === 1 ? entry.conditions[0].map((cond) => _typescript2.default.factory.createLogicalOr(cond.expression, create_guard_call(importer)(explore.from === "top" ? _typescript2.default.factory.createTrue() : _typescript2.default.factory.createIdentifier("_exceptionable"))(_typescript2.default.factory.createIdentifier(explore.postfix ? `_path + ${explore.postfix}` : "_path"), cond.expected, input))) : [
          _typescript2.default.factory.createLogicalOr(entry.conditions.map((set) => set.map((s) => s.expression).reduce((a, b) => _typescript2.default.factory.createLogicalAnd(a, b))).reduce((a, b) => _typescript2.default.factory.createLogicalOr(a, b)), create_guard_call(importer)(explore.from === "top" ? _typescript2.default.factory.createTrue() : _typescript2.default.factory.createIdentifier("_exceptionable"))(_typescript2.default.factory.createIdentifier(explore.postfix ? `_path + ${explore.postfix}` : "_path"), entry.expected, input))
        ]
      ].reduce((x, y) => _typescript2.default.factory.createLogicalAnd(x, y)), "atomist"),
      combiner: combiner(props.equals)(project)(importer),
      joiner: joiner(props.equals)(project)(importer),
      success: _typescript2.default.factory.createTrue(),
      addition: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => importer.declare(modulo), "addition")
    })(importer)(type, name);
    return _typescript2.default.factory.createArrowFunction(void 0, void 0, [
      _chunkUUZFPK7Njs.IdentifierFactory.parameter("input", _chunkPK6R5VEJjs.TypeFactory.keyword("any")),
      Guardian.parameter(init)
    ], props.guard ? _typescript2.default.factory.createTypePredicateNode(_typescript2.default.factory.createToken(_typescript2.default.SyntaxKind.AssertsKeyword), _typescript2.default.factory.createIdentifier("input"), _typescript2.default.factory.createTypeReferenceNode(_nullishCoalesce(name, () => ( _chunkPK6R5VEJjs.TypeFactory.getFullName(project.checker)(type))))) : _typescript2.default.factory.createTypeReferenceNode(_nullishCoalesce(name, () => ( _chunkPK6R5VEJjs.TypeFactory.getFullName(project.checker)(type)))), void 0, _typescript2.default.factory.createBlock([
      _chunkTYMSCBZGjs.StatementFactory.constant("__is", is),
      _typescript2.default.factory.createIfStatement(_typescript2.default.factory.createStrictEquality(_typescript2.default.factory.createFalse(), _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("__is"), void 0, [
        _typescript2.default.factory.createIdentifier("input")
      ])), _typescript2.default.factory.createExpressionStatement(_typescript2.default.factory.createCallExpression(assert, void 0, [
        _typescript2.default.factory.createIdentifier("input"),
        _typescript2.default.factory.createStringLiteral("$input"),
        _typescript2.default.factory.createTrue()
      ])), void 0),
      ...props.guard === false ? [
        _typescript2.default.factory.createReturnStatement(_typescript2.default.factory.createIdentifier(`input`))
      ] : []
    ], true));
  };
  const combiner = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (equals) => (project) => (importer) => (explore) => {
    if (explore.tracable === false) return _chunkNWMPQT3Jjs.IsProgrammer.configure({
      object: assert_object(equals)(project)(importer),
      numeric: true
    })(project)(importer).combiner(explore);
    const path = explore.postfix ? `_path + ${explore.postfix}` : "_path";
    return (logic) => (input, binaries, expected) => logic === "and" ? binaries.map((binary) => binary.combined ? binary.expression : _typescript2.default.factory.createLogicalOr(binary.expression, create_guard_call(importer)(explore.source === "top" ? _typescript2.default.factory.createTrue() : _typescript2.default.factory.createIdentifier("_exceptionable"))(_typescript2.default.factory.createIdentifier(path), expected, input))).reduce(_typescript2.default.factory.createLogicalAnd) : _typescript2.default.factory.createLogicalOr(binaries.map((binary) => binary.expression).reduce(_typescript2.default.factory.createLogicalOr), create_guard_call(importer)(explore.source === "top" ? _typescript2.default.factory.createTrue() : _typescript2.default.factory.createIdentifier("_exceptionable"))(_typescript2.default.factory.createIdentifier(path), expected, input));
  }, "combiner");
  const assert_object = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (equals) => (project) => (importer) => _chunkI6NSYWAVjs.check_object.call(void 0, {
    equals,
    assert: true,
    undefined: true,
    reduce: _typescript2.default.factory.createLogicalAnd,
    positive: _typescript2.default.factory.createTrue(),
    superfluous: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (value) => create_guard_call(importer)()(_typescript2.default.factory.createAdd(_typescript2.default.factory.createIdentifier("_path"), _typescript2.default.factory.createCallExpression(importer.use("join"), void 0, [
      _typescript2.default.factory.createIdentifier("key")
    ])), "undefined", value), "superfluous"),
    halt: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (expr) => _typescript2.default.factory.createLogicalOr(_typescript2.default.factory.createStrictEquality(_typescript2.default.factory.createFalse(), _typescript2.default.factory.createIdentifier("_exceptionable")), expr), "halt")
  })(project)(importer), "assert_object");
  const joiner = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (equals) => (project) => (importer) => ({
    object: assert_object(equals)(project)(importer),
    array: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (input, arrow) => _typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(input)("every"), void 0, [
      arrow
    ]), "array"),
    failure: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (value, expected, explore) => create_guard_call(importer)(_optionalChain([explore, 'optionalAccess', _ => _.from]) === "top" ? _typescript2.default.factory.createTrue() : _typescript2.default.factory.createIdentifier("_exceptionable"))(_typescript2.default.factory.createIdentifier(_optionalChain([explore, 'optionalAccess', _2 => _2.postfix]) ? `_path + ${explore.postfix}` : "_path"), expected, value), "failure"),
    full: equals ? void 0 : (condition) => (input, expected, explore) => _typescript2.default.factory.createLogicalOr(condition, create_guard_call(importer)(explore.from === "top" ? _typescript2.default.factory.createTrue() : _typescript2.default.factory.createIdentifier("_exceptionable"))(_typescript2.default.factory.createIdentifier("_path"), expected, input))
  }), "joiner");
  const create_guard_call = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (importer) => (exceptionable) => (path, expected, value) => _typescript2.default.factory.createCallExpression(importer.use("guard"), void 0, [
    _nullishCoalesce(exceptionable, () => ( _typescript2.default.factory.createIdentifier("_exceptionable"))),
    _typescript2.default.factory.createObjectLiteralExpression([
      _typescript2.default.factory.createPropertyAssignment("path", path),
      _typescript2.default.factory.createPropertyAssignment("expected", _typescript2.default.factory.createStringLiteral(expected)),
      _typescript2.default.factory.createPropertyAssignment("value", value)
    ], true),
    Guardian.identifier()
  ]), "create_guard_call");
  let Guardian;
  (function(Guardian2) {
    Guardian2.identifier = () => _typescript2.default.factory.createIdentifier("errorFactory");
    Guardian2.parameter = (init) => _chunkUUZFPK7Njs.IdentifierFactory.parameter("errorFactory", Guardian2.type(), _nullishCoalesce(init, () => ( _typescript2.default.factory.createToken(_typescript2.default.SyntaxKind.QuestionToken))));
    Guardian2.type = () => _typescript2.default.factory.createFunctionTypeNode(void 0, [
      _typescript2.default.factory.createParameterDeclaration(void 0, void 0, _typescript2.default.factory.createIdentifier("p"), void 0, _typescript2.default.factory.createImportTypeNode(_typescript2.default.factory.createLiteralTypeNode(_typescript2.default.factory.createStringLiteral("typia")), void 0, _typescript2.default.factory.createQualifiedName(_typescript2.default.factory.createIdentifier("TypeGuardError"), _typescript2.default.factory.createIdentifier("IProps")), void 0, false), void 0)
    ], _typescript2.default.factory.createTypeReferenceNode(_typescript2.default.factory.createIdentifier("Error"), void 0));
  })(Guardian = AssertProgrammer2.Guardian || (AssertProgrammer2.Guardian = {}));
})(AssertProgrammer || (AssertProgrammer = exports.AssertProgrammer = {}));



exports.AssertProgrammer = AssertProgrammer;
//# sourceMappingURL=chunk-CK4IX7SC.js.map