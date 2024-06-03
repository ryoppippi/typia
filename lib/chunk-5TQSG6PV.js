"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }

var _chunkK5RYADNPjs = require('./chunk-K5RYADNP.js');


var _chunkH3MUGVKWjs = require('./chunk-H3MUGVKW.js');

// src/transformers/features/misc/MiscLiteralsTransformer.ts
var MiscLiteralsTransformer;
(function(MiscLiteralsTransformer2) {
  MiscLiteralsTransformer2.transform = (project) => (expression) => {
    if (!_optionalChain([expression, 'access', _ => _.typeArguments, 'optionalAccess', _2 => _2[0]])) throw new (0, _chunkH3MUGVKWjs.TransformerError)({
      code: "typia.misc.literals",
      message: "generic argument is not specified."
    });
    const node = expression.typeArguments[0];
    const type = project.checker.getTypeFromTypeNode(node);
    if (type.isTypeParameter()) throw new (0, _chunkH3MUGVKWjs.TransformerError)({
      code: "typia.misc.literals",
      message: "non-specified generic argument."
    });
    return _chunkK5RYADNPjs.MiscLiteralsProgrammer.write(project)(type);
  };
})(MiscLiteralsTransformer || (MiscLiteralsTransformer = exports.MiscLiteralsTransformer = {}));



exports.MiscLiteralsTransformer = MiscLiteralsTransformer;
//# sourceMappingURL=chunk-5TQSG6PV.js.map