import {
  stringify_dynamic_properties
} from "./chunk-DO2SF76A.mjs";
import {
  stringify_regular_properties
} from "./chunk-MMJ3T5V3.mjs";
import {
  TemplateFactory
} from "./chunk-IDSD77P4.mjs";
import {
  IdentifierFactory
} from "./chunk-F63GUEWK.mjs";

// src/programmers/helpers/StringifyJoinder.ts
import ts from "typescript";
var StringifyJoiner;
(function(StringifyJoiner2) {
  StringifyJoiner2.object = (importer) => (_input, entries) => {
    if (entries.length === 0) return ts.factory.createStringLiteral("{}");
    const regular = entries.filter((entry) => entry.key.isSoleLiteral());
    const dynamic = entries.filter((entry) => !entry.key.isSoleLiteral());
    const expressions = [
      ...stringify_regular_properties(regular, dynamic),
      ...dynamic.length ? [
        stringify_dynamic_properties(dynamic, regular.map((r) => r.key.getSoleLiteral()))
      ] : []
    ];
    const filtered = regular.length && regular[regular.length - 1].meta.isRequired() && dynamic.length === 0 || regular.length === 0 && dynamic.length ? expressions : [
      ts.factory.createCallExpression(importer.use("tail"), void 0, [
        TemplateFactory.generate(expressions)
      ])
    ];
    return TemplateFactory.generate([
      ts.factory.createStringLiteral(`{`),
      ...filtered,
      ts.factory.createStringLiteral(`}`)
    ]);
  };
  StringifyJoiner2.array = (input, arrow) => TemplateFactory.generate([
    ts.factory.createStringLiteral(`[`),
    ts.factory.createCallExpression(ts.factory.createPropertyAccessExpression(ts.factory.createCallExpression(IdentifierFactory.access(input)("map"), void 0, [
      arrow
    ]), ts.factory.createIdentifier("join")), void 0, [
      ts.factory.createStringLiteral(`,`)
    ]),
    ts.factory.createStringLiteral(`]`)
  ]);
  StringifyJoiner2.tuple = (children, rest) => {
    if (children.length === 0) return ts.factory.createStringLiteral("[]");
    if (rest === null && children.every((child) => ts.isStringLiteral(child))) return ts.factory.createStringLiteral("[" + children.map((child) => child.text).join(",") + "]");
    const elements = [
      ts.factory.createStringLiteral(`[`)
    ];
    children.forEach((child, i) => {
      elements.push(child);
      if (i !== children.length - 1) elements.push(ts.factory.createStringLiteral(`,`));
    });
    if (rest !== null) elements.push(rest);
    elements.push(ts.factory.createStringLiteral(`]`));
    return TemplateFactory.generate(elements);
  };
})(StringifyJoiner || (StringifyJoiner = {}));

export {
  StringifyJoiner
};
//# sourceMappingURL=chunk-U4AZZR7O.mjs.map