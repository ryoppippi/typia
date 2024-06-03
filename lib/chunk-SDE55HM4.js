"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }

var _chunkNWMPQT3Jjs = require('./chunk-NWMPQT3J.js');


var _chunkTYMSCBZGjs = require('./chunk-TYMSCBZG.js');


var _chunkNJB6XWLNjs = require('./chunk-NJB6XWLN.js');


var _chunkUUZFPK7Njs = require('./chunk-UUZFPK7N.js');


var _chunkPK6R5VEJjs = require('./chunk-PK6R5VEJ.js');

// src/programmers/json/JsonIsParseProgrammer.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var JsonIsParseProgrammer;
(function(JsonIsParseProgrammer2) {
  JsonIsParseProgrammer2.write = (project) => (modulo) => (type, name) => {
    _chunkNJB6XWLNjs.JsonMetadataFactory.analyze(`typia.json.${modulo.getText()}`)(project.checker, project.context)(type);
    return _typescript2.default.factory.createArrowFunction(void 0, void 0, [
      _chunkUUZFPK7Njs.IdentifierFactory.parameter("input", _chunkPK6R5VEJjs.TypeFactory.keyword("any"))
    ], _typescript2.default.factory.createImportTypeNode(_typescript2.default.factory.createLiteralTypeNode(_typescript2.default.factory.createStringLiteral("typia")), void 0, _typescript2.default.factory.createIdentifier("Primitive"), [
      _typescript2.default.factory.createTypeReferenceNode(_nullishCoalesce(name, () => ( _chunkPK6R5VEJjs.TypeFactory.getFullName(project.checker)(type))))
    ], false), void 0, _typescript2.default.factory.createBlock([
      _chunkTYMSCBZGjs.StatementFactory.constant("is", _chunkNWMPQT3Jjs.IsProgrammer.write({
        ...project,
        options: {
          ...project.options,
          functional: false,
          numeric: false
        }
      })(modulo)(false)(type, name)),
      _typescript2.default.factory.createExpressionStatement(_typescript2.default.factory.createBinaryExpression(_typescript2.default.factory.createIdentifier("input"), _typescript2.default.SyntaxKind.EqualsToken, _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("JSON.parse"), void 0, [
        _typescript2.default.factory.createIdentifier("input")
      ]))),
      _typescript2.default.factory.createReturnStatement(_typescript2.default.factory.createConditionalExpression(_typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("is"), void 0, [
        _typescript2.default.factory.createIdentifier("input")
      ]), void 0, _typescript2.default.factory.createAsExpression(_typescript2.default.factory.createIdentifier("input"), _chunkPK6R5VEJjs.TypeFactory.keyword("any")), void 0, _typescript2.default.factory.createNull()))
    ]));
  };
})(JsonIsParseProgrammer || (JsonIsParseProgrammer = exports.JsonIsParseProgrammer = {}));



exports.JsonIsParseProgrammer = JsonIsParseProgrammer;
//# sourceMappingURL=chunk-SDE55HM4.js.map