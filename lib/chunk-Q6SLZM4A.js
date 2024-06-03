"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }

var _chunk52UMHPEKjs = require('./chunk-52UMHPEK.js');


var _chunkH3MUGVKWjs = require('./chunk-H3MUGVKW.js');


var _chunkS3VZR3G5js = require('./chunk-S3VZR3G5.js');


var _chunk6TJDJHWOjs = require('./chunk-6TJDJHWO.js');


var _chunkERQBF2DGjs = require('./chunk-ERQBF2DG.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/transformers/features/json/JsonApplicationTransformer.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var JsonApplicationTransformer;
(function(JsonApplicationTransformer2) {
  JsonApplicationTransformer2.transform = (project) => (expression) => {
    if (!_optionalChain([expression, 'access', _ => _.typeArguments, 'optionalAccess', _2 => _2.length])) throw new (0, _chunkH3MUGVKWjs.TransformerError)({
      code: "typia.json.application",
      message: "no generic argument."
    });
    const top = expression.typeArguments[0];
    if (!_typescript2.default.isTupleTypeNode(top)) return expression;
    else if (top.elements.some((child) => !_typescript2.default.isTypeNode(child))) return expression;
    const types = top.elements.map((child) => project.checker.getTypeFromTypeNode(child));
    if (types.some((t) => t.isTypeParameter())) throw new (0, _chunkH3MUGVKWjs.TransformerError)({
      code: "typia.json.application",
      message: "non-specified generic argument(s)."
    });
    const version = get_parameter({
      checker: project.checker,
      name: "Version",
      is: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (str) => str === "3.0" || str === "3.1", "is"),
      cast: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (str) => str, "cast"),
      default: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, () => "3.1", "default")
    })(expression.typeArguments[1]);
    const collection = new (0, _chunkERQBF2DGjs.MetadataCollection)({
      replace: _chunkERQBF2DGjs.MetadataCollection.replace
    });
    const results = types.map((type) => _chunk6TJDJHWOjs.MetadataFactory.analyze(project.checker, project.context)({
      escape: true,
      constant: true,
      absorb: false,
      validate: _chunk52UMHPEKjs.JsonApplicationProgrammer.validate
    })(collection)(type));
    const metadatas = [];
    const errors = [];
    for (const r of results) {
      if (r.success === false) errors.push(...r.errors);
      else metadatas.push(r.data);
    }
    if (errors.length) throw _chunkH3MUGVKWjs.TransformerError.from("typia.json.application")(errors);
    const app = _chunk52UMHPEKjs.JsonApplicationProgrammer.write(version)(metadatas);
    return _chunkS3VZR3G5js.LiteralFactory.generate(app);
  };
  const get_parameter = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (props) => (node) => {
    if (!node) return props.default();
    const type = props.checker.getTypeFromTypeNode(node);
    if (!type.isLiteral() && (type.getFlags() & _typescript2.default.TypeFlags.BooleanLiteral) === 0) throw new (0, _chunkH3MUGVKWjs.TransformerError)({
      code: "typia.json.application",
      message: `generic argument "${props.name}" must be constant.`
    });
    const value = type.isLiteral() ? type.value : props.checker.typeToString(type);
    if (typeof value !== "string" || props.is(value) === false) throw new (0, _chunkH3MUGVKWjs.TransformerError)({
      code: "typia.json.application",
      message: `invalid value on generic argument "${props.name}".`
    });
    return props.cast(value);
  }, "get_parameter");
})(JsonApplicationTransformer || (JsonApplicationTransformer = exports.JsonApplicationTransformer = {}));



exports.JsonApplicationTransformer = JsonApplicationTransformer;
//# sourceMappingURL=chunk-Q6SLZM4A.js.map