"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLIKGYUCKjs = require('./chunk-LIKGYUCK.js');


var _chunkCK4IX7SCjs = require('./chunk-CK4IX7SC.js');

// src/transformers/features/AssertTransformer.ts
var AssertTransformer;
(function(AssertTransformer2) {
  AssertTransformer2.transform = (props) => _chunkLIKGYUCKjs.GenericTransformer.scalar(props.equals ? props.guard ? "assertGuardEquals" : "assertEquals" : props.guard ? "assertGuard" : "assert")((project) => (modulo) => _chunkCK4IX7SCjs.AssertProgrammer.write(project)(modulo)(props));
})(AssertTransformer || (AssertTransformer = exports.AssertTransformer = {}));



exports.AssertTransformer = AssertTransformer;
//# sourceMappingURL=chunk-QCJLVASN.js.map