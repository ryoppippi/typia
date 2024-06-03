import {
  IdentifierFactory
} from "./chunk-F63GUEWK.mjs";
import {
  Escaper
} from "./chunk-DISTKAQW.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/programmers/internal/feature_object_entries.ts
import ts from "typescript";
var feature_object_entries = /* @__PURE__ */ __name((config) => (importer) => (obj) => (input, from = "object") => obj.properties.map((prop) => {
  const sole = prop.key.getSoleLiteral();
  const propInput = sole === null ? ts.factory.createIdentifier("value") : Escaper.variable(sole) ? ts.factory.createPropertyAccessExpression(input, ts.factory.createIdentifier(sole)) : ts.factory.createElementAccessExpression(input, ts.factory.createStringLiteral(sole));
  return {
    input: propInput,
    key: prop.key,
    meta: prop.value,
    expression: config.decoder()(propInput, prop.value, {
      tracable: config.path || config.trace,
      source: "function",
      from,
      postfix: config.trace ? sole !== null ? IdentifierFactory.postfix(sole) : (() => {
        importer.use("join");
        return `$join(key)`;
      })() : ""
    })
  };
}), "feature_object_entries");

export {
  feature_object_entries
};
//# sourceMappingURL=chunk-3T5PTULG.mjs.map