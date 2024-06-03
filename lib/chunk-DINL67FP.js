"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }

var _chunkM3M3GCBSjs = require('./chunk-M3M3GCBS.js');


var _chunkOH66G5XYjs = require('./chunk-OH66G5XY.js');


var _chunkTYMSCBZGjs = require('./chunk-TYMSCBZG.js');


var _chunkUUZFPK7Njs = require('./chunk-UUZFPK7N.js');


var _chunkPK6R5VEJjs = require('./chunk-PK6R5VEJ.js');

// src/programmers/notations/NotationValidateGeneralProgrammer.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var NotationValidateGeneralProgrammer;
(function(NotationValidateGeneralProgrammer2) {
  NotationValidateGeneralProgrammer2.write = (rename) => (project) => (modulo) => (type, name) => _typescript2.default.factory.createArrowFunction(void 0, void 0, [
    _chunkUUZFPK7Njs.IdentifierFactory.parameter("input", _chunkPK6R5VEJjs.TypeFactory.keyword("any"))
  ], _typescript2.default.factory.createTypeReferenceNode(`typia.IValidation<${_chunkM3M3GCBSjs.NotationGeneralProgrammer.returnType(rename)(_nullishCoalesce(name, () => ( _chunkPK6R5VEJjs.TypeFactory.getFullName(project.checker)(type))))}>`), void 0, _typescript2.default.factory.createBlock([
    _chunkTYMSCBZGjs.StatementFactory.constant("validate", _chunkOH66G5XYjs.ValidateProgrammer.write({
      ...project,
      options: {
        ...project.options,
        functional: false,
        numeric: true
      }
    })(modulo)(false)(type, name)),
    _chunkTYMSCBZGjs.StatementFactory.constant("general", _chunkM3M3GCBSjs.NotationGeneralProgrammer.write(rename)({
      ...project,
      options: {
        ...project.options,
        functional: false,
        numeric: false
      }
    })(modulo)(type, name)),
    _chunkTYMSCBZGjs.StatementFactory.constant("output", _typescript2.default.factory.createAsExpression(_typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("validate"), void 0, [
      _typescript2.default.factory.createIdentifier("input")
    ]), _chunkPK6R5VEJjs.TypeFactory.keyword("any"))),
    _typescript2.default.factory.createIfStatement(_typescript2.default.factory.createIdentifier("output.success"), _typescript2.default.factory.createExpressionStatement(_typescript2.default.factory.createBinaryExpression(_typescript2.default.factory.createIdentifier("output.data"), _typescript2.default.SyntaxKind.EqualsToken, _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("general"), void 0, [
      _typescript2.default.factory.createIdentifier("input")
    ])))),
    _typescript2.default.factory.createReturnStatement(_typescript2.default.factory.createIdentifier("output"))
  ]));
})(NotationValidateGeneralProgrammer || (NotationValidateGeneralProgrammer = exports.NotationValidateGeneralProgrammer = {}));



exports.NotationValidateGeneralProgrammer = NotationValidateGeneralProgrammer;
//# sourceMappingURL=chunk-DINL67FP.js.map