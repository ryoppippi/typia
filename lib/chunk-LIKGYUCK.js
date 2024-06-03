"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }

var _chunkH3MUGVKWjs = require('./chunk-H3MUGVKW.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/transformers/internal/GenericTransformer.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var GenericTransformer;
(function(GenericTransformer2) {
  GenericTransformer2.scalar = (method) => (programmer) => (project) => (modulo) => (expression) => {
    if (expression.arguments.length === 0) throw new (0, _chunkH3MUGVKWjs.TransformerError)({
      code: `typia.${method}`,
      message: `no input value.`
    });
    const [type, node, generic] = expression.typeArguments && expression.typeArguments[0] ? [
      project.checker.getTypeFromTypeNode(expression.typeArguments[0]),
      expression.typeArguments[0],
      true
    ] : [
      project.checker.getTypeAtLocation(expression.arguments[0]),
      expression.arguments[0],
      false
    ];
    if (type.isTypeParameter()) throw new (0, _chunkH3MUGVKWjs.TransformerError)({
      code: `typia.${method}`,
      message: `non-specified generic argument.`
    });
    return _typescript2.default.factory.createCallExpression(programmer(project)(modulo)(type, generic ? node.getFullText().trim() : name(project.checker)(type)(node)), void 0, expression.arguments);
  };
  GenericTransformer2.factory = (method) => (programmer) => (project) => (modulo) => (expression) => {
    if (!_optionalChain([expression, 'access', _ => _.typeArguments, 'optionalAccess', _2 => _2[0]])) throw new (0, _chunkH3MUGVKWjs.TransformerError)({
      code: `typia.${method}`,
      message: `generic argument is not specified.`
    });
    const node = expression.typeArguments[0];
    const type = project.checker.getTypeFromTypeNode(node);
    if (type.isTypeParameter()) throw new (0, _chunkH3MUGVKWjs.TransformerError)({
      code: `typia.${method}`,
      message: `non-specified generic argument.`
    });
    return programmer(project)(modulo)(type, node.getFullText().trim(), expression.arguments[0]);
  };
  const name = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (checker) => (type) => (node) => checker.typeToString(type, node, _typescript2.default.TypeFormatFlags.NodeBuilderFlagsMask), "name");
})(GenericTransformer || (GenericTransformer = exports.GenericTransformer = {}));



exports.GenericTransformer = GenericTransformer;
//# sourceMappingURL=chunk-LIKGYUCK.js.map