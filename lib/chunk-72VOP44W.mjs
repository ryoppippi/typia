import {
  StatementFactory
} from "./chunk-RR3Z23V6.mjs";
import {
  IdentifierFactory
} from "./chunk-F63GUEWK.mjs";
import {
  MetadataTuple
} from "./chunk-4Q3FYUW7.mjs";
import {
  MetadataArray
} from "./chunk-HXFVCUNO.mjs";
import {
  ExpressionFactory
} from "./chunk-TJUGWBRO.mjs";
import {
  MetadataArrayType
} from "./chunk-S6FVASNO.mjs";
import {
  TypeFactory
} from "./chunk-DDMKXAY2.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/programmers/internal/check_union_array_like.ts
import ts from "typescript";
var check_union_array_like = /* @__PURE__ */ __name((accessor) => (props) => (parameters) => (input, origins, explore) => {
  const targets = origins.map(accessor.transform);
  if (targets.length === 1) return ts.factory.createArrowFunction(void 0, void 0, parameters, void 0, void 0, props.decoder(accessor.array(input), targets[0], explore));
  const array = ts.factory.createIdentifier("array");
  const top = ts.factory.createIdentifier("top");
  const statements = [];
  const tupleList = targets.filter((t) => t instanceof MetadataTuple);
  const arrayList = targets.filter((t) => t instanceof MetadataArray);
  const predicate = /* @__PURE__ */ __name((meta) => ts.factory.createAsExpression(ts.factory.createArrayLiteralExpression([
    ts.factory.createArrowFunction(void 0, void 0, [
      IdentifierFactory.parameter("top", meta instanceof MetadataArrayType ? TypeFactory.keyword("any") : ts.factory.createTypeReferenceNode("any[]"))
    ], TypeFactory.keyword("any"), void 0, props.checker(ts.factory.createIdentifier("top"), accessor.element(meta), {
      ...explore,
      tracable: false,
      postfix: meta instanceof MetadataArrayType ? `"[0]"` : ""
    }, array)),
    ts.factory.createArrowFunction(void 0, void 0, [
      IdentifierFactory.parameter("entire", ts.factory.createTypeReferenceNode("any[]"))
    ], TypeFactory.keyword("any"), void 0, props.decoder(ts.factory.createIdentifier("entire"), meta, {
      ...explore,
      tracable: true
    }))
  ], true), ts.factory.createTypeReferenceNode("const")), "predicate");
  const iterate = /* @__PURE__ */ __name((init) => (from) => (stmt) => ts.factory.createForOfStatement(void 0, ts.factory.createVariableDeclarationList([
    ts.factory.createVariableDeclaration(init)
  ], ts.NodeFlags.Const), from, stmt), "iterate");
  if (tupleList.length) statements.push(StatementFactory.constant("array", accessor.array(input)), StatementFactory.constant("tuplePredicators", ts.factory.createArrayLiteralExpression(tupleList.map((x) => predicate(x)), true)), iterate("pred")(ts.factory.createIdentifier("tuplePredicators"))(ts.factory.createIfStatement(ts.factory.createCallExpression(ts.factory.createIdentifier("pred[0]"), void 0, [
    array
  ]), ts.factory.createReturnStatement(ts.factory.createCallExpression(ts.factory.createIdentifier(`pred[1]`), void 0, [
    array
  ])))));
  if (arrayList.length) {
    if (tupleList.length === 0) statements.push(StatementFactory.constant("array", accessor.array(input)));
    statements.push(StatementFactory.constant("top", accessor.front(input)), ts.factory.createIfStatement(ts.factory.createStrictEquality(ExpressionFactory.number(0), accessor.size(input)), ts.isReturnStatement(props.empty) ? props.empty : ts.factory.createReturnStatement(props.empty)), StatementFactory.constant("arrayPredicators", ts.factory.createArrayLiteralExpression(arrayList.map((x) => predicate(x)), true)), StatementFactory.constant("passed", ts.factory.createCallExpression(IdentifierFactory.access(ts.factory.createIdentifier("arrayPredicators"))("filter"), void 0, [
      ts.factory.createArrowFunction(void 0, void 0, [
        IdentifierFactory.parameter("pred")
      ], void 0, void 0, ts.factory.createCallExpression(ts.factory.createIdentifier("pred[0]"), void 0, [
        top
      ]))
    ])), ts.factory.createIfStatement(ts.factory.createStrictEquality(ExpressionFactory.number(1), ts.factory.createIdentifier("passed.length")), ts.factory.createReturnStatement(ts.factory.createCallExpression(ts.factory.createElementAccessExpression(ts.factory.createNonNullExpression(ts.factory.createIdentifier("passed[0]")), 1), void 0, [
      array
    ])), ts.factory.createIfStatement(ts.factory.createLessThan(ExpressionFactory.number(1), ts.factory.createIdentifier("passed.length")), iterate("pred")(ts.factory.createIdentifier("passed"))(ts.factory.createIfStatement(ts.factory.createCallExpression(IdentifierFactory.access(array)("every"), void 0, [
      ts.factory.createArrowFunction(void 0, void 0, [
        IdentifierFactory.parameter("value", TypeFactory.keyword("any"))
      ], void 0, void 0, ts.factory.createStrictEquality(props.success, ts.factory.createCallExpression(ts.factory.createIdentifier("pred[0]"), void 0, [
        ts.factory.createIdentifier("value")
      ])))
    ]), ts.factory.createReturnStatement(ts.factory.createCallExpression(ts.factory.createIdentifier(`pred[1]`), void 0, [
      ts.factory.createIdentifier("array")
    ])))))));
  }
  statements.push(props.failure(input, `(${targets.map((t) => accessor.name(t, accessor.element(t))).join(" | ")})`, explore));
  return ts.factory.createArrowFunction(void 0, void 0, parameters, void 0, void 0, ts.factory.createBlock(statements, true));
}, "check_union_array_like");

export {
  check_union_array_like
};
//# sourceMappingURL=chunk-72VOP44W.mjs.map