"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLIKGYUCKjs = require('./chunk-LIKGYUCK.js');


var _chunkDINL67FPjs = require('./chunk-DINL67FP.js');


var _chunkRV4Y6B6Tjs = require('./chunk-RV4Y6B6T.js');

// src/transformers/features/notations/NotationValidateGeneralTransformer.ts
var NotationValidateGeneralTransformer;
(function(NotationValidateGeneralTransformer2) {
  NotationValidateGeneralTransformer2.transform = (rename) => _chunkLIKGYUCKjs.GenericTransformer.scalar(`notations.validate${_chunkRV4Y6B6Tjs.StringUtil_exports.capitalize(rename.name)}`)((project) => (modulo) => _chunkDINL67FPjs.NotationValidateGeneralProgrammer.write(rename)(project)(modulo));
})(NotationValidateGeneralTransformer || (NotationValidateGeneralTransformer = exports.NotationValidateGeneralTransformer = {}));



exports.NotationValidateGeneralTransformer = NotationValidateGeneralTransformer;
//# sourceMappingURL=chunk-SGDCE5QX.js.map