"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLIKGYUCKjs = require('./chunk-LIKGYUCK.js');


var _chunkMXIDV3WWjs = require('./chunk-MXIDV3WW.js');


var _chunkRV4Y6B6Tjs = require('./chunk-RV4Y6B6T.js');

// src/transformers/features/notations/NotationCreateIsGeneralTransformer.ts
var NotationCreateIsGeneralTransformer;
(function(NotationCreateIsGeneralTransformer2) {
  NotationCreateIsGeneralTransformer2.transform = (rename) => _chunkLIKGYUCKjs.GenericTransformer.factory(`notations.createIs${_chunkRV4Y6B6Tjs.StringUtil_exports.capitalize(rename.name)}`)((project) => (modulo) => _chunkMXIDV3WWjs.NotationIsGeneralProgrammer.write(rename)(project)(modulo));
})(NotationCreateIsGeneralTransformer || (NotationCreateIsGeneralTransformer = exports.NotationCreateIsGeneralTransformer = {}));



exports.NotationCreateIsGeneralTransformer = NotationCreateIsGeneralTransformer;
//# sourceMappingURL=chunk-MLDM7HRV.js.map