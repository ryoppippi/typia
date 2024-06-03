"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }

var _chunkYPYCEXKEjs = require('./chunk-YPYCEXKE.js');


var _chunk2Q7CDZG4js = require('./chunk-2Q7CDZG4.js');


var _chunkVGDH2KBRjs = require('./chunk-VGDH2KBR.js');


var _chunkPL2MUSTMjs = require('./chunk-PL2MUSTM.js');


var _chunkX5MQQ7TAjs = require('./chunk-X5MQQ7TA.js');


var _chunkR73M5EMOjs = require('./chunk-R73M5EMO.js');


var _chunk3KZOJXHSjs = require('./chunk-3KZOJXHS.js');


var _chunkMVDTUPUVjs = require('./chunk-MVDTUPUV.js');


var _chunkOGIS7KFPjs = require('./chunk-OGIS7KFP.js');


var _chunkJQ5LXG7Djs = require('./chunk-JQ5LXG7D.js');


var _chunkDEEK72LSjs = require('./chunk-DEEK72LS.js');


var _chunk6GHU2XFNjs = require('./chunk-6GHU2XFN.js');


var _chunkTBFJDOPAjs = require('./chunk-TBFJDOPA.js');


var _chunk272AIHZNjs = require('./chunk-272AIHZN.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/programmers/internal/application_v30_alias.ts
var application_v30_alias = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (blockNever) => (components) => (alias) => (nullable) => {
  if (alias.value.size() === 1 && alias.value.objects.length === 1) return application_v30_object(components)(alias.value.objects[0])(nullable);
  const key = `${alias.name}${nullable ? ".Nullable" : ""}`;
  const $ref = `#/components/schemas/${key}`;
  if (_optionalChain([components, 'access', _ => _.schemas, 'optionalAccess', _2 => _2[key]]) === void 0) {
    components.schemas ??= {};
    components.schemas[key] = {};
    const schema = application_v30_schema(blockNever)(components)({
      deprecated: alias.jsDocTags.some((tag) => tag.name === "deprecated") || void 0,
      title: (() => {
        const info = alias.jsDocTags.find((tag) => tag.name === "title");
        return _optionalChain([info, 'optionalAccess', _3 => _3.text, 'optionalAccess', _4 => _4.length]) ? _chunk272AIHZNjs.CommentFactory.merge(info.text) : void 0;
      })(),
      description: _nullishCoalesce(alias.description, () => ( void 0))
    })(alias.value);
    if (schema !== null) Object.assign(components.schemas[key], schema);
  }
  return {
    $ref
  };
}, "application_v30_alias");

// src/programmers/internal/application_v30_tuple.ts
var application_v30_tuple = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (components) => (tuple) => (attribute) => ({
  ...attribute,
  type: "array",
  items: application_v30_schema(false)(components)(tuple.type.recursive ? {} : attribute)(tuple.type.elements.reduce((x, y) => _chunk6GHU2XFNjs.Metadata.merge(_nullishCoalesce(x.rest, () => ( x)), _nullishCoalesce(y.rest, () => ( y))), _chunk6GHU2XFNjs.Metadata.initialize())),
  minItems: !!_optionalChain([tuple, 'access', _5 => _5.type, 'access', _6 => _6.elements, 'access', _7 => _7.at, 'call', _8 => _8(-1), 'optionalAccess', _9 => _9.rest]) ? tuple.type.elements.length - 1 : tuple.type.elements.filter((x) => !x.optional).length,
  maxItems: !!_optionalChain([tuple, 'access', _10 => _10.type, 'access', _11 => _11.elements, 'access', _12 => _12.at, 'call', _13 => _13(-1), 'optionalAccess', _14 => _14.rest]) ? void 0 : tuple.type.elements.length
}), "application_v30_tuple");

