"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }

var _chunkTYJFLL4Rjs = require('./chunk-TYJFLL4R.js');


var _chunkOH66G5XYjs = require('./chunk-OH66G5XY.js');


var _chunkTYMSCBZGjs = require('./chunk-TYMSCBZG.js');


var _chunkUUZFPK7Njs = require('./chunk-UUZFPK7N.js');


var _chunkPK6R5VEJjs = require('./chunk-PK6R5VEJ.js');

// src/programmers/misc/MiscValidatePruneProgrammer.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var MiscValidatePruneProgrammer;
(function(MiscValidatePruneProgrammer2) {
  MiscValidatePruneProgrammer2.write = (project) => (modulo) => (type, name) => _typescript2.default.factory.createArrowFunction(void 0, void 0, [
    _chunkUUZFPK7Njs.IdentifierFactory.parameter("input", _chunkPK6R5VEJjs.TypeFactory.keyword("any"))
  ], _typescript2.default.factory.createTypeReferenceNode(`typia.IValidation<${_nullishCoalesce(name, () => ( _chunkPK6R5VEJjs.TypeFactory.getFullName(project.checker)(type)))}>`), void 0, _typescript2.default.factory.createBlock([
    _chunkTYMSCBZGjs.StatementFactory.constant("validate", _chunkOH66G5XYjs.ValidateProgrammer.write({
      ...project,
      options: {
        ...project.options,
        functional: false,
        numeric: true
      }
    })(modulo)(false)(type, name)),
    _chunkTYMSCBZGjs.StatementFactory.constant("prune", _chunkTYJFLL4Rjs.MiscPruneProgrammer.write({
      ...project,
      options: {
        ...project.options,
        functional: false,
        numeric: false
      }
    })(modulo)(type, name)),
    _chunkTYMSCBZGjs.StatementFactory.constant("output", _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("validate"), void 0, [
      _typescript2.default.factory.createIdentifier("input")
    ])),
    _typescript2.default.factory.createIfStatement(_typescript2.default.factory.createIdentifier("output.success"), _typescript2.default.factory.createExpressionStatement(_typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("prune"), void 0, [
      _typescript2.default.factory.createIdentifier("input")
    ]))),
    _typescript2.default.factory.createReturnStatement(_typescript2.default.factory.createIdentifier("output"))
  ]));
})(MiscValidatePruneProgrammer || (MiscValidatePruneProgrammer = exports.MiscValidatePruneProgrammer = {}));



exports.MiscValidatePruneProgrammer = MiscValidatePruneProgrammer;
//# sourceMappingURL=chunk-6BSTRGSR.js.map