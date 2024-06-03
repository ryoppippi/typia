import {
  check_union_array_like
} from "./chunk-72VOP44W.mjs";
import {
  UnionPredicator
} from "./chunk-IM4PWYNS.mjs";
import {
  IdentifierFactory
} from "./chunk-F63GUEWK.mjs";
import {
  Metadata
} from "./chunk-RD644GUB.mjs";
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
  MetadataTupleType
} from "./chunk-Q72Q7WWM.mjs";
import {
  MetadataArrayType
} from "./chunk-S6FVASNO.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/programmers/helpers/UnionExplorer.ts
import ts from "typescript";
var UnionExplorer;
(function(UnionExplorer2) {
  UnionExplorer2.object = (config, level = 0) => (input, targets, explore) => {
    if (targets.length === 1) return config.objector.decoder()(input, targets[0], explore);
    const expected = `(${targets.map((t) => t.name).join(" | ")})`;
    const specList = UnionPredicator.object(targets);
    if (specList.length === 0) {
      const condition2 = config.objector.unionizer(input, targets, {
        ...explore,
        tracable: false
      });
      return config.objector.full ? config.objector.full(condition2)(input, expected, explore) : condition2;
    }
    const remained = targets.filter((t) => specList.find((s) => s.object === t) === void 0);
    const condition = specList.filter((spec) => spec.property.key.getSoleLiteral() !== null).map((spec, i, array) => {
      const key = spec.property.key.getSoleLiteral();
      const accessor = IdentifierFactory.access(input)(key);
      const pred = spec.neighbour ? config.objector.checker()(accessor, spec.property.value, {
        ...explore,
        tracable: false,
        postfix: IdentifierFactory.postfix(key)
      }) : (config.objector.required || ((exp) => exp))(ExpressionFactory.isRequired(accessor));
      return ts.factory.createIfStatement((config.objector.is || ((exp) => exp))(pred), ts.factory.createReturnStatement(config.objector.decoder()(input, spec.object, explore)), i === array.length - 1 ? remained.length ? ts.factory.createReturnStatement(UnionExplorer2.object(config, level + 1)(input, remained, explore)) : config.objector.failure(input, expected, explore) : void 0);
    }).reverse().reduce((a, b) => ts.factory.createIfStatement(b.expression, b.thenStatement, a));
    return ts.factory.createCallExpression(ts.factory.createArrowFunction(void 0, void 0, [], void 0, void 0, ts.factory.createBlock([
      condition
    ], true)), void 0, void 0);
  };
  UnionExplorer2.tuple = (props) => check_union_array_like({
    transform: /* @__PURE__ */ __name((x) => x, "transform"),
    element: /* @__PURE__ */ __name((x) => x, "element"),
    size: null,
    front: /* @__PURE__ */ __name((input) => input, "front"),
    array: /* @__PURE__ */ __name((input) => input, "array"),
    name: /* @__PURE__ */ __name((t) => t.type.name, "name")
  })(props);
  UnionExplorer2.array = (props) => check_union_array_like({
    transform: /* @__PURE__ */ __name((x) => x, "transform"),
    element: /* @__PURE__ */ __name((x) => x.type.value, "element"),
    size: /* @__PURE__ */ __name((input) => IdentifierFactory.access(input)("length"), "size"),
    front: /* @__PURE__ */ __name((input) => ts.factory.createElementAccessExpression(input, 0), "front"),
    array: /* @__PURE__ */ __name((input) => input, "array"),
    name: /* @__PURE__ */ __name((t) => t.type.name, "name")
  })(props);
  UnionExplorer2.array_or_tuple = (props) => check_union_array_like({
    transform: /* @__PURE__ */ __name((x) => x, "transform"),
    element: /* @__PURE__ */ __name((x) => x instanceof MetadataArray ? x.type.value : x, "element"),
    size: /* @__PURE__ */ __name((input) => IdentifierFactory.access(input)("length"), "size"),
    front: /* @__PURE__ */ __name((input) => ts.factory.createElementAccessExpression(input, 0), "front"),
    array: /* @__PURE__ */ __name((input) => input, "array"),
    name: /* @__PURE__ */ __name((m) => m.type.name, "name")
  })(props);
  UnionExplorer2.set = (props) => check_union_array_like({
    transform: /* @__PURE__ */ __name((value) => MetadataArray.create({
      tags: [],
      type: MetadataArrayType.create({
        name: `Set<${value.getName()}>`,
        index: null,
        recursive: false,
        nullables: [],
        value
      })
    }), "transform"),
    element: /* @__PURE__ */ __name((array) => array.type.value, "element"),
    size: /* @__PURE__ */ __name((input) => IdentifierFactory.access(input)("size"), "size"),
    front: /* @__PURE__ */ __name((input) => IdentifierFactory.access(ts.factory.createCallExpression(IdentifierFactory.access(ts.factory.createCallExpression(IdentifierFactory.access(input)("values"), void 0, void 0))("next"), void 0, void 0))("value"), "front"),
    array: /* @__PURE__ */ __name((input) => ts.factory.createArrayLiteralExpression([
      ts.factory.createSpreadElement(input)
    ], false), "array"),
    name: /* @__PURE__ */ __name((_m, e) => `Set<${e.getName()}>`, "name")
  })(props);
  UnionExplorer2.map = (props) => check_union_array_like({
    element: /* @__PURE__ */ __name((array) => array.type.value.tuples[0].type.elements, "element"),
    size: /* @__PURE__ */ __name((input) => IdentifierFactory.access(input)("size"), "size"),
    front: /* @__PURE__ */ __name((input) => IdentifierFactory.access(ts.factory.createCallExpression(IdentifierFactory.access(ts.factory.createCallExpression(IdentifierFactory.access(input)("entries"), void 0, void 0))("next"), void 0, void 0))("value"), "front"),
    array: /* @__PURE__ */ __name((input) => ts.factory.createArrayLiteralExpression([
      ts.factory.createSpreadElement(input)
    ], false), "array"),
    name: /* @__PURE__ */ __name((_m, [k, v]) => `Map<${k.getName()}, ${v.getName()}>`, "name"),
    transform: /* @__PURE__ */ __name((m) => MetadataArray.create({
      tags: [],
      type: MetadataArrayType.create({
        name: `Map<${m.key.getName()}, ${m.value.getName()}>`,
        index: null,
        recursive: false,
        nullables: [],
        value: Metadata.create({
          ...Metadata.initialize(),
          tuples: [
            (() => {
              const tuple = MetadataTuple.create({
                tags: [],
                type: MetadataTupleType.create({
                  name: `[${m.key.getName()}, ${m.value.getName()}]`,
                  index: null,
                  recursive: false,
                  nullables: [],
                  elements: [
                    m.key,
                    m.value
                  ]
                })
              });
              tuple.type.of_map = true;
              return tuple;
            })()
          ]
        })
      })
    }), "transform")
  })(props);
})(UnionExplorer || (UnionExplorer = {}));

export {
  UnionExplorer
};
//# sourceMappingURL=chunk-5BI4D63L.mjs.map