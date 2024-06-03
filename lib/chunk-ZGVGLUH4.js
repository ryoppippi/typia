"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }

var _chunkPGPEYGGQjs = require('./chunk-PGPEYGGQ.js');


var _chunk2EWDPAUIjs = require('./chunk-2EWDPAUI.js');


var _chunkSF5KPIGBjs = require('./chunk-SF5KPIGB.js');


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

// src/programmers/internal/application_v31_alias.ts
var application_v31_alias = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (blockNever) => (components) => (alias) => {
  if (alias.value.size() === 1 && alias.value.objects.length === 1) return application_v31_object(components)(alias.value.objects[0]);
  const $ref = `#/components/schemas/${alias.name}`;
  if (_optionalChain([components, 'access', _ => _.schemas, 'optionalAccess', _2 => _2[alias.name]]) === void 0) {
    components.schemas ??= {};
    components.schemas[alias.name] = {};
    const schema = application_v31_schema(blockNever)(components)({
      deprecated: alias.jsDocTags.some((tag) => tag.name === "deprecated") || void 0,
      title: (() => {
        const info = alias.jsDocTags.find((tag) => tag.name === "title");
        return _optionalChain([info, 'optionalAccess', _3 => _3.text, 'optionalAccess', _4 => _4.length]) ? _chunk272AIHZNjs.CommentFactory.merge(info.text) : void 0;
      })(),
      description: _nullishCoalesce(alias.description, () => ( void 0))
    })(alias.value);
    if (schema !== null) Object.assign(components.schemas[alias.name], schema);
  }
  return {
    $ref
  };
}, "application_v31_alias");

// src/programmers/internal/application_v31_schema.ts
var application_v31_schema = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (blockNever) => (components) => (attribute) => (meta) => {
  if (meta.any === true) return {
    ...attribute,
    type: void 0
  };
  const union = [];
  const insert = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (schema2) => union.push(schema2), "insert");
  if (meta.nullable === true) insert({
    type: "null"
  });
  if (meta.escaped !== null) _chunkR73M5EMOjs.application_escaped.call(void 0, application_v31_schema(false)(components)({}))(meta.escaped).forEach(insert);
  if (meta.templates.length && _chunkDEEK72LSjs.AtomicPredicator.template(meta)) insert(_chunkVGDH2KBRjs.application_templates.call(void 0, meta));
  for (const constant of meta.constants) if (constant.type === "bigint") throw new TypeError(NO_BIGINT);
  else if (_chunkDEEK72LSjs.AtomicPredicator.constant(meta)(constant.type) === false) continue;
  else _chunkPGPEYGGQjs.application_v31_constant.call(void 0, constant).map(insert);
  for (const a of meta.atomics) if (a.type === "bigint") throw new TypeError(NO_BIGINT);
  else if (a.type === "boolean") _chunkX5MQQ7TAjs.application_boolean.call(void 0, a).forEach(insert);
  else if (a.type === "number") _chunk3KZOJXHSjs.application_number.call(void 0, a).forEach(insert);
  else if (a.type === "string") _chunkMVDTUPUVjs.application_string.call(void 0, a).forEach(insert);
  for (const array of meta.arrays) _chunkPL2MUSTMjs.application_array.call(void 0, application_v31_schema(false)(components)({}))(array).forEach(insert);
  for (const tuple of meta.tuples) insert(_chunkSF5KPIGBjs.application_v31_tuple.call(void 0, application_v31_schema(false)(components)({}))(tuple));
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
  } else insert(_chunk2EWDPAUIjs.application_v31_native.call(void 0, components)(native));
  if (meta.sets.length) insert(_chunk2EWDPAUIjs.application_v31_native.call(void 0, components)(`Set`));
  if (meta.maps.length) insert(_chunk2EWDPAUIjs.application_v31_native.call(void 0, components)(`Map`));
  for (const obj of meta.objects) insert(application_v31_object(components)(obj));
  for (const alias of meta.aliases) insert(application_v31_alias(blockNever)(components)(alias));
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
}, "application_v31_schema");
var NO_BIGINT = "Error on typia.application(): does not allow bigint type.";

// src/programmers/internal/application_v31_object.ts
var application_v31_object = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (components) => (obj) => {
  if (obj._Is_literal() === true) return create_object_schema(components)(obj);
  const key = obj.name;
  const $ref = `#/components/schemas/${key}`;
  if (_optionalChain([components, 'access', _5 => _5.schemas, 'optionalAccess', _6 => _6[key]]) !== void 0) return {
    $ref
  };
  const object = {};
  components.schemas ??= {};
  components.schemas[key] = object;
  Object.assign(object, create_object_schema(components)(obj));
  return {
    $ref
  };
}, "application_v31_object");
var create_object_schema = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (components) => (obj) => {
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
    const schema = application_v31_schema(true)(components)({
      deprecated: property.jsDocTags.some((tag) => tag.name === "deprecated") || void 0,
      title: (() => {
        const info = property.jsDocTags.find((tag) => tag.name === "title");
        if (_optionalChain([info, 'optionalAccess', _7 => _7.text, 'optionalAccess', _8 => _8.length])) return _chunk272AIHZNjs.CommentFactory.merge(info.text);
        else if (!_optionalChain([property, 'access', _9 => _9.description, 'optionalAccess', _10 => _10.length])) return void 0;
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
    required: required.length ? required : void 0,
    title: (() => {
      const info = obj.jsDocTags.find((tag) => tag.name === "title");
      return _optionalChain([info, 'optionalAccess', _11 => _11.text, 'optionalAccess', _12 => _12.length]) ? _chunk272AIHZNjs.CommentFactory.merge(info.text) : void 0;
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
  return _nullishCoalesce(application_v31_schema(true)(components)({})(meta), () => ( void 0));
}, "join");





exports.application_v31_object = application_v31_object; exports.application_v31_alias = application_v31_alias; exports.application_v31_schema = application_v31_schema;
//# sourceMappingURL=chunk-ZGVGLUH4.js.map