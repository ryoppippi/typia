"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }

var _chunkOH66G5XYjs = require('./chunk-OH66G5XY.js');


var _chunkTYMSCBZGjs = require('./chunk-TYMSCBZG.js');


var _chunkNJB6XWLNjs = require('./chunk-NJB6XWLN.js');


var _chunkUUZFPK7Njs = require('./chunk-UUZFPK7N.js');


var _chunkPK6R5VEJjs = require('./chunk-PK6R5VEJ.js');

// src/programmers/json/JsonValidateParseProgrammer.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var JsonValidateParseProgrammer;
(function(JsonValidateParseProgrammer2) {
  JsonValidateParseProgrammer2.write = (project) => (modulo) => (type, name) => {
    _chunkNJB6XWLNjs.JsonMetadataFactory.analyze(`typia.json.${modulo.getText()}`)(project.checker, project.context)(type);
    return _typescript2.default.factory.createArrowFunction(void 0, void 0, [
      _chunkUUZFPK7Njs.IdentifierFactory.parameter("input", _chunkPK6R5VEJjs.TypeFactory.keyword("string"))
    ], _typescript2.default.factory.createTypeReferenceNode(`typia.IValidation<typia.Primitive<${_nullishCoalesce(name, () => ( _chunkPK6R5VEJjs.TypeFactory.getFullName(project.checker)(type)))}>>`), void 0, _typescript2.default.factory.createBlock([
      _chunkTYMSCBZGjs.StatementFactory.constant("validate", _chunkOH66G5XYjs.ValidateProgrammer.write({
        ...project,
        options: {
          ...project.options,
          functional: false,
          numeric: false
        }
      })(modulo)(false)(type, name)),
      _chunkTYMSCBZGjs.StatementFactory.constant("output", _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("JSON.parse"), void 0, [
        _typescript2.default.factory.createIdentifier("input")
      ])),
      _typescript2.default.factory.createReturnStatement(_typescript2.default.factory.createAsExpression(_typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("validate"), void 0, [
        _typescript2.default.factory.createIdentifier("output")
      ]), _typescript2.default.factory.createTypeReferenceNode("any")))
    ]));
  };
})(JsonValidateParseProgrammer || (JsonValidateParseProgrammer = exports.JsonValidateParseProgrammer = {}));



exports.JsonValidateParseProgrammer = JsonValidateParseProgrammer;
//# sourceMappingURL=chunk-L6X2XRVW.js.map