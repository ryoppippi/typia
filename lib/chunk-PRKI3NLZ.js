"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }

var _chunk4T2222G3js = require('./chunk-4T2222G3.js');


var _chunkNWMPQT3Jjs = require('./chunk-NWMPQT3J.js');


var _chunkTYMSCBZGjs = require('./chunk-TYMSCBZG.js');


var _chunkUUZFPK7Njs = require('./chunk-UUZFPK7N.js');


var _chunkPK6R5VEJjs = require('./chunk-PK6R5VEJ.js');

// src/programmers/protobuf/ProtobufIsEncodeProgrammer.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var ProtobufIsEncodeProgrammer;
(function(ProtobufIsEncodeProgrammer2) {
  ProtobufIsEncodeProgrammer2.write = (project) => (modulo) => (type, name) => _typescript2.default.factory.createArrowFunction(void 0, void 0, [
    _chunkUUZFPK7Njs.IdentifierFactory.parameter("input", _typescript2.default.factory.createTypeReferenceNode(_nullishCoalesce(name, () => ( _chunkPK6R5VEJjs.TypeFactory.getFullName(project.checker)(type)))))
  ], _typescript2.default.factory.createUnionTypeNode([
    _typescript2.default.factory.createTypeReferenceNode("Uint8Array"),
    _typescript2.default.factory.createLiteralTypeNode(_typescript2.default.factory.createNull())
  ]), void 0, _typescript2.default.factory.createBlock([
    _chunkTYMSCBZGjs.StatementFactory.constant("is", _chunkNWMPQT3Jjs.IsProgrammer.write({
      ...project,
      options: {
        ...project.options,
        functional: false,
        numeric: true
      }
    })(modulo)(false)(type, name)),
    _chunkTYMSCBZGjs.StatementFactory.constant("encode", _chunk4T2222G3js.ProtobufEncodeProgrammer.write({
      ...project,
      options: {
        ...project.options,
        functional: false,
        numeric: false
      }
    })(modulo)(type, name)),
    _typescript2.default.factory.createReturnStatement(_typescript2.default.factory.createConditionalExpression(_typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("is"), void 0, [
      _typescript2.default.factory.createIdentifier("input")
    ]), void 0, _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("encode"), void 0, [
      _typescript2.default.factory.createIdentifier("input")
    ]), void 0, _typescript2.default.factory.createNull()))
  ]));
})(ProtobufIsEncodeProgrammer || (ProtobufIsEncodeProgrammer = exports.ProtobufIsEncodeProgrammer = {}));



exports.ProtobufIsEncodeProgrammer = ProtobufIsEncodeProgrammer;
//# sourceMappingURL=chunk-PRKI3NLZ.js.map