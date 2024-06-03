"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }

var _chunkGIJD3QT2js = require('./chunk-GIJD3QT2.js');


var _chunkOH66G5XYjs = require('./chunk-OH66G5XY.js');


var _chunkTYMSCBZGjs = require('./chunk-TYMSCBZG.js');


var _chunkUUZFPK7Njs = require('./chunk-UUZFPK7N.js');


var _chunkPK6R5VEJjs = require('./chunk-PK6R5VEJ.js');

// src/programmers/protobuf/ProtobufValidateDecodeProgrammer.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var ProtobufValidateDecodeProgrammer;
(function(ProtobufValidateDecodeProgrammer2) {
  ProtobufValidateDecodeProgrammer2.write = (project) => (modulo) => (type, name) => _typescript2.default.factory.createArrowFunction(void 0, void 0, [
    _chunkUUZFPK7Njs.IdentifierFactory.parameter("input", _typescript2.default.factory.createTypeReferenceNode("Uint8Array"))
  ], _typescript2.default.factory.createTypeReferenceNode(`typia.IValidation<typia.Resolved<${_nullishCoalesce(name, () => ( _chunkPK6R5VEJjs.TypeFactory.getFullName(project.checker)(type)))}>>`), void 0, _typescript2.default.factory.createBlock([
    _chunkTYMSCBZGjs.StatementFactory.constant("validate", _chunkOH66G5XYjs.ValidateProgrammer.write({
      ...project,
      options: {
        ...project.options,
        functional: false,
        numeric: true
      }
    })(modulo)(false)(type, name)),
    _chunkTYMSCBZGjs.StatementFactory.constant("decode", _chunkGIJD3QT2js.ProtobufDecodeProgrammer.write({
      ...project,
      options: {
        ...project.options,
        functional: false,
        numeric: false
      }
    })(modulo)(type, name)),
    _chunkTYMSCBZGjs.StatementFactory.constant("output", _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("decode"), void 0, [
      _typescript2.default.factory.createIdentifier("input")
    ])),
    _typescript2.default.factory.createReturnStatement(_typescript2.default.factory.createAsExpression(_typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("validate"), void 0, [
      _typescript2.default.factory.createIdentifier("output")
    ]), _typescript2.default.factory.createTypeReferenceNode("any")))
  ]));
})(ProtobufValidateDecodeProgrammer || (ProtobufValidateDecodeProgrammer = exports.ProtobufValidateDecodeProgrammer = {}));



exports.ProtobufValidateDecodeProgrammer = ProtobufValidateDecodeProgrammer;
//# sourceMappingURL=chunk-6OGZU4AD.js.map