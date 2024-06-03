"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunk4T2222G3js = require('./chunk-4T2222G3.js');


var _chunkCK4IX7SCjs = require('./chunk-CK4IX7SC.js');


var _chunkTYMSCBZGjs = require('./chunk-TYMSCBZG.js');


var _chunkUUZFPK7Njs = require('./chunk-UUZFPK7N.js');


var _chunkPK6R5VEJjs = require('./chunk-PK6R5VEJ.js');

// src/programmers/protobuf/ProtobufAssertEncodeProgrammer.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var ProtobufAssertEncodeProgrammer;
(function(ProtobufAssertEncodeProgrammer2) {
  ProtobufAssertEncodeProgrammer2.write = (project) => (modulo) => (type, name, init) => _typescript2.default.factory.createArrowFunction(void 0, void 0, [
    _chunkUUZFPK7Njs.IdentifierFactory.parameter("input", _chunkPK6R5VEJjs.TypeFactory.keyword("any")),
    _chunkCK4IX7SCjs.AssertProgrammer.Guardian.parameter(init)
  ], _typescript2.default.factory.createTypeReferenceNode("Uint8Array"), void 0, _typescript2.default.factory.createBlock([
    _chunkTYMSCBZGjs.StatementFactory.constant("assert", _chunkCK4IX7SCjs.AssertProgrammer.write({
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
    _typescript2.default.factory.createReturnStatement(_typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("encode"), void 0, [
      _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("assert"), void 0, [
        _typescript2.default.factory.createIdentifier("input"),
        _chunkCK4IX7SCjs.AssertProgrammer.Guardian.identifier()
      ])
    ]))
  ]));
})(ProtobufAssertEncodeProgrammer || (ProtobufAssertEncodeProgrammer = exports.ProtobufAssertEncodeProgrammer = {}));



exports.ProtobufAssertEncodeProgrammer = ProtobufAssertEncodeProgrammer;
//# sourceMappingURL=chunk-3QULWO56.js.map