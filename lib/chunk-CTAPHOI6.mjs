import {
  iterate_metadata_constant
} from "./chunk-TQMHAZYB.mjs";
import {
  iterate_metadata_native
} from "./chunk-LNNJBRN6.mjs";
import {
  iterate_metadata_atomic
} from "./chunk-WRGBZPTJ.mjs";
import {
  iterate_metadata_coalesce
} from "./chunk-7Q3CFTLP.mjs";
import {
  MetadataHelper
} from "./chunk-LGRKTYPZ.mjs";
import {
  emend_metadata_atomics
} from "./chunk-CNLFSF6C.mjs";
import {
  MetadataProperty
} from "./chunk-WJSELHNL.mjs";
import {
  Metadata,
  MetadataEscaped
} from "./chunk-RD644GUB.mjs";
import {
  MetadataAtomic
} from "./chunk-X7O4QE24.mjs";
import {
  MetadataConstant
} from "./chunk-NKBJZZWD.mjs";
import {
  MetadataConstantValue
} from "./chunk-AKMTTBJF.mjs";
import {
  MetadataTuple
} from "./chunk-4Q3FYUW7.mjs";
import {
  MetadataArray
} from "./chunk-HXFVCUNO.mjs";
import {
  ArrayUtil
} from "./chunk-BDIZKMW2.mjs";
import {
  MetadataCollection
} from "./chunk-MX63JLF5.mjs";
import {
  TypeFactory
} from "./chunk-DDMKXAY2.mjs";
import {
  Writable
} from "./chunk-QOF767UG.mjs";
import {
  MetadataTypeTagFactory
} from "./chunk-RCWUP74J.mjs";
import {
  CommentFactory
} from "./chunk-U3HW6PHG.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/factories/internal/metadata/iterate_metadata_alias.ts
var iterate_metadata_alias = /* @__PURE__ */ __name((checker) => (options) => (collection) => (errors) => (meta, type, explore) => {
  if (options.absorb !== false || type.aliasSymbol === void 0) return false;
  const node = type.aliasSymbol.declarations?.[0];
  if (node === void 0) return false;
  const alias = emplace_metadata_alias(checker)(options)(collection)(errors)(type, meta.nullable, explore);
  ArrayUtil.add(meta.aliases, alias, (elem) => elem.name === alias.name);
  return true;
}, "iterate_metadata_alias");

