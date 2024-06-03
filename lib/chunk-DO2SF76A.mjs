import {
  metadata_to_pattern
} from "./chunk-TE33WDSA.mjs";
import {
  TemplateFactory
} from "./chunk-IDSD77P4.mjs";
import {
  IdentifierFactory
} from "./chunk-F63GUEWK.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/programmers/internal/stringify_dynamic_properties.ts
import ts from "typescript";
var stringify_dynamic_properties = /* @__PURE__ */ __name((dynamic, regular) => {
  const statements = [
    ts.factory.createIfStatement(ts.factory.createStrictEquality(ts.factory.createIdentifier("undefined"), ts.factory.createIdentifier("value")), ts.factory.createReturnStatement(ts.factory.createStringLiteral("")))
  ];
  const output = /* @__PURE__ */ __name(() => {
    const mapped = ts.factory.createCallExpression(IdentifierFactory.access(ts.factory.createCallExpression(ts.factory.createIdentifier("Object.entries"), void 0, [
      ts.factory.createIdentifier("input")
    ]))("map"), void 0, [
      ts.factory.createArrowFunction(void 0, void 0, [
        IdentifierFactory.parameter(ts.factory.createArrayBindingPattern([
          ts.factory.createBindingElement(void 0, void 0, "key"),
          ts.factory.createBindingElement(void 0, void 0, "value")
        ]), ts.factory.createTypeReferenceNode("[string, any]"))
      ], void 0, void 0, ts.factory.createBlock(statements))
    ]);
    const filtered = ts.factory.createCallExpression(IdentifierFactory.access(mapped)("filter"), void 0, [
      ts.factory.createArrowFunction(void 0, void 0, [
        IdentifierFactory.parameter("str")
      ], void 0, void 0, ts.factory.createStrictInequality(ts.factory.createStringLiteral(""), ts.factory.createIdentifier("str")))
    ]);
    return ts.factory.createCallExpression(IdentifierFactory.access(filtered)("join"), void 0, [
      ts.factory.createStringLiteral(",")
    ]);
  }, "output");
  if (regular.length) statements.push(ts.factory.createIfStatement(ts.factory.createCallExpression(IdentifierFactory.access(ts.factory.createArrayLiteralExpression(regular.map((key) => ts.factory.createStringLiteral(key))))("some"), void 0, [
    ts.factory.createArrowFunction(void 0, void 0, [
      IdentifierFactory.parameter("regular")
    ], void 0, void 0, ts.factory.createStrictEquality(ts.factory.createIdentifier("regular"), ts.factory.createIdentifier("key")))
  ]), ts.factory.createReturnStatement(ts.factory.createStringLiteral(""))));
  const simple = dynamic.length === 1 && dynamic[0].key.size() === 1 && dynamic[0].key.atomics[0]?.type === "string";
  if (simple === true) {
    statements.push(stringify(dynamic[0]));
    return output();
  }
  for (const entry of dynamic) {
    const condition = ts.factory.createIfStatement(ts.factory.createCallExpression(ts.factory.createIdentifier(`RegExp(/${metadata_to_pattern(true)(entry.key)}/).test`), void 0, [
      ts.factory.createIdentifier("key")
    ]), stringify(entry));
    statements.push(condition);
  }
  statements.push(ts.factory.createReturnStatement(ts.factory.createStringLiteral("")));
  return output();
}, "stringify_dynamic_properties");
var stringify = /* @__PURE__ */ __name((entry) => ts.factory.createReturnStatement(TemplateFactory.generate([
  ts.factory.createCallExpression(ts.factory.createIdentifier("JSON.stringify"), [], [
    ts.factory.createIdentifier("key")
  ]),
  ts.factory.createStringLiteral(":"),
  entry.expression
])), "stringify");

export {
  stringify_dynamic_properties
};
//# sourceMappingURL=chunk-DO2SF76A.mjs.map