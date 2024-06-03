"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }

var _chunkH3MUGVKWjs = require('./chunk-H3MUGVKW.js');


var _chunkS3VZR3G5js = require('./chunk-S3VZR3G5.js');


var _chunk6TJDJHWOjs = require('./chunk-6TJDJHWO.js');


var _chunkERQBF2DGjs = require('./chunk-ERQBF2DG.js');

// src/transformers/features/reflect/ReflectMetadataTransformer.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var ReflectMetadataTransformer;
(function(ReflectMetadataTransformer2) {
  ReflectMetadataTransformer2.transform = (project) => (_modulo) => (expression) => {
    if (!_optionalChain([expression, 'access', _ => _.typeArguments, 'optionalAccess', _2 => _2.length])) throw new (0, _chunkH3MUGVKWjs.TransformerError)({
      code: "typia.metadata",
      message: "no generic argument."
    });
    const top = expression.typeArguments[0];
    if (!_typescript2.default.isTupleTypeNode(top)) return expression;
    else if (top.elements.some((child) => !_typescript2.default.isTypeNode(child))) return expression;
    const types = top.elements.map((child) => project.checker.getTypeFromTypeNode(child));
    if (types.some((t) => t.isTypeParameter())) throw new (0, _chunkH3MUGVKWjs.TransformerError)({
      code: "typia.reflect.metadata",
      message: "non-specified generic argument(s)."
    });
    const collection = new (0, _chunkERQBF2DGjs.MetadataCollection)();
    const metadatas = types.map((type) => {
      const result = _chunk6TJDJHWOjs.MetadataFactory.analyze(project.checker, project.context)({
        escape: true,
        constant: true,
        absorb: true
      })(collection)(type);
      if (result.success === false) throw _chunkH3MUGVKWjs.TransformerError.from("typia.reflect.metadata")(result.errors);
      return result.data;
    });
    const app = {
      metadatas: metadatas.map((metadata) => metadata.toJSON()),
      components: collection.toJSON()
    };
    return _chunkS3VZR3G5js.LiteralFactory.generate(app);
  };
})(ReflectMetadataTransformer || (ReflectMetadataTransformer = exports.ReflectMetadataTransformer = {}));



exports.ReflectMetadataTransformer = ReflectMetadataTransformer;
//# sourceMappingURL=chunk-BHZXUKV5.js.map