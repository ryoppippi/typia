"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }

var _chunkIR52KWTEjs = require('./chunk-IR52KWTE.js');


var _chunkPJL4QWE4js = require('./chunk-PJL4QWE4.js');


var _chunkYPUNGFNHjs = require('./chunk-YPUNGFNH.js');


var _chunkLQ63DG4Ejs = require('./chunk-LQ63DG4E.js');


var _chunkZBAPGQRZjs = require('./chunk-ZBAPGQRZ.js');


var _chunkBQIGA573js = require('./chunk-BQIGA573.js');


var _chunkGXEQC72Cjs = require('./chunk-GXEQC72C.js');



var _chunk6GHU2XFNjs = require('./chunk-6GHU2XFN.js');


var _chunkTBFJDOPAjs = require('./chunk-TBFJDOPA.js');


var _chunk6P6Q2LJHjs = require('./chunk-6P6Q2LJH.js');


var _chunk56YW7YRRjs = require('./chunk-56YW7YRR.js');


var _chunkSIGOR7QQjs = require('./chunk-SIGOR7QQ.js');


var _chunkUNOXPWQEjs = require('./chunk-UNOXPWQE.js');


var _chunkA7ORGSGMjs = require('./chunk-A7ORGSGM.js');


var _chunkERQBF2DGjs = require('./chunk-ERQBF2DG.js');


var _chunkPK6R5VEJjs = require('./chunk-PK6R5VEJ.js');


var _chunk7TNPR4MVjs = require('./chunk-7TNPR4MV.js');


var _chunkVLKDT3H3js = require('./chunk-VLKDT3H3.js');


var _chunk272AIHZNjs = require('./chunk-272AIHZN.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/factories/internal/metadata/iterate_metadata_alias.ts
var iterate_metadata_alias = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (checker) => (options) => (collection) => (errors) => (meta, type, explore) => {
  if (options.absorb !== false || type.aliasSymbol === void 0) return false;
  const node = _optionalChain([type, 'access', _ => _.aliasSymbol, 'access', _2 => _2.declarations, 'optionalAccess', _3 => _3[0]]);
  if (node === void 0) return false;
  const alias = emplace_metadata_alias(checker)(options)(collection)(errors)(type, meta.nullable, explore);
  _chunkA7ORGSGMjs.ArrayUtil.add(meta.aliases, alias, (elem) => elem.name === alias.name);
  return true;
}, "iterate_metadata_alias");

// src/factories/internal/metadata/emplace_metadata_array_type.ts
var emplace_metadata_array_type = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (checker) => (options) => (collection) => (errors) => (type, nullable, explore) => {
  const [array, newbie, setValue] = collection.emplaceArray(checker, type);
  _chunkA7ORGSGMjs.ArrayUtil.add(array.nullables, nullable);
  if (newbie === false) return array;
  const value = explore_metadata(checker)(options)(collection)(errors)(type.getNumberIndexType(), {
    ...explore,
    escaped: false,
    aliased: false
  });
  setValue(value);
  return array;
}, "emplace_metadata_array_type");

// src/factories/internal/metadata/iterate_metadata_array.ts
var iterate_metadata_array = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (checker) => (options) => (collection) => (errors) => (meta, type, explore) => {
  if (checker.isArrayType(type) === false) {
    const array = find_array_extended(checker)(/* @__PURE__ */ new Map())(type);
    if (array !== null) return iterate_metadata_array(checker)(options)(collection)(errors)(meta, array, explore);
    return false;
  }
  const arrayType = emplace_metadata_array_type(checker)(options)(collection)(errors)(type, meta.nullable, explore);
  _chunkA7ORGSGMjs.ArrayUtil.add(meta.arrays, _chunkUNOXPWQEjs.MetadataArray.create({
    type: arrayType,
    tags: []
  }), (elem) => elem.type.name === arrayType.name);
  return true;
}, "iterate_metadata_array");
var find_array_extended = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (checker) => (memory) => (type) => {
  const cached = memory.get(type);
  if (cached !== void 0) return null;
  memory.set(type, null);
  const res = (() => {
    if (type.isClassOrInterface() === false) return null;
    for (const t of _nullishCoalesce(type.resolvedBaseTypes, () => ( []))) if (checker.isArrayType(t)) return t;
    else {
      const res2 = find_array_extended(checker)(memory)(t);
      if (res2 !== null) return res2;
    }
    return null;
  })();
  memory.set(type, res);
  return res;
}, "find_array_extended");

