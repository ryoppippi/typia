"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }

var _chunkE2PKKU2Ajs = require('./chunk-E2PKKU2A.js');


var _chunkCK4IX7SCjs = require('./chunk-CK4IX7SC.js');


var _chunkTYMSCBZGjs = require('./chunk-TYMSCBZG.js');


var _chunkUUZFPK7Njs = require('./chunk-UUZFPK7N.js');


var _chunkPK6R5VEJjs = require('./chunk-PK6R5VEJ.js');

// src/programmers/http/HttpAssertQueryProgrammer.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var HttpAssertQueryProgrammer;
(function(HttpAssertQueryProgrammer2) {
  HttpAssertQueryProgrammer2.write = (project) => (modulo) => (type, name, init) => _typescript2.default.factory.createArrowFunction(void 0, void 0, [
    _chunkUUZFPK7Njs.IdentifierFactory.parameter("input", _typescript2.default.factory.createTypeReferenceNode(_chunkE2PKKU2Ajs.HttpQueryProgrammer.INPUT_TYPE)),
    _chunkCK4IX7SCjs.AssertProgrammer.Guardian.parameter(init)
  ], _typescript2.default.factory.createImportTypeNode(_typescript2.default.factory.createLiteralTypeNode(_typescript2.default.factory.createStringLiteral("typia")), void 0, _typescript2.default.factory.createIdentifier("Resolved"), [
    _typescript2.default.factory.createTypeReferenceNode(_nullishCoalesce(name, () => ( _chunkPK6R5VEJjs.TypeFactory.getFullName(project.checker)(type))))
  ], false), void 0, _typescript2.default.factory.createBlock([
    _chunkTYMSCBZGjs.StatementFactory.constant("decode", _chunkE2PKKU2Ajs.HttpQueryProgrammer.write({
      ...project,
      options: {
        ...project.options,
        functional: false,
        numeric: false
      }
    })(modulo)(type, name)),
    _chunkTYMSCBZGjs.StatementFactory.constant("assert", _chunkCK4IX7SCjs.AssertProgrammer.write({
      ...project,
      options: {
        ...project.options,
        functional: false,
        numeric: false
      }
    })(modulo)(false)(type, name)),
    _chunkTYMSCBZGjs.StatementFactory.constant("output", _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("decode"), void 0, [
      _typescript2.default.factory.createIdentifier("input")
    ])),
    _typescript2.default.factory.createReturnStatement(_typescript2.default.factory.createAsExpression(_typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("assert"), void 0, [
      _typescript2.default.factory.createIdentifier("output"),
      _chunkCK4IX7SCjs.AssertProgrammer.Guardian.identifier()
    ]), _chunkPK6R5VEJjs.TypeFactory.keyword("any")))
  ]));
})(HttpAssertQueryProgrammer || (HttpAssertQueryProgrammer = exports.HttpAssertQueryProgrammer = {}));



exports.HttpAssertQueryProgrammer = HttpAssertQueryProgrammer;
//# sourceMappingURL=chunk-S5VFICFA.js.map