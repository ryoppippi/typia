"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6YCBJ5E7js = require('./chunk-6YCBJ5E7.js');


var _chunkH3MUGVKWjs = require('./chunk-H3MUGVKW.js');

// src/transformers/features/protobuf/ProtobufMessageTransformer.ts
var ProtobufMessageTransformer;
(function(ProtobufMessageTransformer2) {
  ProtobufMessageTransformer2.transform = (project) => (_modulo) => (expression) => {
    if (!expression.typeArguments || !expression.typeArguments[0]) throw new (0, _chunkH3MUGVKWjs.TransformerError)({
      code: "typia.protobuf.message",
      message: "generic argument is not specified."
    });
    const type = project.checker.getTypeFromTypeNode(expression.typeArguments[0]);
    if (type.isTypeParameter()) throw new (0, _chunkH3MUGVKWjs.TransformerError)({
      code: "tyipa.protobuf.message",
      message: "non-specified generic argument."
    });
    return _chunk6YCBJ5E7js.ProtobufMessageProgrammer.write(project)(type);
  };
})(ProtobufMessageTransformer || (ProtobufMessageTransformer = exports.ProtobufMessageTransformer = {}));



exports.ProtobufMessageTransformer = ProtobufMessageTransformer;
//# sourceMappingURL=chunk-H6DKHRYZ.js.map