// src/factories/internal/metadata/iterate_metadata_escape.ts
var iterate_metadata_escape = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (checker) => (options) => (collection) => (errors) => (meta, type, explore) => {
  if (options.escape === false || explore.escaped === true) return false;
  const escaped = _chunkPK6R5VEJjs.TypeFactory.getReturnType(checker)(type)("toJSON");
  if (escaped === null) return false;
  if (meta.escaped === null) {
    _chunk7TNPR4MVjs.Writable.call(void 0, meta).escaped = _chunk6GHU2XFNjs.MetadataEscaped.create({
      original: _chunk6GHU2XFNjs.Metadata.initialize(),
      returns: _chunk6GHU2XFNjs.Metadata.initialize()
    });
  }
  iterate_metadata(checker)(options)(collection)(errors)(meta.escaped.original, type, {
    ...explore,
    escaped: true
  });
  iterate_metadata(checker)(options)(collection)(errors)(meta.escaped.returns, escaped, {
    ...explore,
    escaped: true
  });
  return true;
}, "iterate_metadata_escape");

// src/factories/internal/metadata/iterate_metadata_intersection.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var iterate_metadata_intersection = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (checker) => (options) => (collection) => (errors) => (meta, type, explore) => {
  if (!type.isIntersection()) return false;
  else if (type.types.every((child) => (child.getFlags() & _typescript2.default.TypeFlags.Object) !== 0 && !checker.isArrayType(child) && !checker.isTupleType(child))) return false;
  const fakeCollection = new (0, _chunkERQBF2DGjs.MetadataCollection)();
  const fakeErrors = [];
  const children = [
    ...new Map(type.types.map((t) => {
      const m = explore_metadata(checker)({
        ...options,
        absorb: true
      })(fakeCollection)(fakeErrors)(t, {
        ...explore,
        aliased: false
      });
      return [
        m.getName(),
        m
      ];
    })).values()
  ];
  if (fakeErrors.length) {
    errors.push(...fakeErrors);
    return true;
  }
  if (children.length === 1) {
    iterate_metadata(checker)(options)(collection)(errors)(meta, type.types[0], explore);
    return true;
  } else if (children.every((c) => c.objects.length === c.size())) return false;
  const individuals = children.map((child, i) => [
    child,
    i
  ]).filter(([c]) => c.size() === 1 && (c.atomics.length === 1 || c.constants.length === 1 && c.constants[0].values.length === 1 || c.arrays.length === 1));
  if (individuals.length !== 1) return false;
  const objects = children.filter((c) => c.nullable === false && c.isRequired() === true && c.objects.length && c.objects.length === c.size() && c.objects.every((o) => o.properties.every((p) => p.value.optional)));
  const arrays = new Set(individuals.map(([c]) => c.arrays.map((a) => a.type.name)).flat());
  const atomics = new Set(individuals.map(([c]) => [
    ...c.atomics.map((a) => a.type)
  ]).flat());
  const constants = individuals.filter((i) => i[0].constants.length === 1).map(([c]) => c);
  if (atomics.size + constants.length + arrays.size > 1 || individuals.length + objects.length !== children.length) {
    errors.push({
      name: children.map((c) => c.getName()).join(" & "),
      explore: {
        ...explore
      },
      messages: [
        "nonsensible intersection"
      ]
    });
    return true;
  }
  const target = arrays.size ? "array" : atomics.size ? atomics.values().next().value : constants[0].constants[0].type;
  if (target === "array") {
    const name = arrays.values().next().value;
    if (!meta.arrays.some((a) => a.type.name === name)) {
      iterate_metadata_array(checker)(options)(collection)(errors)(meta, type.types[individuals.find((i) => i[0].arrays.length === 1)[1]], {
        ...explore,
        aliased: false,
        escaped: false
      });
    }
  } else if (atomics.size) _chunkA7ORGSGMjs.ArrayUtil.add(meta.atomics, _chunkTBFJDOPAjs.MetadataAtomic.create({
    type: atomics.values().next().value,
    tags: []
  }), (a, b) => a.type === b.type);
  else _chunkA7ORGSGMjs.ArrayUtil.take(_chunkA7ORGSGMjs.ArrayUtil.take(meta.constants, (o) => o.type === target, () => _chunk6P6Q2LJHjs.MetadataConstant.create({
    type: target,
    values: []
  })).values, (o) => o.value === constants[0].constants[0].values[0].value, () => _chunk56YW7YRRjs.MetadataConstantValue.create({
    value: constants[0].constants[0].values[0].value,
    tags: []
  }));
  if (objects.length) {
    const tags = _chunkVLKDT3H3js.MetadataTypeTagFactory.analyze(errors)(target)(objects.map((om) => om.objects).flat(), explore);
    if (tags.length) if (target === "array") meta.arrays.at(-1).tags.push(tags);
    else if (atomics.size) meta.atomics.find((a) => a.type === target).tags.push(tags);
    else {
      const constant = meta.constants.find((c) => c.type === target);
      const value = constant.values.find((v) => v.value === constants[0].constants[0].values[0].value);
      value.tags ??= [];
      value.tags.push(tags);
    }
  }
  return true;
}, "iterate_metadata_intersection");

