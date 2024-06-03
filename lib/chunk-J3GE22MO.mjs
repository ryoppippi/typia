import {
  TransformerError
} from "./chunk-77LTYCTZ.mjs";
import {
  MetadataFactory
} from "./chunk-MNHXN4HB.mjs";
import {
  ExpressionFactory
} from "./chunk-TJUGWBRO.mjs";
import {
  MetadataCollection
} from "./chunk-MX63JLF5.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/programmers/misc/MiscLiteralsProgrammer.ts
import ts from "typescript";
var MiscLiteralsProgrammer;
(function(MiscLiteralsProgrammer2) {
  MiscLiteralsProgrammer2.write = (project) => (type) => {
    const result = MetadataFactory.analyze(project.checker, project.context)({
      escape: true,
      constant: true,
      absorb: true,
      validate: /* @__PURE__ */ __name((meta2) => {
        const length = meta2.constants.map((c) => c.values.length).reduce((a, b) => a + b, 0) + meta2.atomics.filter((a) => a.type === "boolean").length;
        if (0 === length) return [
          "no constant literal type found."
        ];
        else if (meta2.size() !== length) return [
          "only constant literal types are allowed."
        ];
        return [];
      }, "validate")
    })(new MetadataCollection())(type);
    if (result.success === false) throw TransformerError.from(`typia.misc.literals`)(result.errors);
    const meta = result.data;
    const values = /* @__PURE__ */ new Set([
      ...meta.constants.map((c) => c.values.map((v) => v.value)).flat(),
      ...meta.atomics.filter((a) => a.type === "boolean").length ? [
        true,
        false
      ] : [],
      ...meta.nullable ? [
        null
      ] : []
    ]);
    return ts.factory.createAsExpression(ts.factory.createArrayLiteralExpression([
      ...values
    ].map((v) => v === null ? ts.factory.createNull() : typeof v === "boolean" ? v ? ts.factory.createTrue() : ts.factory.createFalse() : typeof v === "number" ? ExpressionFactory.number(v) : typeof v === "bigint" ? ExpressionFactory.bigint(Number(v)) : ts.factory.createStringLiteral(v)), true), ts.factory.createTypeReferenceNode("const"));
  };
})(MiscLiteralsProgrammer || (MiscLiteralsProgrammer = {}));
var ErrorMessages;
(function(ErrorMessages2) {
  ErrorMessages2["NO"] = "no constant literal type found.";
  ErrorMessages2["ONLY"] = "only constant literal types are allowed.";
})(ErrorMessages || (ErrorMessages = {}));

export {
  MiscLiteralsProgrammer
};
//# sourceMappingURL=chunk-J3GE22MO.mjs.map