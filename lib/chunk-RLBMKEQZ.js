"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLIKGYUCKjs = require('./chunk-LIKGYUCK.js');


var _chunkXBAR3AORjs = require('./chunk-XBAR3AOR.js');


var _chunkRV4Y6B6Tjs = require('./chunk-RV4Y6B6T.js');

// src/transformers/features/notations/NotationCreateAssertGeneralTransformer.ts
var NotationCreateAssertGeneralTransformer;
(function(NotationCreateAssertGeneralTransformer2) {
  NotationCreateAssertGeneralTransformer2.transform = (rename) => _chunkLIKGYUCKjs.GenericTransformer.factory(`notations.createAssert${_chunkRV4Y6B6Tjs.StringUtil_exports.capitalize(rename.name)}`)((project) => (modulo) => _chunkXBAR3AORjs.NotationAssertGeneralProgrammer.write(rename)(project)(modulo));
})(NotationCreateAssertGeneralTransformer || (NotationCreateAssertGeneralTransformer = exports.NotationCreateAssertGeneralTransformer = {}));



exports.NotationCreateAssertGeneralTransformer = NotationCreateAssertGeneralTransformer;
//# sourceMappingURL=chunk-RLBMKEQZ.js.map