// src/factories/internal/metadata/iterate_metadata_map.ts
var iterate_metadata_map = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (checker) => (options) => (collection) => (errors) => (meta, type, explore) => {
  type = checker.getApparentType(type);
  const name = _chunkPK6R5VEJjs.TypeFactory.getFullName(checker)(type, type.getSymbol());
  const generic = type.aliasSymbol ? type.aliasTypeArguments : checker.getTypeArguments(type);
  if (name.substring(0, 4) !== "Map<" || _optionalChain([generic, 'optionalAccess', _4 => _4.length]) !== 2) return false;
  const key = generic[0];
  const value = generic[1];
  _chunkA7ORGSGMjs.ArrayUtil.set(meta.maps, {
    key: explore_metadata(checker)(options)(collection)(errors)(key, {
      ...explore,
      escaped: false,
      aliased: false
    }),
    value: explore_metadata(checker)(options)(collection)(errors)(value, {
      ...explore,
      escaped: false,
      aliased: false
    })
  }, (elem) => `Map<${elem.key.getName()}, ${elem.value.getName()}>`);
  return true;
}, "iterate_metadata_map");

// src/factories/internal/metadata/iterate_metadata_object.ts


// src/factories/internal/metadata/emplace_metadata_object.ts

var emplace_metadata_object = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (checker) => (options) => (collection) => (errors) => (parent, nullable) => {
  const [obj, newbie] = collection.emplace(checker, parent);
  _chunkA7ORGSGMjs.ArrayUtil.add(obj.nullables, nullable, (elem) => elem === nullable);
  if (newbie === false) return obj;
  const isClass = parent.isClass();
  const pred = isClass ? (node) => {
    const kind = _optionalChain([node, 'access', _5 => _5.getChildren, 'call', _6 => _6(), 'access', _7 => _7[0], 'optionalAccess', _8 => _8.getChildren, 'call', _9 => _9(), 'access', _10 => _10[0], 'optionalAccess', _11 => _11.kind]);
    return kind !== _typescript2.default.SyntaxKind.PrivateKeyword && kind !== _typescript2.default.SyntaxKind.ProtectedKeyword && isProperty(node);
  } : (node) => isProperty(node);
  const insert = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (key) => (value) => (symbol, filter) => {
    const description = symbol ? _nullishCoalesce(_chunk272AIHZNjs.CommentFactory.description(symbol), () => ( null)) : null;
    const jsDocTags = (_nullishCoalesce(_optionalChain([symbol, 'optionalAccess', _12 => _12.getJsDocTags, 'call', _13 => _13()]), () => ( []))).filter(_nullishCoalesce(filter, () => ( (() => true))));
    const property = _chunkGXEQC72Cjs.MetadataProperty.create({
      key,
      value,
      description,
      jsDocTags
    });
    obj.properties.push(property);
    return property;
  }, "insert");
  for (const prop of parent.getApparentProperties()) {
    if ((_nullishCoalesce(prop.getJsDocTags(checker), () => ( []))).find((tag) => tag.name === "internal") !== void 0) continue;
    const [node, type] = (() => {
      const node2 = _optionalChain([prop, 'access', _14 => _14.getDeclarations, 'call', _15 => _15(), 'optionalAccess', _16 => _16[0]]);
      const type2 = node2 ? checker.getTypeOfSymbolAtLocation(prop, node2) : checker.getTypeOfPropertyOfType(parent, prop.name);
      return [
        node2,
        type2
      ];
    })();
    if (node && pred(node) === false || type === void 0) continue;
    const key = _chunkZBAPGQRZjs.MetadataHelper.literal_to_metadata(prop.name);
    const value = explore_metadata(checker)(options)(collection)(errors)(type, {
      top: false,
      object: obj,
      property: prop.name,
      nested: null,
      escaped: false,
      aliased: false
    });
    _chunk7TNPR4MVjs.Writable.call(void 0, value).optional = (prop.flags & _typescript2.default.SymbolFlags.Optional) !== 0;
    insert(key)(value)(prop);
  }
  for (const index of checker.getIndexInfosOfType(parent)) {
    const analyzer = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (type) => (property) => explore_metadata(checker)(options)(collection)(errors)(type, {
      top: false,
      object: obj,
      property,
      nested: null,
      escaped: false,
      aliased: false
    }), "analyzer");
    const key = analyzer(index.keyType)(null);
    const value = analyzer(index.type)({});
    if (key.atomics.length + key.constants.map((c) => c.values.length).reduce((a, b) => a + b, 0) + key.templates.length + key.natives.filter((type) => type === "Boolean" || type === "BigInt" || type === "Number" || type === "String").length !== key.size()) errors.push({
      name: key.getName(),
      explore: {
        top: false,
        object: obj,
        property: "[key]",
        nested: null,
        escaped: false,
        aliased: false
      },
      messages: []
    });
    insert(key)(value)(_optionalChain([index, 'access', _17 => _17.declaration, 'optionalAccess', _18 => _18.parent]) ? checker.getSymbolAtLocation(index.declaration.parent) : void 0, (doc) => doc.name !== "default");
  }
  return obj;
}, "emplace_metadata_object");
var isProperty = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (node) => _typescript2.default.isParameter(node) || _typescript2.default.isPropertyDeclaration(node) || _typescript2.default.isPropertyAssignment(node) || _typescript2.default.isPropertySignature(node) || _typescript2.default.isTypeLiteralNode(node), "isProperty");

