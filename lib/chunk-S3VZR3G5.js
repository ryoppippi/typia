"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunkUUZFPK7Njs = require('./chunk-UUZFPK7N.js');


var _chunk2F43GCPEjs = require('./chunk-2F43GCPE.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/factories/LiteralFactory.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var LiteralFactory;
(function(LiteralFactory2) {
  LiteralFactory2.generate = (input) => {
    if (input === null) return _typescript2.default.factory.createNull();
    else if (_typescript2.default.isIdentifier(input)) return input;
    else if (input instanceof Array) return generate_array(input);
    else if (typeof input === "object") return generate_object(input);
    else if (typeof input === "string") return generate_string(input);
    else if (typeof input === "boolean") return generate_value(input);
    else if (typeof input === "number") return generate_value(input);
    else if (typeof input === "bigint") return generate_bigint(input);
    else if (typeof input === "function") return _typescript2.default.factory.createIdentifier("undefined");
    else throw new TypeError("Error on LiteralFactory.generate(): unknown type.");
  };
  const generate_object = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (obj) => _typescript2.default.factory.createObjectLiteralExpression(Object.entries(obj).filter((tuple) => tuple[1] !== void 0).map(([key, value]) => _typescript2.default.factory.createPropertyAssignment(_chunkUUZFPK7Njs.IdentifierFactory.identifier(key), LiteralFactory2.generate(value))), true), "generate_object");
  const generate_array = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (array) => _typescript2.default.factory.createArrayLiteralExpression(array.map(LiteralFactory2.generate), true), "generate_array");
  const generate_value = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (value) => _typescript2.default.factory.createIdentifier(value.toString()), "generate_value");
  const generate_bigint = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (value) => _chunk2F43GCPEjs.ExpressionFactory.bigint(value), "generate_bigint");
  const generate_string = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (value) => _typescript2.default.factory.createStringLiteral(value), "generate_string");
})(LiteralFactory || (LiteralFactory = exports.LiteralFactory = {}));



exports.LiteralFactory = LiteralFactory;
//# sourceMappingURL=chunk-S3VZR3G5.js.map