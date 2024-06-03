import {
  prune_object_properties
} from "./chunk-4YBA34UP.mjs";
import {
  metadata_to_pattern
} from "./chunk-TE33WDSA.mjs";
import {
  IdentifierFactory
} from "./chunk-F63GUEWK.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/programmers/helpers/PruneJoiner.ts
import ts from "typescript";
var PruneJoiner;
(function(PruneJoiner2) {
  PruneJoiner2.object = (input, entries, obj) => {
    const regular = entries.filter((entry) => entry.key.isSoleLiteral());
    const dynamic = entries.filter((entry) => !entry.key.isSoleLiteral());
    const statements = regular.map((entry) => ts.isBlock(entry.expression) ? [
      ...entry.expression.statements
    ] : [
      ts.factory.createExpressionStatement(entry.expression)
    ]).flat();
    if (dynamic.length) statements.push(ts.factory.createExpressionStatement(iterate_dynamic_properties({
      regular,
      dynamic
    })(input)));
    statements.push(prune_object_properties(obj));
    return ts.factory.createBlock(statements, true);
  };
  PruneJoiner2.array = (input, arrow) => ts.factory.createCallExpression(IdentifierFactory.access(input)("forEach"), void 0, [
    arrow
  ]);
  PruneJoiner2.tuple = (children, rest) => {
    const entire = [
      ...children
    ];
    if (rest !== null) entire.push(rest);
    const statements = entire.map((elem) => ts.isBlock(elem) ? [
      ...elem.statements
    ] : [
      ts.factory.createExpressionStatement(elem)
    ]).flat();
    return ts.factory.createBlock(statements, true);
  };
})(PruneJoiner || (PruneJoiner = {}));
var iterate_dynamic_properties = /* @__PURE__ */ __name((props) => (input) => ts.factory.createCallExpression(IdentifierFactory.access(ts.factory.createCallExpression(ts.factory.createIdentifier("Object.entries"), void 0, [
  input
]))("forEach"), void 0, [
  ts.factory.createArrowFunction(void 0, void 0, [
    IdentifierFactory.parameter(ts.factory.createArrayBindingPattern([
      "key",
      "value"
    ].map((l) => ts.factory.createBindingElement(void 0, void 0, ts.factory.createIdentifier(l), void 0))))
  ], void 0, void 0, ts.factory.createBlock([
    ts.factory.createIfStatement(ts.factory.createStrictEquality(ts.factory.createIdentifier("undefined"), ts.factory.createIdentifier("value")), ts.factory.createReturnStatement()),
    ...props.regular.map(({ key }) => ts.factory.createIfStatement(ts.factory.createStrictEquality(ts.factory.createStringLiteral(key.getSoleLiteral()), ts.factory.createIdentifier("key")), ts.factory.createReturnStatement())),
    ...props.dynamic.map((dynamic) => ts.factory.createIfStatement(ts.factory.createCallExpression(ts.factory.createIdentifier(`RegExp(/${metadata_to_pattern(true)(dynamic.key)}/).test`), void 0, [
      ts.factory.createIdentifier("key")
    ]), ts.isBlock(dynamic.expression) ? dynamic.expression : ts.factory.createBlock([
      ts.factory.createExpressionStatement(dynamic.expression)
    ])))
  ], true))
]), "iterate_dynamic_properties");

export {
  PruneJoiner
};
//# sourceMappingURL=chunk-SR3CGBYN.mjs.map