// src/factories/internal/metadata/iterate_metadata_object.ts
var iterate_metadata_object = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (checker) => (options) => (collection) => (errors) => (meta, type, ensure = false) => {
  if (ensure === false) {
    const filter = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (flag) => (type.getFlags() & flag) !== 0, "filter");
    if (!filter(_typescript2.default.TypeFlags.Object) && !type.isIntersection() && type.intrinsicName !== "object") return false;
  }
  const obj = emplace_metadata_object(checker)(options)(collection)(errors)(type, meta.nullable);
  _chunkA7ORGSGMjs.ArrayUtil.add(meta.objects, obj, (elem) => elem.name === obj.name);
  return true;
}, "iterate_metadata_object");

// src/factories/internal/metadata/iterate_metadata_set.ts
var iterate_metadata_set = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (checker) => (options) => (collection) => (errors) => (meta, type, explore) => {
  type = checker.getApparentType(type);
  const name = _chunkPK6R5VEJjs.TypeFactory.getFullName(checker)(type, type.getSymbol());
  const generic = type.aliasSymbol ? type.aliasTypeArguments : checker.getTypeArguments(type);
  if (name.substring(0, 4) !== "Set<" || _optionalChain([generic, 'optionalAccess', _19 => _19.length]) !== 1) return false;
  const key = generic[0];
  _chunkA7ORGSGMjs.ArrayUtil.set(meta.sets, explore_metadata(checker)(options)(collection)(errors)(key, {
    ...explore,
    escaped: false,
    aliased: false
  }), (elem) => elem.getName());
  return true;
}, "iterate_metadata_set");

