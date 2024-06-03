"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }

var _chunkTYJFLL4Rjs = require('./chunk-TYJFLL4R.js');


var _chunkCK4IX7SCjs = require('./chunk-CK4IX7SC.js');


var _chunkTYMSCBZGjs = require('./chunk-TYMSCBZG.js');


var _chunkUUZFPK7Njs = require('./chunk-UUZFPK7N.js');


var _chunkPK6R5VEJjs = require('./chunk-PK6R5VEJ.js');

// src/programmers/misc/MiscAssertPruneProgrammer.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var MiscAssertPruneProgrammer;
(function(MiscAssertPruneProgrammer2) {
  MiscAssertPruneProgrammer2.write = (project) => (modulo) => (type, name, init) => _typescript2.default.factory.createArrowFunction(void 0, void 0, [
    _chunkUUZFPK7Njs.IdentifierFactory.parameter("input", _chunkPK6R5VEJjs.TypeFactory.keyword("any")),
    _chunkCK4IX7SCjs.AssertProgrammer.Guardian.parameter(init)
  ], _typescript2.default.factory.createTypeReferenceNode(_nullishCoalesce(name, () => ( _chunkPK6R5VEJjs.TypeFactory.getFullName(project.checker)(type)))), void 0, _typescript2.default.factory.createBlock([
    _chunkTYMSCBZGjs.StatementFactory.constant("assert", _chunkCK4IX7SCjs.AssertProgrammer.write(project)(modulo)(false)(type, name)),
    _chunkTYMSCBZGjs.StatementFactory.constant("prune", _chunkTYJFLL4Rjs.MiscPruneProgrammer.write({
      ...project,
      options: {
        ...project.options,
        functional: false,
        numeric: false
      }
    })(modulo)(type, name)),
    _typescript2.default.factory.createExpressionStatement(_typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("assert"), void 0, [
      _typescript2.default.factory.createIdentifier("input"),
      _chunkCK4IX7SCjs.AssertProgrammer.Guardian.identifier()
    ])),
    _typescript2.default.factory.createExpressionStatement(_typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("prune"), void 0, [
      _typescript2.default.factory.createIdentifier("input")
    ])),
    _typescript2.default.factory.createReturnStatement(_typescript2.default.factory.createIdentifier("input"))
  ]));
})(MiscAssertPruneProgrammer || (MiscAssertPruneProgrammer = exports.MiscAssertPruneProgrammer = {}));



exports.MiscAssertPruneProgrammer = MiscAssertPruneProgrammer;
//# sourceMappingURL=chunk-2UHTZ4VT.js.map