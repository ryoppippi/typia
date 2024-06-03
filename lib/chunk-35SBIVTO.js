"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLIKGYUCKjs = require('./chunk-LIKGYUCK.js');


var _chunkMXIDV3WWjs = require('./chunk-MXIDV3WW.js');


var _chunkRV4Y6B6Tjs = require('./chunk-RV4Y6B6T.js');

// src/transformers/features/notations/NotationIsGeneralTransformer.ts
var NotationIsGeneralTransformer;
(function(NotationIsGeneralTransformer2) {
  NotationIsGeneralTransformer2.transform = (rename) => _chunkLIKGYUCKjs.GenericTransformer.scalar(`notations.is${_chunkRV4Y6B6Tjs.StringUtil_exports.capitalize(rename.name)}`)((project) => (modulo) => _chunkMXIDV3WWjs.NotationIsGeneralProgrammer.write(rename)(project)(modulo));
})(NotationIsGeneralTransformer || (NotationIsGeneralTransformer = exports.NotationIsGeneralTransformer = {}));



exports.NotationIsGeneralTransformer = NotationIsGeneralTransformer;
//# sourceMappingURL=chunk-35SBIVTO.js.map