// src/factories/internal/metadata/iterate_metadata_template.ts

var iterate_metadata_template = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (checker) => (options) => (collection) => (errors) => (meta, type, explore) => {
  const filter = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (flag) => (type.getFlags() & flag) !== 0, "filter");
  if (!filter(_typescript2.default.TypeFlags.TemplateLiteral)) return false;
  const template = type;
  const row = [];
  template.texts.forEach((text, i) => {
    if (text !== "") row.push(_chunkZBAPGQRZjs.MetadataHelper.literal_to_metadata(text));
    const binded = template.types[i];
    if (binded) row.push(explore_metadata(checker)(options)(collection)(errors)(binded, {
      ...explore,
      escaped: false,
      aliased: false
    }));
  });
  meta.templates.push(row);
  return true;
}, "iterate_metadata_template");

// src/factories/internal/metadata/emplace_metadata_tuple.ts

var emplace_metadata_tuple = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (checker) => (options) => (collection) => (errors) => (type, nullable, explore) => {
  const [tuple, newbie, closure] = collection.emplaceTuple(checker, type);
  _chunkA7ORGSGMjs.ArrayUtil.add(tuple.nullables, nullable);
  if (newbie === false) return tuple;
  const flagList = _nullishCoalesce(_nullishCoalesce(type.elementFlags, () => ( _optionalChain([type, 'access', _20 => _20.target, 'optionalAccess', _21 => _21.elementFlags]))), () => ( []));
  const elements = checker.getTypeArguments(type).map((elem, i) => {
    const child = explore_metadata(checker)(options)(collection)(errors)(elem, {
      ...explore,
      nested: tuple,
      aliased: false,
      escaped: false
    });
    const flag = flagList[i];
    if (flag === _typescript2.default.ElementFlags.Optional) _chunk7TNPR4MVjs.Writable.call(void 0, child).optional = true;
    if (flag !== _typescript2.default.ElementFlags.Rest) return child;
    const wrapper = _chunk6GHU2XFNjs.Metadata.initialize();
    _chunk7TNPR4MVjs.Writable.call(void 0, wrapper).rest = child;
    return wrapper;
  });
  closure(elements);
  return tuple;
}, "emplace_metadata_tuple");

// src/factories/internal/metadata/iterate_metadata_tuple.ts
var iterate_metadata_tuple = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (checker) => (options) => (collection) => (errors) => (meta, type, explore) => {
  if (!checker.isTupleType(type)) return false;
  const tupleType = emplace_metadata_tuple(checker)(options)(collection)(errors)(type, meta.nullable, explore);
  _chunkA7ORGSGMjs.ArrayUtil.add(meta.tuples, _chunkSIGOR7QQjs.MetadataTuple.create({
    type: tupleType,
    tags: []
  }), (elem) => elem.type.name === tupleType.name);
  return true;
}, "iterate_metadata_tuple");

// src/factories/internal/metadata/iterate_metadata_union.ts
var iterate_metadata_union = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (checker) => (options) => (collection) => (errors) => (meta, type, explore) => {
  if (!type.isUnion()) return false;
  type.types.forEach((t) => iterate_metadata(checker)(options)(collection)(errors)(meta, t, {
    ...explore,
    aliased: false
  }));
  return true;
}, "iterate_metadata_union");

