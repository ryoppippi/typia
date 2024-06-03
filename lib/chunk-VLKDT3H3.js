"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }

var _chunkMDU65SDYjs = require('./chunk-MDU65SDY.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/factories/MetadataTypeTagFactory.ts
var MetadataTypeTagFactory;
(function(MetadataTypeTagFactory2) {
  MetadataTypeTagFactory2.analyze = (errors) => (type) => (objects, explore) => {
    const messages = [];
    const report = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (property) => (msg) => {
      messages.push(`the property ${property === null ? `["typia.tag"]` : `["typia.tag.${property}"]`} ${msg}.`);
      return false;
    }, "report");
    const filtered = objects.filter((obj) => {
      if (obj.properties.length !== 1) return false;
      const top = obj.properties[0];
      if (top.key.getSoleLiteral() !== "typia.tag" || top.value.size() !== 1 || top.value.objects.length !== 1) return false;
      else if (top.value.optional === false) return report(null)("must be optional object");
      const tag = top.value.objects[0];
      const statics = tag.properties.map((p) => p.key.getSoleLiteral()).filter((str) => str !== null);
      if (ESSENTIAL_FIELDS.some((f) => !statics.includes(f))) return report(null)(`must have at least three properties - ${ESSENTIAL_FIELDS.map((str) => `'${str}'`).join(", ")}`);
      const each = tag.properties.map((p) => {
        const key = p.key.getSoleLiteral();
        if (key === null) return true;
        else if (FIELDS.includes(key) === false) return true;
        return validate_property(report)(key, p.value);
      });
      return each.every((v) => v === true);
    });
    if (filtered.length === 0) return [];
    const tagList = filtered.map(create_metadata_type_tag(report));
    const output = [];
    for (const tag of tagList) if (tag !== null) output.push({
      target: tag.target.some((str) => str === type) ? type : null,
      name: tag.name,
      kind: tag.kind,
      value: tag.value,
      validate: tag.validate[type],
      exclusive: tag.exclusive,
      schema: tag.schema
    });
    MetadataTypeTagFactory2.validate(report)(type)(output);
    if (messages.length > 0) {
      errors.push({
        name: [
          type,
          ...objects.map((o) => o.name)
        ].join(" & "),
        explore,
        messages
      });
      return [];
    }
    return output;
  };
  MetadataTypeTagFactory2.validate = (report) => (type) => (tagList) => {
    let success = true;
    for (const tag of tagList) if (tag.target !== type) {
      success &&= report(null)(`target must constains ${type} type`);
    }
    tagList.forEach((tag, i) => {
      if (tag.exclusive === false) return;
      else if (tag.exclusive === true) {
        const some = tagList.some((opposite, j) => i !== j && opposite.kind === tag.kind);
        if (some === true) success &&= report(null)(`kind '${tag.kind}' can't be duplicated`);
      } else if (Array.isArray(tag.exclusive)) {
        const some = tagList.find((opposite, j) => i !== j && opposite.kind === tag.kind && tag.exclusive.includes(opposite.name));
        if (some !== void 0) success ??= report(null)(`kind '${tag.kind}' can't be used with '${some.name}'`);
      }
    });
    return success;
  };
  const validate_property = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (report) => (key, value) => {
    if (
      // TARGET
      key === "target" && (value.constants.length !== 1 || value.constants[0].values.length !== value.size() || value.constants[0].values.some((v) => v.value !== "boolean" && v.value !== "bigint" && v.value !== "number" && v.value !== "string" && v.value !== "array"))
    ) return report(key)(`must be one of 'boolean', 'bigint', 'number', 'string', 'array'`);
    else if (
      // KIND
      key === "kind" && (value.size() !== 1 || value.constants.length !== 1 || value.constants[0].type !== "string" || value.constants[0].values.length !== 1)
    ) return report(key)("must be a string literal type");
    else if (
      // VALUE
      key === "value" && (value.size() > 1 || value.size() !== 0 && (value.constants.length !== 1 || value.constants[0].values.length !== 1))
    ) return report(key)("must be a constant literal type or undefined value");
    else if (key === "exclusive") return get_exclusive(report)(key)(value) !== null;
    else if (key === "validate") {
      if (value.size() === 0 && value.isRequired() === false && value.nullable === false) return true;
      if (value.size() === 1 && value.constants.length === 1 && value.constants[0].type === "string" && value.constants[0].values.length === 1 === true) return true;
      const target = _optionalChain([value, 'access', _ => _.objects, 'access', _2 => _2[0], 'optionalAccess', _3 => _3.properties, 'access', _4 => _4.map, 'call', _5 => _5((p) => p.key.getSoleLiteral()), 'access', _6 => _6.filter, 'call', _7 => _7((str) => str !== null)]);
      if (target === void 0) return report("target")(`must be one of 'boolean', 'bigint', 'number', 'string', 'array'`);
      const variadic = value.size() === 1 && value.objects.length === 1 && value.objects[0].properties.every((vp) => vp.value.size() === 1 && vp.value.isRequired() && vp.value.nullable === false && vp.value.constants.length === 1 && vp.value.constants[0].type === "string" && vp.value.constants[0].values.length === 1 && target.includes(vp.key.getSoleLiteral()));
      if (variadic === false) return report(key)(`must be a string literal type or Record<Target, string> type.`);
    }
    return true;
  }, "validate_property");
  const create_metadata_type_tag = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (report) => (obj) => {
    const find = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (key) => _optionalChain([obj, 'access', _8 => _8.properties, 'access', _9 => _9[0], 'optionalAccess', _10 => _10.value, 'access', _11 => _11.objects, 'access', _12 => _12[0], 'optionalAccess', _13 => _13.properties, 'access', _14 => _14.find, 'call', _15 => _15((p) => p.key.getSoleLiteral() === key)]), "find");
    const target = find("target").value.constants[0].values.map((v) => v.value);
    const kind = find("kind").value.constants[0].values[0].value;
    const value = _optionalChain([find, 'call', _16 => _16("value"), 'optionalAccess', _17 => _17.value, 'access', _18 => _18.constants, 'access', _19 => _19[0], 'optionalAccess', _20 => _20.values, 'access', _21 => _21[0], 'access', _22 => _22.value]);
    const exclusive = get_exclusive(report)("exclusive")(_optionalChain([find, 'call', _23 => _23("exclusive"), 'optionalAccess', _24 => _24.value]));
    if (exclusive === null) return null;
    const validate = (() => {
      const validate2 = _optionalChain([find, 'call', _25 => _25("validate"), 'optionalAccess', _26 => _26.value]);
      if (!validate2 || validate2.size() === 0) return {};
      else if (validate2.constants.length) return Object.fromEntries(target.map((t) => [
        t,
        validate2.constants[0].values[0].value
      ]));
      return Object.fromEntries(validate2.objects[0].properties.map((p) => [
        p.key.getSoleLiteral(),
        p.value.constants[0].values[0].value
      ]));
    })();
    const schema = (() => {
      const p = _optionalChain([find, 'call', _27 => _27("schema"), 'optionalAccess', _28 => _28.value]);
      if (p === void 0) return void 0;
      else if (p.size() === 0 && p.isRequired() === false) return void 0;
      else if (p.size() === 1 && p.nullable === false && p.isRequired() === true && p.any === false) return _chunkMDU65SDYjs.MetadataTypeTagSchemaFactory.object((msg) => report("schema")(msg))(p.objects[0]);
      report("schema")("must be an object type");
      return void 0;
    })();
    return {
      name: obj.name,
      target,
      kind,
      value,
      validate,
      exclusive: _nullishCoalesce(exclusive, () => ( false)),
      schema
    };
  }, "create_metadata_type_tag");
  const get_exclusive = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (report) => (key) => (value) => {
    if (value === void 0) return false;
    else if (value.size() === 1 && value.constants.length === 1 && value.constants[0].type === "boolean" && value.constants[0].values.length === 1) return value.constants[0].values[0].value;
    else if (value.size() === 1 && value.tuples.length === 1 && value.tuples[0].type.elements.every((elem) => elem.size() === 1 && elem.constants.length === 1 && elem.constants[0].type === "string" && elem.constants[0].values.length === 1)) return value.tuples[0].type.elements.map((elem) => elem.constants[0].values[0].value);
    report(key)("must a boolean literal type or a tuple of string literal types.");
    return null;
  }, "get_exclusive");
})(MetadataTypeTagFactory || (MetadataTypeTagFactory = exports.MetadataTypeTagFactory = {}));
var ESSENTIAL_FIELDS = [
  "target",
  "kind",
  "value"
];
var FIELDS = [
  ...ESSENTIAL_FIELDS,
  "validate",
  "exclusive"
];



exports.MetadataTypeTagFactory = MetadataTypeTagFactory;
//# sourceMappingURL=chunk-VLKDT3H3.js.map