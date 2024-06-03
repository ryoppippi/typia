"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunkAY5KNJEEjs = require('./chunk-AY5KNJEE.js');


var _chunkCK4IX7SCjs = require('./chunk-CK4IX7SC.js');


var _chunkTYMSCBZGjs = require('./chunk-TYMSCBZG.js');


var _chunkUUZFPK7Njs = require('./chunk-UUZFPK7N.js');


var _chunkPK6R5VEJjs = require('./chunk-PK6R5VEJ.js');

// src/programmers/json/JsonAssertStringifyProgrammer.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var JsonAssertStringifyProgrammer;
(function(JsonAssertStringifyProgrammer2) {
  JsonAssertStringifyProgrammer2.write = (project) => (modulo) => (type, name, init) => _typescript2.default.factory.createArrowFunction(void 0, void 0, [
    _chunkUUZFPK7Njs.IdentifierFactory.parameter("input", _chunkPK6R5VEJjs.TypeFactory.keyword("any")),
    _chunkCK4IX7SCjs.AssertProgrammer.Guardian.parameter(init)
  ], _chunkPK6R5VEJjs.TypeFactory.keyword("string"), void 0, _typescript2.default.factory.createBlock([
    _chunkTYMSCBZGjs.StatementFactory.constant("assert", _chunkCK4IX7SCjs.AssertProgrammer.write({
      ...project,
      options: {
        ...project.options,
        functional: false,
        numeric: true
      }
    })(modulo)(false)(type, name)),
    _chunkTYMSCBZGjs.StatementFactory.constant("stringify", _chunkAY5KNJEEjs.JsonStringifyProgrammer.write({
      ...project,
      options: {
        ...project.options,
        functional: false,
        numeric: false
      }
    })(modulo)(type, name)),
    _typescript2.default.factory.createReturnStatement(_typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("stringify"), void 0, [
      _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("assert"), void 0, [
        _typescript2.default.factory.createIdentifier("input"),
        _chunkCK4IX7SCjs.AssertProgrammer.Guardian.identifier()
      ])
    ]))
  ]));
})(JsonAssertStringifyProgrammer || (JsonAssertStringifyProgrammer = exports.JsonAssertStringifyProgrammer = {}));



exports.JsonAssertStringifyProgrammer = JsonAssertStringifyProgrammer;
//# sourceMappingURL=chunk-RV7FJEIN.js.map