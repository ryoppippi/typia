import {
  check_number
} from "./chunk-QIVEIW2K.mjs";
import {
  check_string
} from "./chunk-Z27JFOX4.mjs";
import {
  check_template
} from "./chunk-6IDHZWBK.mjs";
import {
  check_bigint
} from "./chunk-JYYOOAJV.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/programmers/internal/check_dynamic_key.ts
import ts from "typescript";
var check_dynamic_key = /* @__PURE__ */ __name((project) => (importer) => (input, metadata) => {
  if (metadata.atomics.length !== 0 && metadata.atomics.some((a) => a.type === "string" && a.tags.filter((row) => row.every((t) => t.validate !== void 0)).length === 0) || metadata.natives.length !== 0 && metadata.natives.some((type) => type === "String")) return ts.factory.createTrue();
  const conditions = [];
  if (metadata.nullable === true) conditions.push(ts.factory.createStrictEquality(ts.factory.createStringLiteral("null"), input));
  if (metadata.isRequired() === false) conditions.push(ts.factory.createStrictEquality(ts.factory.createStringLiteral("undefined"), input));
  for (const atom of metadata.atomics) if (atom.type === "boolean") conditions.push(ts.factory.createLogicalOr(ts.factory.createStrictEquality(ts.factory.createStringLiteral("false"), input), ts.factory.createStrictEquality(ts.factory.createStringLiteral("true"), input)));
  else if (atom.type === "bigint") conditions.push(ts.factory.createLogicalAnd(ts.factory.createCallExpression(importer.use("is_bigint_string"), void 0, [
    input
  ]), atomist(check_bigint(project)(atom)(ts.factory.createCallExpression(ts.factory.createIdentifier("BigInt"), void 0, [
    input
  ])))));
  else if (atom.type === "number") conditions.push(atomist(check_number(project, true)(atom)(ts.factory.createCallExpression(ts.factory.createIdentifier("Number"), void 0, [
    input
  ]))));
  else conditions.push(atomist(check_string(project)(atom)(input)));
  for (const constant of metadata.constants) for (const { value } of constant.values) conditions.push(ts.factory.createStrictEquality(ts.factory.createStringLiteral(String(value)), input));
  if (!!metadata.templates.length) conditions.push(atomist(check_template(metadata.templates)(input)));
  for (const native of metadata.natives) if (native === "Boolean") conditions.push(ts.factory.createLogicalOr(ts.factory.createStrictEquality(ts.factory.createStringLiteral("false"), input), ts.factory.createStrictEquality(ts.factory.createStringLiteral("true"), input)));
  else if (native === "BigInt") conditions.push(ts.factory.createCallExpression(importer.use("is_bigint_string"), void 0, [
    input
  ]));
  else if (native === "Number") conditions.push(ts.factory.createStrictEquality(ts.factory.createFalse(), ts.factory.createCallExpression(ts.factory.createIdentifier("Number.isNaN"), void 0, [
    ts.factory.createCallExpression(ts.factory.createIdentifier("Number"), void 0, [
      input
    ])
  ])));
  return conditions.length === 0 ? ts.factory.createTrue() : conditions.length === 1 ? conditions[0] : conditions.reduce(ts.factory.createLogicalOr);
}, "check_dynamic_key");
var atomist = /* @__PURE__ */ __name((entry) => [
  ...entry.expression ? [
    entry.expression
  ] : [],
  ...entry.conditions.length === 0 ? [] : [
    entry.conditions.map((set) => set.map((s) => s.expression).reduce((a, b) => ts.factory.createLogicalAnd(a, b))).reduce((a, b) => ts.factory.createLogicalOr(a, b))
  ]
].reduce((x, y) => ts.factory.createLogicalAnd(x, y)), "atomist");

export {
  check_dynamic_key
};
//# sourceMappingURL=chunk-LCNHT7KH.mjs.map