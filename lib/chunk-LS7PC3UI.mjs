import {
  JsonApplicationProgrammer
} from "./chunk-IM3GPYX6.mjs";
import {
  TransformerError
} from "./chunk-77LTYCTZ.mjs";
import {
  LiteralFactory
} from "./chunk-NTPNM66C.mjs";
import {
  MetadataFactory
} from "./chunk-MNHXN4HB.mjs";
import {
  MetadataCollection
} from "./chunk-MX63JLF5.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/transformers/features/json/JsonApplicationTransformer.ts
import ts from "typescript";
var JsonApplicationTransformer;
(function(JsonApplicationTransformer2) {
  JsonApplicationTransformer2.transform = (project) => (expression) => {
    if (!expression.typeArguments?.length) throw new TransformerError({
      code: "typia.json.application",
      message: "no generic argument."
    });
    const top = expression.typeArguments[0];
    if (!ts.isTupleTypeNode(top)) return expression;
    else if (top.elements.some((child) => !ts.isTypeNode(child))) return expression;
    const types = top.elements.map((child) => project.checker.getTypeFromTypeNode(child));
    if (types.some((t) => t.isTypeParameter())) throw new TransformerError({
      code: "typia.json.application",
      message: "non-specified generic argument(s)."
    });
    const version = get_parameter({
      checker: project.checker,
      name: "Version",
      is: /* @__PURE__ */ __name((str) => str === "3.0" || str === "3.1", "is"),
      cast: /* @__PURE__ */ __name((str) => str, "cast"),
      default: /* @__PURE__ */ __name(() => "3.1", "default")
    })(expression.typeArguments[1]);
    const collection = new MetadataCollection({
      replace: MetadataCollection.replace
    });
    const results = types.map((type) => MetadataFactory.analyze(project.checker, project.context)({
      escape: true,
      constant: true,
      absorb: false,
      validate: JsonApplicationProgrammer.validate
    })(collection)(type));
    const metadatas = [];
    const errors = [];
    for (const r of results) {
      if (r.success === false) errors.push(...r.errors);
      else metadatas.push(r.data);
    }
    if (errors.length) throw TransformerError.from("typia.json.application")(errors);
    const app = JsonApplicationProgrammer.write(version)(metadatas);
    return LiteralFactory.generate(app);
  };
  const get_parameter = /* @__PURE__ */ __name((props) => (node) => {
    if (!node) return props.default();
    const type = props.checker.getTypeFromTypeNode(node);
    if (!type.isLiteral() && (type.getFlags() & ts.TypeFlags.BooleanLiteral) === 0) throw new TransformerError({
      code: "typia.json.application",
      message: `generic argument "${props.name}" must be constant.`
    });
    const value = type.isLiteral() ? type.value : props.checker.typeToString(type);
    if (typeof value !== "string" || props.is(value) === false) throw new TransformerError({
      code: "typia.json.application",
      message: `invalid value on generic argument "${props.name}".`
    });
    return props.cast(value);
  }, "get_parameter");
})(JsonApplicationTransformer || (JsonApplicationTransformer = {}));

export {
  JsonApplicationTransformer
};
//# sourceMappingURL=chunk-LS7PC3UI.mjs.map