// src/factories/internal/metadata/emplace_metadata_array_type.ts
var emplace_metadata_array_type = /* @__PURE__ */ __name((checker) => (options) => (collection) => (errors) => (type, nullable, explore) => {
  const [array, newbie, setValue] = collection.emplaceArray(checker, type);
  ArrayUtil.add(array.nullables, nullable);
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
var iterate_metadata_array = /* @__PURE__ */ __name((checker) => (options) => (collection) => (errors) => (meta, type, explore) => {
  if (checker.isArrayType(type) === false) {
    const array = find_array_extended(checker)(/* @__PURE__ */ new Map())(type);
    if (array !== null) return iterate_metadata_array(checker)(options)(collection)(errors)(meta, array, explore);
    return false;
  }
  const arrayType = emplace_metadata_array_type(checker)(options)(collection)(errors)(type, meta.nullable, explore);
  ArrayUtil.add(meta.arrays, MetadataArray.create({
    type: arrayType,
    tags: []
  }), (elem) => elem.type.name === arrayType.name);
  return true;
}, "iterate_metadata_array");
var find_array_extended = /* @__PURE__ */ __name((checker) => (memory) => (type) => {
  const cached = memory.get(type);
  if (cached !== void 0) return null;
  memory.set(type, null);
  const res = (() => {
    if (type.isClassOrInterface() === false) return null;
    for (const t of type.resolvedBaseTypes ?? []) if (checker.isArrayType(t)) return t;
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
var iterate_metadata_escape = /* @__PURE__ */ __name((checker) => (options) => (collection) => (errors) => (meta, type, explore) => {
  if (options.escape === false || explore.escaped === true) return false;
  const escaped = TypeFactory.getReturnType(checker)(type)("toJSON");
  if (escaped === null) return false;
  if (meta.escaped === null) {
    Writable(meta).escaped = MetadataEscaped.create({
      original: Metadata.initialize(),
      returns: Metadata.initialize()
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
import ts from "typescript";
var iterate_metadata_intersection = /* @__PURE__ */ __name((checker) => (options) => (collection) => (errors) => (meta, type, explore) => {
  if (!type.isIntersection()) return false;
  else if (type.types.every((child) => (child.getFlags() & ts.TypeFlags.Object) !== 0 && !checker.isArrayType(child) && !checker.isTupleType(child))) return false;
  const fakeCollection = new MetadataCollection();
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
  } else if (atomics.size) ArrayUtil.add(meta.atomics, MetadataAtomic.create({
    type: atomics.values().next().value,
    tags: []
  }), (a, b) => a.type === b.type);
  else ArrayUtil.take(ArrayUtil.take(meta.constants, (o) => o.type === target, () => MetadataConstant.create({
    type: target,
    values: []
  })).values, (o) => o.value === constants[0].constants[0].values[0].value, () => MetadataConstantValue.create({
    value: constants[0].constants[0].values[0].value,
    tags: []
  }));
  if (objects.length) {
    const tags = MetadataTypeTagFactory.analyze(errors)(target)(objects.map((om) => om.objects).flat(), explore);
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
var iterate_metadata_map = /* @__PURE__ */ __name((checker) => (options) => (collection) => (errors) => (meta, type, explore) => {
  type = checker.getApparentType(type);
  const name = TypeFactory.getFullName(checker)(type, type.getSymbol());
  const generic = type.aliasSymbol ? type.aliasTypeArguments : checker.getTypeArguments(type);
  if (name.substring(0, 4) !== "Map<" || generic?.length !== 2) return false;
  const key = generic[0];
  const value = generic[1];
  ArrayUtil.set(meta.maps, {
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
import ts3 from "typescript";

// src/factories/internal/metadata/emplace_metadata_object.ts
import ts2 from "typescript";
var emplace_metadata_object = /* @__PURE__ */ __name((checker) => (options) => (collection) => (errors) => (parent, nullable) => {
  const [obj, newbie] = collection.emplace(checker, parent);
  ArrayUtil.add(obj.nullables, nullable, (elem) => elem === nullable);
  if (newbie === false) return obj;
  const isClass = parent.isClass();
  const pred = isClass ? (node) => {
    const kind = node.getChildren()[0]?.getChildren()[0]?.kind;
    return kind !== ts2.SyntaxKind.PrivateKeyword && kind !== ts2.SyntaxKind.ProtectedKeyword && isProperty(node);
  } : (node) => isProperty(node);
  const insert = /* @__PURE__ */ __name((key) => (value) => (symbol, filter) => {
    const description = symbol ? CommentFactory.description(symbol) ?? null : null;
    const jsDocTags = (symbol?.getJsDocTags() ?? []).filter(filter ?? (() => true));
    const property = MetadataProperty.create({
      key,
      value,
      description,
      jsDocTags
    });
    obj.properties.push(property);
    return property;
  }, "insert");
  for (const prop of parent.getApparentProperties()) {
    if ((prop.getJsDocTags(checker) ?? []).find((tag) => tag.name === "internal") !== void 0) continue;
    const [node, type] = (() => {
      const node2 = prop.getDeclarations()?.[0];
      const type2 = node2 ? checker.getTypeOfSymbolAtLocation(prop, node2) : checker.getTypeOfPropertyOfType(parent, prop.name);
      return [
        node2,
        type2
      ];
    })();
    if (node && pred(node) === false || type === void 0) continue;
    const key = MetadataHelper.literal_to_metadata(prop.name);
    const value = explore_metadata(checker)(options)(collection)(errors)(type, {
      top: false,
      object: obj,
      property: prop.name,
      nested: null,
      escaped: false,
      aliased: false
    });
    Writable(value).optional = (prop.flags & ts2.SymbolFlags.Optional) !== 0;
    insert(key)(value)(prop);
  }
  for (const index of checker.getIndexInfosOfType(parent)) {
    const analyzer = /* @__PURE__ */ __name((type) => (property) => explore_metadata(checker)(options)(collection)(errors)(type, {
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
    insert(key)(value)(index.declaration?.parent ? checker.getSymbolAtLocation(index.declaration.parent) : void 0, (doc) => doc.name !== "default");
  }
  return obj;
}, "emplace_metadata_object");
var isProperty = /* @__PURE__ */ __name((node) => ts2.isParameter(node) || ts2.isPropertyDeclaration(node) || ts2.isPropertyAssignment(node) || ts2.isPropertySignature(node) || ts2.isTypeLiteralNode(node), "isProperty");

// src/factories/internal/metadata/iterate_metadata_object.ts
var iterate_metadata_object = /* @__PURE__ */ __name((checker) => (options) => (collection) => (errors) => (meta, type, ensure = false) => {
  if (ensure === false) {
    const filter = /* @__PURE__ */ __name((flag) => (type.getFlags() & flag) !== 0, "filter");
    if (!filter(ts3.TypeFlags.Object) && !type.isIntersection() && type.intrinsicName !== "object") return false;
  }
  const obj = emplace_metadata_object(checker)(options)(collection)(errors)(type, meta.nullable);
  ArrayUtil.add(meta.objects, obj, (elem) => elem.name === obj.name);
  return true;
}, "iterate_metadata_object");

// src/factories/internal/metadata/iterate_metadata_set.ts
var iterate_metadata_set = /* @__PURE__ */ __name((checker) => (options) => (collection) => (errors) => (meta, type, explore) => {
  type = checker.getApparentType(type);
  const name = TypeFactory.getFullName(checker)(type, type.getSymbol());
  const generic = type.aliasSymbol ? type.aliasTypeArguments : checker.getTypeArguments(type);
  if (name.substring(0, 4) !== "Set<" || generic?.length !== 1) return false;
  const key = generic[0];
  ArrayUtil.set(meta.sets, explore_metadata(checker)(options)(collection)(errors)(key, {
    ...explore,
    escaped: false,
    aliased: false
  }), (elem) => elem.getName());
  return true;
}, "iterate_metadata_set");

// src/factories/internal/metadata/iterate_metadata_template.ts
import ts4 from "typescript";
var iterate_metadata_template = /* @__PURE__ */ __name((checker) => (options) => (collection) => (errors) => (meta, type, explore) => {
  const filter = /* @__PURE__ */ __name((flag) => (type.getFlags() & flag) !== 0, "filter");
  if (!filter(ts4.TypeFlags.TemplateLiteral)) return false;
  const template = type;
  const row = [];
  template.texts.forEach((text, i) => {
    if (text !== "") row.push(MetadataHelper.literal_to_metadata(text));
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
import ts5 from "typescript";
var emplace_metadata_tuple = /* @__PURE__ */ __name((checker) => (options) => (collection) => (errors) => (type, nullable, explore) => {
  const [tuple, newbie, closure] = collection.emplaceTuple(checker, type);
  ArrayUtil.add(tuple.nullables, nullable);
  if (newbie === false) return tuple;
  const flagList = type.elementFlags ?? type.target?.elementFlags ?? [];
  const elements = checker.getTypeArguments(type).map((elem, i) => {
    const child = explore_metadata(checker)(options)(collection)(errors)(elem, {
      ...explore,
      nested: tuple,
      aliased: false,
      escaped: false
    });
    const flag = flagList[i];
    if (flag === ts5.ElementFlags.Optional) Writable(child).optional = true;
    if (flag !== ts5.ElementFlags.Rest) return child;
    const wrapper = Metadata.initialize();
    Writable(wrapper).rest = child;
    return wrapper;
  });
  closure(elements);
  return tuple;
}, "emplace_metadata_tuple");

// src/factories/internal/metadata/iterate_metadata_tuple.ts
var iterate_metadata_tuple = /* @__PURE__ */ __name((checker) => (options) => (collection) => (errors) => (meta, type, explore) => {
  if (!checker.isTupleType(type)) return false;
  const tupleType = emplace_metadata_tuple(checker)(options)(collection)(errors)(type, meta.nullable, explore);
  ArrayUtil.add(meta.tuples, MetadataTuple.create({
    type: tupleType,
    tags: []
  }), (elem) => elem.type.name === tupleType.name);
  return true;
}, "iterate_metadata_tuple");

// src/factories/internal/metadata/iterate_metadata_union.ts
var iterate_metadata_union = /* @__PURE__ */ __name((checker) => (options) => (collection) => (errors) => (meta, type, explore) => {
  if (!type.isUnion()) return false;
  type.types.forEach((t) => iterate_metadata(checker)(options)(collection)(errors)(meta, t, {
    ...explore,
    aliased: false
  }));
  return true;
}, "iterate_metadata_union");

// src/factories/internal/metadata/iterate_metadata.ts
var iterate_metadata = /* @__PURE__ */ __name((checker) => (options) => (collection) => (errors) => (meta, type, explore) => {
  if (type.isTypeParameter() === true) {
    errors.push({
      name: TypeFactory.getFullName(checker)(type),
      explore: {
        ...explore
      },
      messages: [
        "non-specified generic argument found."
      ]
    });
    return;
  } else if (explore.aliased !== true && iterate_metadata_alias(checker)(options)(collection)(errors)(meta, type, explore) || iterate_metadata_intersection(checker)(options)(collection)(errors)(meta, type, explore) || iterate_metadata_union(checker)(options)(collection)(errors)(meta, type, explore) || iterate_metadata_escape(checker)(options)(collection)(errors)(meta, type, explore)) return;
  iterate_metadata_coalesce(meta, type) || iterate_metadata_constant(checker)(options)(meta, type) || iterate_metadata_template(checker)(options)(collection)(errors)(meta, type, explore) || iterate_metadata_atomic(meta, type) || iterate_metadata_tuple(checker)(options)(collection)(errors)(meta, type, explore) || iterate_metadata_array(checker)(options)(collection)(errors)(meta, type, explore) || iterate_metadata_native(checker)(meta, type) || iterate_metadata_map(checker)(options)(collection)(errors)(meta, type, explore) || iterate_metadata_set(checker)(options)(collection)(errors)(meta, type, explore) || iterate_metadata_object(checker)(options)(collection)(errors)(meta, type);
}, "iterate_metadata");

// src/factories/internal/metadata/explore_metadata.ts
var explore_metadata = /* @__PURE__ */ __name((checker) => (options) => (collection) => (errors) => (type, explore) => {
  const meta = Metadata.initialize(explore.escaped);
  if (type === null) return meta;
  iterate_metadata(checker)(options)(collection)(errors)(meta, type, explore);
  emend_metadata_atomics(meta);
  if (meta.escaped) {
    emend_metadata_atomics(meta.escaped.original);
    emend_metadata_atomics(meta.escaped.returns);
  }
  return meta;
}, "explore_metadata");

// src/factories/internal/metadata/emplace_metadata_alias.ts
var emplace_metadata_alias = /* @__PURE__ */ __name((checker) => (options) => (collection) => (errors) => (type, nullable, explore) => {
  const [alias, newbie, closure] = collection.emplaceAlias(checker, type, type.aliasSymbol);
  ArrayUtil.add(alias.nullables, nullable);
  if (newbie === false) return alias;
  const value = explore_metadata(checker)(options)(collection)(errors)(type, {
    ...explore,
    escaped: false,
    aliased: true
  });
  closure(value);
  return alias;
}, "emplace_metadata_alias");

export {
  emplace_metadata_alias,
  iterate_metadata_alias,
  emplace_metadata_array_type,
  iterate_metadata_array,
  iterate_metadata_escape,
  iterate_metadata_intersection,
  iterate_metadata_map,
  emplace_metadata_object,
  iterate_metadata_object,
  iterate_metadata_set,
  iterate_metadata_template,
  emplace_metadata_tuple,
  iterate_metadata_tuple,
  iterate_metadata_union,
  iterate_metadata,
  explore_metadata
};
//# sourceMappingURL=chunk-CTAPHOI6.mjs.map