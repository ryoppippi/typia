"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLIKGYUCKjs = require('./chunk-LIKGYUCK.js');


var _chunkM3M3GCBSjs = require('./chunk-M3M3GCBS.js');

// src/transformers/features/notations/NotationGeneralTransformer.ts
var NotationGeneralTransformer;
(function(NotationGeneralTransformer2) {
  NotationGeneralTransformer2.transform = (rename) => _chunkLIKGYUCKjs.GenericTransformer.scalar(`notations.${rename.name}`)((project) => (modulo) => _chunkM3M3GCBSjs.NotationGeneralProgrammer.write(rename)(project)(modulo));
})(NotationGeneralTransformer || (NotationGeneralTransformer = exports.NotationGeneralTransformer = {}));



exports.NotationGeneralTransformer = NotationGeneralTransformer;
//# sourceMappingURL=chunk-HB3DBQ7J.js.map