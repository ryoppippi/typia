"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunkLNLLC5FRjs = require('./chunk-LNLLC5FR.js');


var _chunkMZIGL4DUjs = require('./chunk-MZIGL4DU.js');


var _chunkWRVFOBNHjs = require('./chunk-WRVFOBNH.js');


var _chunk6GHU2XFNjs = require('./chunk-6GHU2XFN.js');


var _chunk6P6Q2LJHjs = require('./chunk-6P6Q2LJH.js');


var _chunk2F43GCPEjs = require('./chunk-2F43GCPE.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/factories/MetadataFactory.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var MetadataFactory;
(function(MetadataFactory2) {
  MetadataFactory2.analyze = (checker, context) => (options) => (collection) => (type) => {
    const errors = [];
    const meta = _chunkWRVFOBNHjs.explore_metadata.call(void 0, checker)(options)(collection)(errors)(type, {
      top: true,
      object: null,
      property: null,
      nested: null,
      escaped: false,
      aliased: false
    });
    _chunkMZIGL4DUjs.iterate_metadata_collection.call(void 0, errors)(collection);
    _chunkLNLLC5FRjs.iterate_metadata_sort.call(void 0, collection)(meta);
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
    const meta = _chunk6GHU2XFNjs.Metadata.initialize();
    meta.constants.push(_chunk6P6Q2LJHjs.MetadataConstant.from({
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
  const validate = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (context) => (options) => (functor) => (meta) => {
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
  const validateMeta = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (context) => (options) => (visitor) => (meta, explore) => {
    const result = [];
    if (context !== void 0) for (const atomic of meta.atomics) for (const row of atomic.tags) for (const tag of row.filter((t) => t.validate !== void 0 && t.predicate === void 0)) try {
      tag.predicate = _chunk2F43GCPEjs.ExpressionFactory.transpile(context)(tag.validate);
    } catch (e) {
      result.push(`Unable to transpile type tag script: ${JSON.stringify(tag.validate)}`);
      tag.predicate = () => _typescript2.default.factory.createTrue();
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
  const validateAlias = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (context) => (options) => (visitor) => (alias, explore) => {
    if (visitor.aliases.has(alias)) return;
    visitor.aliases.add(alias);
    validateMeta(context)(options)(visitor)(alias.value, {
      ...explore,
      nested: alias,
      aliased: true
    });
  }, "validateAlias");
  const validateArray = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (context) => (options) => (visitor) => (array, explore) => {
    if (visitor.arrays.has(array)) return;
    visitor.arrays.add(array);
    validateMeta(context)(options)(visitor)(array.value, {
      ...explore,
      nested: array,
      top: false
    });
  }, "validateArray");
  const validateTuple = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (context) => (options) => (visitor) => (tuple, explore) => {
    if (visitor.tuples.has(tuple)) return;
    visitor.tuples.add(tuple);
    for (const elem of tuple.elements) validateMeta(context)(options)(visitor)(elem, {
      ...explore,
      nested: tuple,
      top: false
    });
  }, "validateTuple");
  const validateObject = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (context) => (options) => (visitor) => (object) => {
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
      const errors = options.validate(_chunk6GHU2XFNjs.Metadata.create({
        ..._chunk6GHU2XFNjs.Metadata.initialize(),
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
})(MetadataFactory || (MetadataFactory = exports.MetadataFactory = {}));



exports.MetadataFactory = MetadataFactory;
//# sourceMappingURL=chunk-6TJDJHWO.js.map