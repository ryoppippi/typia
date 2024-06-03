"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }

var _chunkPK6R5VEJjs = require('./chunk-PK6R5VEJ.js');

// src/programmers/functional/internal/FunctionalGeneralProgrammer.ts
var FunctionalGeneralProgrammer;
(function(FunctionalGeneralProgrammer2) {
  FunctionalGeneralProgrammer2.getReturnType = (checker) => (declaration) => {
    const signature = checker.getSignatureFromDeclaration(declaration);
    const type = _nullishCoalesce(_optionalChain([signature, 'optionalAccess', _ => _.getReturnType, 'call', _2 => _2()]), () => ( checker.getTypeFromTypeNode(_chunkPK6R5VEJjs.TypeFactory.keyword("any"))));
    if (_optionalChain([type, 'access', _3 => _3.symbol, 'optionalAccess', _4 => _4.name]) === "Promise") {
      const generic = checker.getTypeArguments(type);
      return generic.length === 1 ? {
        type: generic[0],
        async: true
      } : {
        type: checker.getTypeFromTypeNode(_chunkPK6R5VEJjs.TypeFactory.keyword("any")),
        async: false
      };
    }
    return {
      type,
      async: false
    };
  };
})(FunctionalGeneralProgrammer || (FunctionalGeneralProgrammer = exports.FunctionalGeneralProgrammer = {}));



exports.FunctionalGeneralProgrammer = FunctionalGeneralProgrammer;
//# sourceMappingURL=chunk-XYPLNHI3.js.map