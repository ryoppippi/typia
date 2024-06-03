"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkH3MUGVKWjs = require('./chunk-H3MUGVKW.js');


var _chunkPK6R5VEJjs = require('./chunk-PK6R5VEJ.js');

// src/transformers/features/functional/FunctionalGenericTransformer.ts
var FunctionalGenericTransformer;
(function(FunctionalGenericTransformer2) {
  FunctionalGenericTransformer2.transform = (props) => (project) => (modulo) => (expression) => {
    if (expression.arguments.length === 0) throw new (0, _chunkH3MUGVKWjs.TransformerError)({
      code: `typia.functional.${props.method}`,
      message: `no input value.`
    });
    const type = expression.typeArguments && expression.typeArguments[0] ? project.checker.getTypeFromTypeNode(expression.typeArguments[0]) : project.checker.getTypeAtLocation(expression.arguments[0]);
    if (_chunkPK6R5VEJjs.TypeFactory.isFunction(type) === false) throw new (0, _chunkH3MUGVKWjs.TransformerError)({
      code: `typia.functional.${props.method}`,
      message: `input value is not a function.`
    });
    return props.programmer(project)(modulo)(props.equals)(expression.arguments[0], type.symbol.declarations[0], expression.arguments[1]);
  };
})(FunctionalGenericTransformer || (FunctionalGenericTransformer = exports.FunctionalGenericTransformer = {}));



exports.FunctionalGenericTransformer = FunctionalGenericTransformer;
//# sourceMappingURL=chunk-UWVKQAJY.js.map