// src/programmers/internal/application_v30_schema.ts
var application_v30_schema = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (blockNever) => (components) => (attribute) => (meta) => {
  if (meta.any === true) return {
    ...attribute,
    type: void 0
  };
  else if (meta.nullable && meta.empty()) return {
    type: "null",
    ...attribute
  };
  const union = [];
  const insert = meta.nullable ? (schema2) => union.push({
    ...schema2,
    nullable: schema2.type ? true : void 0
  }) : (schema2) => union.push(schema2);
  if (meta.escaped !== null) _chunkR73M5EMOjs.application_escaped.call(void 0, application_v30_schema(false)(components)({}))(meta.escaped).forEach(insert);
  if (meta.templates.length && _chunkDEEK72LSjs.AtomicPredicator.template(meta)) insert(_chunkVGDH2KBRjs.application_templates.call(void 0, meta));
  for (const constant of meta.constants) if (constant.type === "bigint") throw new TypeError(NO_BIGINT);
  else if (_chunkDEEK72LSjs.AtomicPredicator.constant(meta)(constant.type) === false) continue;
  else insert(_chunkYPYCEXKEjs.application_v30_constant.call(void 0, constant));
  for (const a of meta.atomics) if (a.type === "bigint") throw new TypeError(NO_BIGINT);
  else if (a.type === "boolean") _chunkX5MQQ7TAjs.application_boolean.call(void 0, a).forEach(insert);
  else if (a.type === "number") _chunk3KZOJXHSjs.application_number.call(void 0, a).forEach(insert);
  else if (a.type === "string") _chunkMVDTUPUVjs.application_string.call(void 0, a).forEach(insert);
  for (const array of meta.arrays) _chunkPL2MUSTMjs.application_array.call(void 0, application_v30_schema(false)(components)({}))(array).forEach(insert);
  for (const tuple of meta.tuples) insert(application_v30_tuple(components)(tuple)(attribute));
  for (const native of meta.natives) if (_chunkDEEK72LSjs.AtomicPredicator.native(native)) {
    const type = native.toLowerCase();
    if (meta.atomics.some((a) => a.type === type)) continue;
    else if (type === "bigint") throw new TypeError(NO_BIGINT);
    else if (type === "boolean") insert(_chunkX5MQQ7TAjs.application_boolean.call(void 0, _chunkTBFJDOPAjs.MetadataAtomic.create({
      type: "boolean",
      tags: []
    }))[0]);
    else if (type === "number") insert(_chunk3KZOJXHSjs.application_number.call(void 0, _chunkTBFJDOPAjs.MetadataAtomic.create({
      type: "number",
      tags: []
    }))[0]);
    else if (type === "string") insert(_chunkMVDTUPUVjs.application_string.call(void 0, _chunkTBFJDOPAjs.MetadataAtomic.create({
      type: "string",
      tags: []
    }))[0]);
  } else insert(_chunk2Q7CDZG4js.application_v30_native.call(void 0, components)(native)(meta.nullable));
  if (meta.sets.length) insert(_chunk2Q7CDZG4js.application_v30_native.call(void 0, components)(`Set`)(meta.nullable));
  if (meta.maps.length) insert(_chunk2Q7CDZG4js.application_v30_native.call(void 0, components)(`Map`)(meta.nullable));
  for (const obj of meta.objects) insert(application_v30_object(components)(obj)(meta.nullable));
  for (const alias of meta.aliases) insert(application_v30_alias(blockNever)(components)(alias)(meta.nullable));
  if (union.length === 0 && blockNever === true) return null;
  const schema = union.length === 0 ? {
    type: void 0
  } : union.length === 1 ? union[0] : {
    oneOf: union
  };
  return {
    ...schema,
    ...attribute,
    title: _nullishCoalesce(attribute.title, () => ( schema.title)),
    description: _nullishCoalesce(attribute.description, () => ( schema.description)),
    deprecated: _nullishCoalesce(attribute.deprecated, () => ( schema.deprecated))
  };
}, "application_v30_schema");
var NO_BIGINT = "Error on typia.application(): does not allow bigint type.";

