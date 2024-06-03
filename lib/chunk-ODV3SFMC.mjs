import {
  application_v30_constant
} from "./chunk-GUK6UIEO.mjs";
import {
  application_v30_native
} from "./chunk-SWSSIVXQ.mjs";
import {
  application_templates
} from "./chunk-C6V3R7MQ.mjs";
import {
  application_array
} from "./chunk-3QJMTKIG.mjs";
import {
  application_boolean
} from "./chunk-XVGYA6I3.mjs";
import {
  application_escaped
} from "./chunk-GB3XQCYD.mjs";
import {
  application_number
} from "./chunk-KXMBSXU6.mjs";
import {
  application_string
} from "./chunk-EMABSXHY.mjs";
import {
  metadata_to_pattern
} from "./chunk-TE33WDSA.mjs";
import {
  PatternUtil
} from "./chunk-NF35EQJD.mjs";
import {
  AtomicPredicator
} from "./chunk-EPGYGA2I.mjs";
import {
  Metadata
} from "./chunk-RD644GUB.mjs";
import {
  MetadataAtomic
} from "./chunk-X7O4QE24.mjs";
import {
  CommentFactory
} from "./chunk-U3HW6PHG.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/programmers/internal/application_v30_alias.ts
var application_v30_alias = /* @__PURE__ */ __name((blockNever) => (components) => (alias) => (nullable) => {
  if (alias.value.size() === 1 && alias.value.objects.length === 1) return application_v30_object(components)(alias.value.objects[0])(nullable);
  const key = `${alias.name}${nullable ? ".Nullable" : ""}`;
  const $ref = `#/components/schemas/${key}`;
  if (components.schemas?.[key] === void 0) {
    components.schemas ??= {};
    components.schemas[key] = {};
    const schema = application_v30_schema(blockNever)(components)({
      deprecated: alias.jsDocTags.some((tag) => tag.name === "deprecated") || void 0,
      title: (() => {
        const info = alias.jsDocTags.find((tag) => tag.name === "title");
        return info?.text?.length ? CommentFactory.merge(info.text) : void 0;
      })(),
      description: alias.description ?? void 0
    })(alias.value);
    if (schema !== null) Object.assign(components.schemas[key], schema);
  }
  return {
    $ref
  };
}, "application_v30_alias");

// src/programmers/internal/application_v30_tuple.ts
var application_v30_tuple = /* @__PURE__ */ __name((components) => (tuple) => (attribute) => ({
  ...attribute,
  type: "array",
  items: application_v30_schema(false)(components)(tuple.type.recursive ? {} : attribute)(tuple.type.elements.reduce((x, y) => Metadata.merge(x.rest ?? x, y.rest ?? y), Metadata.initialize())),
  minItems: !!tuple.type.elements.at(-1)?.rest ? tuple.type.elements.length - 1 : tuple.type.elements.filter((x) => !x.optional).length,
  maxItems: !!tuple.type.elements.at(-1)?.rest ? void 0 : tuple.type.elements.length
}), "application_v30_tuple");

// src/programmers/internal/application_v30_schema.ts
var application_v30_schema = /* @__PURE__ */ __name((blockNever) => (components) => (attribute) => (meta) => {
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
  if (meta.escaped !== null) application_escaped(application_v30_schema(false)(components)({}))(meta.escaped).forEach(insert);
  if (meta.templates.length && AtomicPredicator.template(meta)) insert(application_templates(meta));
  for (const constant of meta.constants) if (constant.type === "bigint") throw new TypeError(NO_BIGINT);
  else if (AtomicPredicator.constant(meta)(constant.type) === false) continue;
  else insert(application_v30_constant(constant));
  for (const a of meta.atomics) if (a.type === "bigint") throw new TypeError(NO_BIGINT);
  else if (a.type === "boolean") application_boolean(a).forEach(insert);
  else if (a.type === "number") application_number(a).forEach(insert);
  else if (a.type === "string") application_string(a).forEach(insert);
  for (const array of meta.arrays) application_array(application_v30_schema(false)(components)({}))(array).forEach(insert);
  for (const tuple of meta.tuples) insert(application_v30_tuple(components)(tuple)(attribute));
  for (const native of meta.natives) if (AtomicPredicator.native(native)) {
    const type = native.toLowerCase();
    if (meta.atomics.some((a) => a.type === type)) continue;
    else if (type === "bigint") throw new TypeError(NO_BIGINT);
    else if (type === "boolean") insert(application_boolean(MetadataAtomic.create({
      type: "boolean",
      tags: []
    }))[0]);
    else if (type === "number") insert(application_number(MetadataAtomic.create({
      type: "number",
      tags: []
    }))[0]);
    else if (type === "string") insert(application_string(MetadataAtomic.create({
      type: "string",
      tags: []
    }))[0]);
  } else insert(application_v30_native(components)(native)(meta.nullable));
  if (meta.sets.length) insert(application_v30_native(components)(`Set`)(meta.nullable));
  if (meta.maps.length) insert(application_v30_native(components)(`Map`)(meta.nullable));
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
    title: attribute.title ?? schema.title,
    description: attribute.description ?? schema.description,
    deprecated: attribute.deprecated ?? schema.deprecated
  };
}, "application_v30_schema");
var NO_BIGINT = "Error on typia.application(): does not allow bigint type.";

// src/programmers/internal/application_v30_object.ts
var application_v30_object = /* @__PURE__ */ __name((components) => (obj) => (nullable) => {
  if (obj._Is_literal() === true) return create_object_schema(components)(obj)(nullable);
  const key = `${obj.name}${nullable ? ".Nullable" : ""}`;
  const $ref = `#/components/schemas/${key}`;
  if (components.schemas?.[key] !== void 0) return {
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
var create_object_schema = /* @__PURE__ */ __name((components) => (obj) => (nullable) => {
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
        if (info?.text?.length) return CommentFactory.merge(info.text);
        else if (!property.description?.length) return void 0;
        const index = property.description.indexOf("\n");
        const top = (index === -1 ? property.description : property.description.substring(0, index)).trim();
        return top.endsWith(".") ? top.substring(0, top.length - 1) : void 0;
      })(),
      description: property.description ?? void 0
    })(property.value);
    if (schema === null) continue;
    if (key !== null) {
      properties[key] = schema;
      if (property.value.isRequired() === true) required.push(key);
    } else {
      const pattern = metadata_to_pattern(true)(property.key);
      if (pattern === PatternUtil.STRING) extraMeta.additionalProperties = [
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
      return info?.text?.length ? CommentFactory.merge(info.text) : void 0;
    })(),
    description: obj.description,
    additionalProperties: join(components)(extraMeta)
  };
}, "create_object_schema");
var join = /* @__PURE__ */ __name((components) => (extra) => {
  const elements = Object.values(extra.patternProperties || {});
  if (extra.additionalProperties) elements.push(extra.additionalProperties);
  if (elements.length === 0) return void 0;
  else if (elements.length === 1) return elements[0][1];
  const meta = elements.map((tuple) => tuple[0]).reduce((x, y) => Metadata.merge(x, y));
  return application_v30_schema(true)(components)({})(meta) ?? void 0;
}, "join");

export {
  application_v30_object,
  application_v30_alias,
  application_v30_tuple,
  application_v30_schema
};
//# sourceMappingURL=chunk-ODV3SFMC.mjs.map