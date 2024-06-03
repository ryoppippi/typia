import {
  IdentifierFactory
} from "./chunk-F63GUEWK.mjs";
import {
  ExpressionFactory
} from "./chunk-TJUGWBRO.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/factories/LiteralFactory.ts
import ts from "typescript";
var LiteralFactory;
(function(LiteralFactory2) {
  LiteralFactory2.generate = (input) => {
    if (input === null) return ts.factory.createNull();
    else if (ts.isIdentifier(input)) return input;
    else if (input instanceof Array) return generate_array(input);
    else if (typeof input === "object") return generate_object(input);
    else if (typeof input === "string") return generate_string(input);
    else if (typeof input === "boolean") return generate_value(input);
    else if (typeof input === "number") return generate_value(input);
    else if (typeof input === "bigint") return generate_bigint(input);
    else if (typeof input === "function") return ts.factory.createIdentifier("undefined");
    else throw new TypeError("Error on LiteralFactory.generate(): unknown type.");
  };
  const generate_object = /* @__PURE__ */ __name((obj) => ts.factory.createObjectLiteralExpression(Object.entries(obj).filter((tuple) => tuple[1] !== void 0).map(([key, value]) => ts.factory.createPropertyAssignment(IdentifierFactory.identifier(key), LiteralFactory2.generate(value))), true), "generate_object");
  const generate_array = /* @__PURE__ */ __name((array) => ts.factory.createArrayLiteralExpression(array.map(LiteralFactory2.generate), true), "generate_array");
  const generate_value = /* @__PURE__ */ __name((value) => ts.factory.createIdentifier(value.toString()), "generate_value");
  const generate_bigint = /* @__PURE__ */ __name((value) => ExpressionFactory.bigint(value), "generate_bigint");
  const generate_string = /* @__PURE__ */ __name((value) => ts.factory.createStringLiteral(value), "generate_string");
})(LiteralFactory || (LiteralFactory = {}));

export {
  LiteralFactory
};
//# sourceMappingURL=chunk-NTPNM66C.mjs.map