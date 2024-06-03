"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }

var _chunkJWVFSEIQjs = require('./chunk-JWVFSEIQ.js');


var _chunkH3MUGVKWjs = require('./chunk-H3MUGVKW.js');

// src/transformers/features/CreateRandomTransformer.ts
var CreateRandomTransformer;
(function(CreateRandomTransformer2) {
  CreateRandomTransformer2.transform = (project) => (modulo) => (expression) => {
    if (!_optionalChain([expression, 'access', _ => _.typeArguments, 'optionalAccess', _2 => _2[0]])) throw new (0, _chunkH3MUGVKWjs.TransformerError)({
      code: "typia.createRandom",
      message: "generic argument is not specified."
    });
    const node = expression.typeArguments[0];
    const type = project.checker.getTypeFromTypeNode(node);
    if (type.isTypeParameter()) throw new (0, _chunkH3MUGVKWjs.TransformerError)({
      code: "typia.createRandom",
      message: "non-specified generic argument."
    });
    return _chunkJWVFSEIQjs.RandomProgrammer.write({
      ...project,
      options: {
        ...project.options,
        functional: false,
        numeric: false
      }
    })(modulo)(_optionalChain([expression, 'access', _3 => _3.arguments, 'optionalAccess', _4 => _4[0]]))(type, node.getFullText().trim());
  };
})(CreateRandomTransformer || (CreateRandomTransformer = exports.CreateRandomTransformer = {}));



exports.CreateRandomTransformer = CreateRandomTransformer;
//# sourceMappingURL=chunk-NXVPBO4T.js.map