"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunkHLD5PGTQjs = require('./chunk-HLD5PGTQ.js');

// src/transformers/NodeTransformer.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var NodeTransformer;
(function(NodeTransformer2) {
  NodeTransformer2.transform = (project) => (expression) => _typescript2.default.isCallExpression(expression) && expression.parent ? _chunkHLD5PGTQjs.CallExpressionTransformer.transform(project)(expression) : expression;
})(NodeTransformer || (NodeTransformer = exports.NodeTransformer = {}));



exports.NodeTransformer = NodeTransformer;
//# sourceMappingURL=chunk-2P7YMZW2.js.map