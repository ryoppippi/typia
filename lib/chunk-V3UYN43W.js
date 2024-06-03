"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }

var _chunkTYJFLL4Rjs = require('./chunk-TYJFLL4R.js');


var _chunkNWMPQT3Jjs = require('./chunk-NWMPQT3J.js');


var _chunkTYMSCBZGjs = require('./chunk-TYMSCBZG.js');


var _chunkUUZFPK7Njs = require('./chunk-UUZFPK7N.js');


var _chunkPK6R5VEJjs = require('./chunk-PK6R5VEJ.js');

// src/programmers/misc/MiscIsPruneProgrammer.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var MiscIsPruneProgrammer;
(function(MiscIsPruneProgrammer2) {
  MiscIsPruneProgrammer2.write = (project) => (modulo) => (type, name) => _typescript2.default.factory.createArrowFunction(void 0, void 0, [
    _chunkUUZFPK7Njs.IdentifierFactory.parameter("input", _chunkPK6R5VEJjs.TypeFactory.keyword("any"))
  ], _typescript2.default.factory.createTypePredicateNode(void 0, "input", _typescript2.default.factory.createTypeReferenceNode(_nullishCoalesce(name, () => ( _chunkPK6R5VEJjs.TypeFactory.getFullName(project.checker)(type))))), void 0, _typescript2.default.factory.createBlock([
    _chunkTYMSCBZGjs.StatementFactory.constant("is", _chunkNWMPQT3Jjs.IsProgrammer.write(project)(modulo)(false)(type, name)),
    _chunkTYMSCBZGjs.StatementFactory.constant("prune", _chunkTYJFLL4Rjs.MiscPruneProgrammer.write({
      ...project,
      options: {
        ...project.options,
        functional: false,
        numeric: false
      }
    })(modulo)(type, name)),
    _typescript2.default.factory.createIfStatement(_typescript2.default.factory.createPrefixUnaryExpression(_typescript2.default.SyntaxKind.ExclamationToken, _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("is"), void 0, [
      _typescript2.default.factory.createIdentifier("input")
    ])), _typescript2.default.factory.createReturnStatement(_typescript2.default.factory.createFalse())),
    _typescript2.default.factory.createExpressionStatement(_typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("prune"), void 0, [
      _typescript2.default.factory.createIdentifier("input")
    ])),
    _typescript2.default.factory.createReturnStatement(_typescript2.default.factory.createTrue())
  ]));
})(MiscIsPruneProgrammer || (MiscIsPruneProgrammer = exports.MiscIsPruneProgrammer = {}));



exports.MiscIsPruneProgrammer = MiscIsPruneProgrammer;
//# sourceMappingURL=chunk-V3UYN43W.js.map