"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }

var _chunkQ6A4PISPjs = require('./chunk-Q6A4PISP.js');


var _chunkCK4IX7SCjs = require('./chunk-CK4IX7SC.js');


var _chunkYAAJ76CEjs = require('./chunk-YAAJ76CE.js');


var _chunkTYMSCBZGjs = require('./chunk-TYMSCBZG.js');


var _chunkH3MUGVKWjs = require('./chunk-H3MUGVKW.js');


var _chunkUUZFPK7Njs = require('./chunk-UUZFPK7N.js');


var _chunk6TJDJHWOjs = require('./chunk-6TJDJHWO.js');


var _chunkERQBF2DGjs = require('./chunk-ERQBF2DG.js');


var _chunkPK6R5VEJjs = require('./chunk-PK6R5VEJ.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/programmers/http/HttpParameterProgrammer.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var HttpParameterProgrammer;
(function(HttpParameterProgrammer2) {
  HttpParameterProgrammer2.write = (project) => (modulo) => (type, name) => {
    const result = _chunk6TJDJHWOjs.MetadataFactory.analyze(project.checker, project.context)({
      escape: false,
      constant: true,
      absorb: true,
      validate: HttpParameterProgrammer2.validate
    })(new (0, _chunkERQBF2DGjs.MetadataCollection)())(type);
    if (result.success === false) throw _chunkH3MUGVKWjs.TransformerError.from(modulo.getText())(result.errors);
    const atomic = [
      ..._chunkQ6A4PISPjs.HttpMetadataUtil.atomics(result.data)
    ][0];
    const importer = new (0, _chunkYAAJ76CEjs.FunctionImporter)(modulo.getText());
    const block = [
      _chunkTYMSCBZGjs.StatementFactory.constant("assert", _chunkCK4IX7SCjs.AssertProgrammer.write({
        ...project,
        options: {
          numeric: true
        }
      })(modulo)(false)(type, name)),
      _chunkTYMSCBZGjs.StatementFactory.constant("value", _typescript2.default.factory.createCallExpression(importer.use(atomic), void 0, [
        _typescript2.default.factory.createIdentifier("input")
      ])),
      _typescript2.default.factory.createReturnStatement(_typescript2.default.factory.createCallExpression(_typescript2.default.factory.createIdentifier("assert"), void 0, [
        _typescript2.default.factory.createIdentifier("value")
      ]))
    ];
    return _typescript2.default.factory.createArrowFunction(void 0, void 0, [
      _chunkUUZFPK7Njs.IdentifierFactory.parameter("input", _typescript2.default.factory.createTypeReferenceNode("string"))
    ], _typescript2.default.factory.createTypeReferenceNode(_nullishCoalesce(name, () => ( _chunkPK6R5VEJjs.TypeFactory.getFullName(project.checker)(type)))), void 0, _typescript2.default.factory.createBlock([
      ...importer.declare(modulo),
      ...block
    ], true));
  };
  HttpParameterProgrammer2.validate = (meta) => {
    const errors = [];
    const insert = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (msg) => errors.push(msg), "insert");
    if (meta.any) insert("do not allow any type");
    if (meta.isRequired() === false) insert("do not allow undefindable type");
    const atomics = _chunkQ6A4PISPjs.HttpMetadataUtil.atomics(meta);
    const expected = meta.atomics.length + meta.templates.length + meta.constants.map((c) => c.values.length).reduce((a, b) => a + b, 0);
    if (meta.size() !== expected || atomics.size === 0) insert("only atomic or constant types are allowed");
    if (atomics.size > 1) insert("do not allow union type");
    return errors;
  };
})(HttpParameterProgrammer || (HttpParameterProgrammer = exports.HttpParameterProgrammer = {}));



exports.HttpParameterProgrammer = HttpParameterProgrammer;
//# sourceMappingURL=chunk-7SCFX2HI.js.map