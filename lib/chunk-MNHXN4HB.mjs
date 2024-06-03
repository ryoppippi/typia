import {
  iterate_metadata_sort
} from "./chunk-EJ25VJCZ.mjs";
import {
  iterate_metadata_collection
} from "./chunk-OPSGYYH6.mjs";
import {
  explore_metadata
} from "./chunk-CTAPHOI6.mjs";
import {
  Metadata
} from "./chunk-RD644GUB.mjs";
import {
  MetadataConstant
} from "./chunk-NKBJZZWD.mjs";
import {
  ExpressionFactory
} from "./chunk-TJUGWBRO.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/factories/MetadataFactory.ts
import ts from "typescript";
var MetadataFactory;
(function(MetadataFactory2) {
  MetadataFactory2.analyze = (checker, context) => (options) => (collection) => (type) => {
    const errors = [];
    const meta = explore_metadata(checker)(options)(collection)(errors)(type, {
      top: true,
      object: null,
      property: null,
      nested: null,
      escaped: false,
      aliased: false
    });
    iterate_metadata_collection(errors)(collection);
    iterate_metadata_sort(collection)(meta);
    if (options.validate) errors.push(...validate(context)(options)(options.validate)(meta));
    return errors.length ? {
      success: false,
      errors
    } : {
      success: true,
      data: meta
    };
  };
  MetadataFactory2.soleLiteral = (value) => {
    const meta = Metadata.initialize();
    meta.constants.push(MetadataConstant.from({
      values: [
        {
          value,
          tags: void 0
        }
      ],
      type: "string"
    }));
    return meta;
  };
  const validate = /* @__PURE__ */ __name((context) => (options) => (functor) => (meta) => {
    const visitor = {
      functor,
      errors: [],
      objects: /* @__PURE__ */ new Set(),
      arrays: /* @__PURE__ */ new Set(),
      tuples: /* @__PURE__ */ new Set(),
      aliases: /* @__PURE__ */ new Set()
    };
    validateMeta(context)(options)(visitor)(meta, {
      object: null,
      property: null,
      nested: null,
      top: true,
      aliased: false,
      escaped: false
    });
    return visitor.errors;
  }, "validate");
  const validateMeta = /* @__PURE__ */ __name((context) => (options) => (visitor) => (meta, explore) => {
    const result = [];
    if (context !== void 0) for (const atomic of meta.atomics) for (const row of atomic.tags) for (const tag of row.filter((t) => t.validate !== void 0 && t.predicate === void 0)) try {
      tag.predicate = ExpressionFactory.transpile(context)(tag.validate);
    } catch {
      result.push(`Unable to transpile type tag script: ${JSON.stringify(tag.validate)}`);
      tag.predicate = () => ts.factory.createTrue();
    }
    result.push(...visitor.functor(meta, explore));
    if (result.length) visitor.errors.push({
      name: meta.getName(),
      explore: {
        ...explore
      },
      messages: [
        ...new Set(result)
      ]
    });
    for (const alias of meta.aliases) validateAlias(context)(options)(visitor)(alias, explore);
    for (const array of meta.arrays) validateArray(context)(options)(visitor)(array.type, explore);
    for (const tuple of meta.tuples) validateTuple(context)(options)(visitor)(tuple.type, explore);
    for (const obj of meta.objects) validateObject(context)(options)(visitor)(obj);
    for (const set of meta.sets) validateMeta(context)(options)(visitor)(set, explore);
    for (const map of meta.maps) {
      validateMeta(context)(options)(visitor)(map.key, explore);
      validateMeta(context)(options)(visitor)(map.value, explore);
    }
    if (options.escape === true && meta.escaped !== null) validateMeta(context)(options)(visitor)(meta.escaped.returns, {
      ...explore,
      escaped: true
    });
  }, "validateMeta");
  const validateAlias = /* @__PURE__ */ __name((context) => (options) => (visitor) => (alias, explore) => {
    if (visitor.aliases.has(alias)) return;
    visitor.aliases.add(alias);
    validateMeta(context)(options)(visitor)(alias.value, {
      ...explore,
      nested: alias,
      aliased: true
    });
  }, "validateAlias");
  const validateArray = /* @__PURE__ */ __name((context) => (options) => (visitor) => (array, explore) => {
    if (visitor.arrays.has(array)) return;
    visitor.arrays.add(array);
    validateMeta(context)(options)(visitor)(array.value, {
      ...explore,
      nested: array,
      top: false
    });
  }, "validateArray");
  const validateTuple = /* @__PURE__ */ __name((context) => (options) => (visitor) => (tuple, explore) => {
    if (visitor.tuples.has(tuple)) return;
    visitor.tuples.add(tuple);
    for (const elem of tuple.elements) validateMeta(context)(options)(visitor)(elem, {
      ...explore,
      nested: tuple,
      top: false
    });
  }, "validateTuple");
  const validateObject = /* @__PURE__ */ __name((context) => (options) => (visitor) => (object) => {
    if (visitor.objects.has(object)) return;
    visitor.objects.add(object);
    if (options.validate) {
      const explore = {
        object,
        top: false,
        property: null,
        nested: null,
        escaped: false,
        aliased: false
      };
      const errors = options.validate(Metadata.create({
        ...Metadata.initialize(),
        objects: [
          object
        ]
      }), explore);
      if (errors.length) visitor.errors.push({
        name: object.name,
        explore,
        messages: [
          ...new Set(errors)
        ]
      });
    }
    for (const property of object.properties) validateMeta(context)(options)(visitor)(property.value, {
      object,
      property: property.key.isSoleLiteral() ? property.key.getSoleLiteral() : {},
      nested: null,
      top: false,
      aliased: false,
      escaped: false
    });
  }, "validateObject");
})(MetadataFactory || (MetadataFactory = {}));

export {
  MetadataFactory
};
//# sourceMappingURL=chunk-MNHXN4HB.mjs.map