// src/factories/internal/metadata/iterate_metadata.ts
var iterate_metadata = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (checker) => (options) => (collection) => (errors) => (meta, type, explore) => {
  if (type.isTypeParameter() === true) {
    errors.push({
      name: _chunkPK6R5VEJjs.TypeFactory.getFullName(checker)(type),
      explore: {
        ...explore
      },
      messages: [
        "non-specified generic argument found."
      ]
    });
    return;
  } else if (explore.aliased !== true && iterate_metadata_alias(checker)(options)(collection)(errors)(meta, type, explore) || iterate_metadata_intersection(checker)(options)(collection)(errors)(meta, type, explore) || iterate_metadata_union(checker)(options)(collection)(errors)(meta, type, explore) || iterate_metadata_escape(checker)(options)(collection)(errors)(meta, type, explore)) return;
  _chunkLQ63DG4Ejs.iterate_metadata_coalesce.call(void 0, meta, type) || _chunkIR52KWTEjs.iterate_metadata_constant.call(void 0, checker)(options)(meta, type) || iterate_metadata_template(checker)(options)(collection)(errors)(meta, type, explore) || _chunkYPUNGFNHjs.iterate_metadata_atomic.call(void 0, meta, type) || iterate_metadata_tuple(checker)(options)(collection)(errors)(meta, type, explore) || iterate_metadata_array(checker)(options)(collection)(errors)(meta, type, explore) || _chunkPJL4QWE4js.iterate_metadata_native.call(void 0, checker)(meta, type) || iterate_metadata_map(checker)(options)(collection)(errors)(meta, type, explore) || iterate_metadata_set(checker)(options)(collection)(errors)(meta, type, explore) || iterate_metadata_object(checker)(options)(collection)(errors)(meta, type);
}, "iterate_metadata");

// src/factories/internal/metadata/explore_metadata.ts
var explore_metadata = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (checker) => (options) => (collection) => (errors) => (type, explore) => {
  const meta = _chunk6GHU2XFNjs.Metadata.initialize(explore.escaped);
  if (type === null) return meta;
  iterate_metadata(checker)(options)(collection)(errors)(meta, type, explore);
  _chunkBQIGA573js.emend_metadata_atomics.call(void 0, meta);
  if (meta.escaped) {
    _chunkBQIGA573js.emend_metadata_atomics.call(void 0, meta.escaped.original);
    _chunkBQIGA573js.emend_metadata_atomics.call(void 0, meta.escaped.returns);
  }
  return meta;
}, "explore_metadata");

// src/factories/internal/metadata/emplace_metadata_alias.ts
var emplace_metadata_alias = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (checker) => (options) => (collection) => (errors) => (type, nullable, explore) => {
  const [alias, newbie, closure] = collection.emplaceAlias(checker, type, type.aliasSymbol);
  _chunkA7ORGSGMjs.ArrayUtil.add(alias.nullables, nullable);
  if (newbie === false) return alias;
  const value = explore_metadata(checker)(options)(collection)(errors)(type, {
    ...explore,
    escaped: false,
    aliased: true
  });
  closure(value);
  return alias;
}, "emplace_metadata_alias");


















exports.emplace_metadata_alias = emplace_metadata_alias; exports.iterate_metadata_alias = iterate_metadata_alias; exports.emplace_metadata_array_type = emplace_metadata_array_type; exports.iterate_metadata_array = iterate_metadata_array; exports.iterate_metadata_escape = iterate_metadata_escape; exports.iterate_metadata_intersection = iterate_metadata_intersection; exports.iterate_metadata_map = iterate_metadata_map; exports.emplace_metadata_object = emplace_metadata_object; exports.iterate_metadata_object = iterate_metadata_object; exports.iterate_metadata_set = iterate_metadata_set; exports.iterate_metadata_template = iterate_metadata_template; exports.emplace_metadata_tuple = emplace_metadata_tuple; exports.iterate_metadata_tuple = iterate_metadata_tuple; exports.iterate_metadata_union = iterate_metadata_union; exports.iterate_metadata = iterate_metadata; exports.explore_metadata = explore_metadata;
//# sourceMappingURL=chunk-WRVFOBNH.js.map