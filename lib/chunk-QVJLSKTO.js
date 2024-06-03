"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLIKGYUCKjs = require('./chunk-LIKGYUCK.js');


var _chunkXBAR3AORjs = require('./chunk-XBAR3AOR.js');


var _chunkRV4Y6B6Tjs = require('./chunk-RV4Y6B6T.js');

// src/transformers/features/notations/NotationAssertGeneralTransformer.ts
var NotationAssertGeneralTransformer;
(function(NotationAssertGeneralTransformer2) {
  NotationAssertGeneralTransformer2.transform = (rename) => _chunkLIKGYUCKjs.GenericTransformer.scalar(`notations.assert${_chunkRV4Y6B6Tjs.StringUtil_exports.capitalize(rename.name)}`)((project) => (modulo) => _chunkXBAR3AORjs.NotationAssertGeneralProgrammer.write(rename)(project)(modulo));
})(NotationAssertGeneralTransformer || (NotationAssertGeneralTransformer = exports.NotationAssertGeneralTransformer = {}));



exports.NotationAssertGeneralTransformer = NotationAssertGeneralTransformer;
//# sourceMappingURL=chunk-QVJLSKTO.js.map