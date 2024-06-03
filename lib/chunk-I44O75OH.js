"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }

var _chunkJWVFSEIQjs = require('./chunk-JWVFSEIQ.js');


var _chunkH3MUGVKWjs = require('./chunk-H3MUGVKW.js');

// src/transformers/features/RandomTransformer.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var RandomTransformer;
(function(RandomTransformer2) {
  RandomTransformer2.transform = (project) => (modulo) => (expression) => {
    if (!_optionalChain([expression, 'access', _ => _.typeArguments, 'optionalAccess', _2 => _2[0]])) throw new (0, _chunkH3MUGVKWjs.TransformerError)({
      code: `typia.${modulo.getText()}`,
      message: "generic argument is not specified."
    });
    const node = expression.typeArguments[0];
    const type = project.checker.getTypeFromTypeNode(node);
    if (type.isTypeParameter()) throw new (0, _chunkH3MUGVKWjs.TransformerError)({
      code: `typia.${modulo.getText()}`,
      message: "non-specified generic argument."
    });
    return _typescript2.default.factory.createCallExpression(_chunkJWVFSEIQjs.RandomProgrammer.write({
      ...project,
      options: {
        ...project.options,
        functional: false,
        numeric: false
      }
    })(modulo)()(type, node.getFullText().trim()), void 0, expression.arguments.length ? [
      expression.arguments[0]
    ] : void 0);
  };
})(RandomTransformer || (RandomTransformer = exports.RandomTransformer = {}));



exports.RandomTransformer = RandomTransformer;
//# sourceMappingURL=chunk-I44O75OH.js.map