// src/programmers/internal/application_v30_object.ts
var application_v30_object = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (components) => (obj) => (nullable) => {
  if (obj._Is_literal() === true) return create_object_schema(components)(obj)(nullable);
  const key = `${obj.name}${nullable ? ".Nullable" : ""}`;
  const $ref = `#/components/schemas/${key}`;
  if (_optionalChain([components, 'access', _15 => _15.schemas, 'optionalAccess', _16 => _16[key]]) !== void 0) return {
    $ref
  };
  const object = {};
  components.schemas ??= {};
  components.schemas[key] = object;
  Object.assign(object, create_object_schema(components)(obj)(nullable));
  return {
    $ref
  };
}, "application_v30_object");
var create_object_schema = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (components) => (obj) => (nullable) => {
  const properties = {};
  const extraMeta = {
    patternProperties: {},
    additionalProperties: void 0
  };
  const required = [];
  for (const property of obj.properties) {
    if (
      // FUNCTIONAL TYPE
      property.value.functional === true && property.value.nullable === false && property.value.isRequired() === true && property.value.size() === 0
    ) continue;
    else if (property.jsDocTags.find((tag) => tag.name === "hidden")) continue;
    const key = property.key.getSoleLiteral();
    const schema = application_v30_schema(true)(components)({
      deprecated: property.jsDocTags.some((tag) => tag.name === "deprecated") || void 0,
      title: (() => {
        const info = property.jsDocTags.find((tag) => tag.name === "title");
        if (_optionalChain([info, 'optionalAccess', _17 => _17.text, 'optionalAccess', _18 => _18.length])) return _chunk272AIHZNjs.CommentFactory.merge(info.text);
        else if (!_optionalChain([property, 'access', _19 => _19.description, 'optionalAccess', _20 => _20.length])) return void 0;
        const index = property.description.indexOf("\n");
        const top = (index === -1 ? property.description : property.description.substring(0, index)).trim();
        return top.endsWith(".") ? top.substring(0, top.length - 1) : void 0;
      })(),
      description: _nullishCoalesce(property.description, () => ( void 0))
    })(property.value);
    if (schema === null) continue;
    if (key !== null) {
      properties[key] = schema;
      if (property.value.isRequired() === true) required.push(key);
    } else {
      const pattern = _chunkOGIS7KFPjs.metadata_to_pattern.call(void 0, true)(property.key);
      if (pattern === _chunkJQ5LXG7Djs.PatternUtil.STRING) extraMeta.additionalProperties = [
        property.value,
        schema
      ];
      else extraMeta.patternProperties[pattern] = [
        property.value,
        schema
      ];
    }
  }
  return {
    type: "object",
    properties,
    nullable,
    required: required.length ? required : void 0,
    title: (() => {
      const info = obj.jsDocTags.find((tag) => tag.name === "title");
      return _optionalChain([info, 'optionalAccess', _21 => _21.text, 'optionalAccess', _22 => _22.length]) ? _chunk272AIHZNjs.CommentFactory.merge(info.text) : void 0;
    })(),
    description: obj.description,
    additionalProperties: join(components)(extraMeta)
  };
}, "create_object_schema");
var join = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (components) => (extra) => {
  const elements = Object.values(extra.patternProperties || {});
  if (extra.additionalProperties) elements.push(extra.additionalProperties);
  if (elements.length === 0) return void 0;
  else if (elements.length === 1) return elements[0][1];
  const meta = elements.map((tuple) => tuple[0]).reduce((x, y) => _chunk6GHU2XFNjs.Metadata.merge(x, y));
  return _nullishCoalesce(application_v30_schema(true)(components)({})(meta), () => ( void 0));
}, "join");






exports.application_v30_object = application_v30_object; exports.application_v30_alias = application_v30_alias; exports.application_v30_tuple = application_v30_tuple; exports.application_v30_schema = application_v30_schema;
//# sourceMappingURL=chunk-UJIU45F6.js.map