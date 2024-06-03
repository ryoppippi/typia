"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunk62A7TMSKjs = require('./chunk-62A7TMSK.js');


var _chunkDXJQZ2DFjs = require('./chunk-DXJQZ2DF.js');


var _chunkUUZFPK7Njs = require('./chunk-UUZFPK7N.js');


var _chunk6GHU2XFNjs = require('./chunk-6GHU2XFN.js');


var _chunkSIGOR7QQjs = require('./chunk-SIGOR7QQ.js');


var _chunkUNOXPWQEjs = require('./chunk-UNOXPWQE.js');


var _chunk2F43GCPEjs = require('./chunk-2F43GCPE.js');


var _chunkH3SMZNB3js = require('./chunk-H3SMZNB3.js');


var _chunkX72M22NMjs = require('./chunk-X72M22NM.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/programmers/helpers/UnionExplorer.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var UnionExplorer;
(function(UnionExplorer2) {
  UnionExplorer2.object = (config, level = 0) => (input, targets, explore) => {
    if (targets.length === 1) return config.objector.decoder()(input, targets[0], explore);
    const expected = `(${targets.map((t) => t.name).join(" | ")})`;
    const specList = _chunkDXJQZ2DFjs.UnionPredicator.object(targets);
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
      const accessor = _chunkUUZFPK7Njs.IdentifierFactory.access(input)(key);
      const pred = spec.neighbour ? config.objector.checker()(accessor, spec.property.value, {
        ...explore,
        tracable: false,
        postfix: _chunkUUZFPK7Njs.IdentifierFactory.postfix(key)
      }) : (config.objector.required || ((exp) => exp))(_chunk2F43GCPEjs.ExpressionFactory.isRequired(accessor));
      return _typescript2.default.factory.createIfStatement((config.objector.is || ((exp) => exp))(pred), _typescript2.default.factory.createReturnStatement(config.objector.decoder()(input, spec.object, explore)), i === array.length - 1 ? remained.length ? _typescript2.default.factory.createReturnStatement(UnionExplorer2.object(config, level + 1)(input, remained, explore)) : config.objector.failure(input, expected, explore) : void 0);
    }).reverse().reduce((a, b) => _typescript2.default.factory.createIfStatement(b.expression, b.thenStatement, a));
    return _typescript2.default.factory.createCallExpression(_typescript2.default.factory.createArrowFunction(void 0, void 0, [], void 0, void 0, _typescript2.default.factory.createBlock([
      condition
    ], true)), void 0, void 0);
  };
  UnionExplorer2.tuple = (props) => _chunk62A7TMSKjs.check_union_array_like.call(void 0, {
    transform: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (x) => x, "transform"),
    element: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (x) => x, "element"),
    size: null,
    front: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (input) => input, "front"),
    array: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (input) => input, "array"),
    name: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (t) => t.type.name, "name")
  })(props);
  UnionExplorer2.array = (props) => _chunk62A7TMSKjs.check_union_array_like.call(void 0, {
    transform: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (x) => x, "transform"),
    element: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (x) => x.type.value, "element"),
    size: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (input) => _chunkUUZFPK7Njs.IdentifierFactory.access(input)("length"), "size"),
    front: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (input) => _typescript2.default.factory.createElementAccessExpression(input, 0), "front"),
    array: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (input) => input, "array"),
    name: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (t) => t.type.name, "name")
  })(props);
  UnionExplorer2.array_or_tuple = (props) => _chunk62A7TMSKjs.check_union_array_like.call(void 0, {
    transform: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (x) => x, "transform"),
    element: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (x) => x instanceof _chunkUNOXPWQEjs.MetadataArray ? x.type.value : x, "element"),
    size: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (input) => _chunkUUZFPK7Njs.IdentifierFactory.access(input)("length"), "size"),
    front: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (input) => _typescript2.default.factory.createElementAccessExpression(input, 0), "front"),
    array: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (input) => input, "array"),
    name: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (m) => m.type.name, "name")
  })(props);
  UnionExplorer2.set = (props) => _chunk62A7TMSKjs.check_union_array_like.call(void 0, {
    transform: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (value) => _chunkUNOXPWQEjs.MetadataArray.create({
      tags: [],
      type: _chunkX72M22NMjs.MetadataArrayType.create({
        name: `Set<${value.getName()}>`,
        index: null,
        recursive: false,
        nullables: [],
        value
      })
    }), "transform"),
    element: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (array) => array.type.value, "element"),
    size: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (input) => _chunkUUZFPK7Njs.IdentifierFactory.access(input)("size"), "size"),
    front: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (input) => _chunkUUZFPK7Njs.IdentifierFactory.access(_typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(_typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(input)("values"), void 0, void 0))("next"), void 0, void 0))("value"), "front"),
    array: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (input) => _typescript2.default.factory.createArrayLiteralExpression([
      _typescript2.default.factory.createSpreadElement(input)
    ], false), "array"),
    name: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (_m, e) => `Set<${e.getName()}>`, "name")
  })(props);
  UnionExplorer2.map = (props) => _chunk62A7TMSKjs.check_union_array_like.call(void 0, {
    element: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (array) => array.type.value.tuples[0].type.elements, "element"),
    size: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (input) => _chunkUUZFPK7Njs.IdentifierFactory.access(input)("size"), "size"),
    front: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (input) => _chunkUUZFPK7Njs.IdentifierFactory.access(_typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(_typescript2.default.factory.createCallExpression(_chunkUUZFPK7Njs.IdentifierFactory.access(input)("entries"), void 0, void 0))("next"), void 0, void 0))("value"), "front"),
    array: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (input) => _typescript2.default.factory.createArrayLiteralExpression([
      _typescript2.default.factory.createSpreadElement(input)
    ], false), "array"),
    name: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (_m, [k, v]) => `Map<${k.getName()}, ${v.getName()}>`, "name"),
    transform: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (m) => _chunkUNOXPWQEjs.MetadataArray.create({
      tags: [],
      type: _chunkX72M22NMjs.MetadataArrayType.create({
        name: `Map<${m.key.getName()}, ${m.value.getName()}>`,
        index: null,
        recursive: false,
        nullables: [],
        value: _chunk6GHU2XFNjs.Metadata.create({
          ..._chunk6GHU2XFNjs.Metadata.initialize(),
          tuples: [
            (() => {
              const tuple = _chunkSIGOR7QQjs.MetadataTuple.create({
                tags: [],
                type: _chunkH3SMZNB3js.MetadataTupleType.create({
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
})(UnionExplorer || (UnionExplorer = exports.UnionExplorer = {}));



exports.UnionExplorer = UnionExplorer;
//# sourceMappingURL=chunk-3K5SH635.js.map