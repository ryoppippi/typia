"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLIKGYUCKjs = require('./chunk-LIKGYUCK.js');


var _chunkCK4IX7SCjs = require('./chunk-CK4IX7SC.js');

// src/transformers/features/CreateAssertTransformer.ts
var CreateAssertTransformer;
(function(CreateAssertTransformer2) {
  CreateAssertTransformer2.transform = (props) => _chunkLIKGYUCKjs.GenericTransformer.factory(props.equals ? props.guard ? "createAssertGuardEquals" : "createAssertEquals" : props.guard ? "createAssertGuard" : "createAssert")((project) => (modulo) => _chunkCK4IX7SCjs.AssertProgrammer.write(project)(modulo)(props));
})(CreateAssertTransformer || (CreateAssertTransformer = exports.CreateAssertTransformer = {}));



exports.CreateAssertTransformer = CreateAssertTransformer;
//# sourceMappingURL=chunk-SBI4OVNH.js.map