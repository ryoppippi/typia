"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLIKGYUCKjs = require('./chunk-LIKGYUCK.js');


var _chunkM3M3GCBSjs = require('./chunk-M3M3GCBS.js');


var _chunkRV4Y6B6Tjs = require('./chunk-RV4Y6B6T.js');

// src/transformers/features/notations/NotationCreateGeneralTransformer.ts
var NotationCreateGeneralTransformer;
(function(NotationCreateGeneralTransformer2) {
  NotationCreateGeneralTransformer2.transform = (rename) => _chunkLIKGYUCKjs.GenericTransformer.factory(`notations.create${_chunkRV4Y6B6Tjs.StringUtil_exports.capitalize(rename.name)}`)((project) => (modulo) => _chunkM3M3GCBSjs.NotationGeneralProgrammer.write(rename)(project)(modulo));
})(NotationCreateGeneralTransformer || (NotationCreateGeneralTransformer = exports.NotationCreateGeneralTransformer = {}));



exports.NotationCreateGeneralTransformer = NotationCreateGeneralTransformer;
//# sourceMappingURL=chunk-PVOFUC5Z.js.map