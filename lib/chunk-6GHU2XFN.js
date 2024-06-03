"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } var _class;

var _chunkTBFJDOPAjs = require('./chunk-TBFJDOPA.js');


var _chunk6P6Q2LJHjs = require('./chunk-6P6Q2LJH.js');


var _chunkSIGOR7QQjs = require('./chunk-SIGOR7QQ.js');


var _chunkUNOXPWQEjs = require('./chunk-UNOXPWQE.js');


var _chunkA7ORGSGMjs = require('./chunk-A7ORGSGM.js');


var _chunkQ2DBVBM3js = require('./chunk-Q2DBVBM3.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/schemas/metadata/Metadata.ts
var Metadata = (_class = class _Metadata {
  static {
    _chunkUZ5BS2M3js.__name.call(void 0, this, "Metadata");
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /** @internal */
  
  /** @internal */
  __init() {this.parent_resolved_ = false}
  /** @internal */
  
  /** @internal */
  
  /** @internal */
  
  /* -----------------------------------------------------------
    CONSTRUCTORS
  ----------------------------------------------------------- */
  /**
  * @hidden
  */
  constructor(props) {;_class.prototype.__init.call(this);
    this.any = props.any;
    this.required = props.required;
    this.optional = props.optional;
    this.nullable = props.nullable;
    this.functional = props.functional;
    this.escaped = props.escaped;
    this.atomics = props.atomics;
    this.constants = props.constants;
    this.templates = props.templates;
    this.rest = props.rest;
    this.arrays = props.arrays;
    this.tuples = props.tuples;
    this.objects = props.objects;
    this.aliases = props.aliases;
    this.natives = props.natives;
    this.sets = props.sets;
    this.maps = props.maps;
  }
  /**
  * @internal
  */
  static create(props) {
    return new _Metadata(props);
  }
  /**
  * @internal
  */
  static initialize(parentResolved = false) {
    const meta = _Metadata.create({
      any: false,
      nullable: false,
      required: true,
      optional: false,
      functional: false,
      escaped: null,
      constants: [],
      atomics: [],
      templates: [],
      arrays: [],
      tuples: [],
      objects: [],
      aliases: [],
      rest: null,
      natives: [],
      sets: [],
      maps: []
    });
    meta.parent_resolved_ = parentResolved;
    return meta;
  }
  toJSON() {
    return {
      any: this.any,
      required: this.required,
      optional: this.optional,
      nullable: this.nullable,
      functional: this.functional,
      atomics: this.atomics.map((a) => a.toJSON()),
      constants: this.constants.map((c) => c.toJSON()),
      templates: this.templates.map((tpl) => tpl.map((meta) => meta.toJSON())),
      escaped: this.escaped ? this.escaped.toJSON() : null,
      rest: this.rest ? this.rest.toJSON() : null,
      arrays: this.arrays.map((array) => ({
        name: array.type.name,
        tags: array.tags.map((r) => r.slice())
      })),
      tuples: this.tuples.map((tuple) => ({
        name: tuple.type.name,
        tags: tuple.tags.map((r) => r.slice())
      })),
      objects: this.objects.map((obj) => obj.name),
      aliases: this.aliases.map((alias) => alias.name),
      natives: this.natives.slice(),
      sets: this.sets.map((meta) => meta.toJSON()),
      maps: this.maps.map((entry) => ({
        key: entry.key.toJSON(),
        value: entry.value.toJSON()
      }))
    };
  }
  static from(meta, dict) {
    return _Metadata.create({
      any: meta.any,
      required: meta.required,
      optional: meta.optional,
      nullable: meta.nullable,
      functional: meta.functional,
      constants: meta.constants.map(_chunk6P6Q2LJHjs.MetadataConstant.from),
      atomics: meta.atomics.map(_chunkTBFJDOPAjs.MetadataAtomic.from),
      templates: meta.templates.map((tpl) => tpl.map((meta2) => this.from(meta2, dict))),
      escaped: meta.escaped ? MetadataEscaped.from(meta.escaped, dict) : null,
      rest: meta.rest ? this.from(meta.rest, dict) : null,
      arrays: meta.arrays.map((ref) => {
        const type = dict.arrays.get(ref.name);
        if (type === void 0) throw new RangeError(`Error on Metadata.from(): failed to find array "${ref.name}".`);
        return _chunkUNOXPWQEjs.MetadataArray.create({
          type,
          tags: ref.tags.map((row) => row.slice())
        });
      }),
      tuples: meta.tuples.map((t) => {
        const type = dict.tuples.get(t.name);
        if (type === void 0) throw new RangeError(`Error on Metadata.from(): failed to find tuple "${t.name}".`);
        return _chunkSIGOR7QQjs.MetadataTuple.create({
          type,
          tags: t.tags.map((r) => r.slice())
        });
      }),
      objects: meta.objects.map((name) => {
        const found = dict.objects.get(name);
        if (found === void 0) throw new RangeError(`Error on Metadata.from(): failed to find object "${name}".`);
        return found;
      }),
      aliases: meta.aliases.map((alias) => {
        const found = dict.aliases.get(alias);
        if (found === void 0) throw new RangeError(`Error on Metadata.from(): failed to find alias "${alias}".`);
        return found;
      }),
      natives: meta.natives.slice(),
      sets: meta.sets.map((meta2) => this.from(meta2, dict)),
      maps: meta.maps.map((entry) => ({
        key: this.from(entry.key, dict),
        value: this.from(entry.value, dict)
      }))
    });
  }
  /* -----------------------------------------------------------
    ACCESSORS
  ----------------------------------------------------------- */
  getName() {
    return this.name_ ??= getName(this);
  }
  empty() {
    return this.bucket() === 0 || this.size() === 0;
  }
  size() {
    return (this.any ? 1 : 0) + (this.escaped ? 1 : 0) + (this.functional ? 1 : 0) + (this.rest ? this.rest.size() : 0) + this.templates.length + this.atomics.length + this.constants.map((c) => c.values.length).reduce((x, y) => x + y, 0) + this.arrays.length + this.tuples.length + this.natives.length + this.maps.length + this.sets.length + this.objects.length + this.aliases.length;
  }
  bucket() {
    return (this.any ? 1 : 0) + (this.escaped ? 1 : 0) + (this.functional ? 1 : 0) + (this.templates.length ? 1 : 0) + (this.atomics.length ? 1 : 0) + (this.constants.length ? 1 : 0) + (this.rest ? this.rest.size() : 0) + (this.arrays.length ? 1 : 0) + (this.tuples.length ? 1 : 0) + (this.natives.length ? 1 : 0) + (this.sets.length ? 1 : 0) + (this.maps.length ? 1 : 0) + (this.objects.length ? 1 : 0) + (this.aliases.length ? 1 : 0);
  }
  isConstant() {
    return this.bucket() === (this.constants.length ? 1 : 0);
  }
  isRequired() {
    return this.required === true && this.optional === false;
  }
  /**
  * @internal
  */
  isUnionBucket() {
    const size = this.bucket();
    const emended = !!this.atomics.length && !!this.constants.length ? size - 1 : size;
    return emended > 1;
  }
  /**
  * @internal
  */
  getSoleLiteral() {
    if (this.size() === 1 && this.constants.length === 1 && this.constants[0].type === "string" && this.constants[0].values.length === 1) return this.constants[0].values[0].value;
    else return null;
  }
  isSoleLiteral() {
    return this.getSoleLiteral() !== null;
  }
  /**
  * @internal
  */
  isParentResolved() {
    return this.parent_resolved_;
  }
}, _class);
(function(Metadata2) {
  Metadata2.intersects = (x, y) => {
    if (x.any || y.any) return true;
    if (x.isRequired() === false && false === y.isRequired()) return true;
    if (x.nullable === true && true === y.nullable) return true;
    if (x.functional === true && y.functional === true) return true;
    if (x.arrays.length && y.arrays.length) return true;
    if (x.tuples.length && y.tuples.length) return true;
    if (x.objects.length && y.objects.length) return true;
    if (x.aliases.length && y.aliases.length) return true;
    if (x.natives.length && y.natives.length) {
      if (x.natives.some((xn) => y.natives.some((yn) => xn === yn))) return true;
    }
    if (x.escaped && y.escaped) return Metadata2.intersects(x.escaped.original, y.escaped.original) || Metadata2.intersects(x.escaped.returns, y.escaped.returns);
    for (const atomic of x.atomics) {
      if (y.atomics.some((ya) => atomic.type === ya.type)) return true;
      if (y.constants.some((yc) => atomic.type === yc.type)) return true;
    }
    for (const constant of x.constants) {
      const atomic = y.atomics.find((elem) => elem.type === constant.type);
      if (atomic !== void 0) return true;
      const opposite = y.constants.find((elem) => elem.type === constant.type);
      if (opposite === void 0) continue;
      const values = /* @__PURE__ */ new Set([
        ...constant.values.map((e) => e.value),
        ...opposite.values.map((e) => e.value)
      ]);
      if (values.size !== constant.values.length + opposite.values.length) return true;
    }
    if (!!x.templates.length && y.atomics.some((ya) => ya.type === "string")) return true;
    else if (!!y.templates.length && x.atomics.some((xa) => xa.type === "string")) return true;
    return false;
  };
  Metadata2.covers = (x, y, level = 0, escaped = false) => {
    if (x === y) return false;
    else if (x.any) return true;
    else if (y.any) return false;
    if (escaped === false) {
      if (x.escaped === null && y.escaped !== null) return false;
      else if (x.escaped !== null && y.escaped !== null && (!Metadata2.covers(x.escaped.original, y.escaped.original, level, true) || !Metadata2.covers(x.escaped.returns, y.escaped.returns, level, true))) return false;
    }
    if (level === 0) {
      for (const ya of y.arrays) if (!x.arrays.some((xa) => Metadata2.covers(xa.type.value, ya.type.value, level + 1))) {
        return false;
      }
      for (const yt of y.tuples) if (yt.type.elements.length !== 0 && x.tuples.some((xt) => xt.type.elements.length >= yt.type.elements.length && xt.type.elements.slice(yt.type.elements.length).every((xv, i) => Metadata2.covers(xv, yt.type.elements[i], level + 1))) === false) return false;
    }
    for (const yo of y.objects) if (x.objects.some((xo) => _chunkQ2DBVBM3js.MetadataObject.covers(xo, yo)) === false) return false;
    for (const yd of y.aliases) if (x.aliases.some((xd) => xd.name === yd.name) === false) return false;
    for (const yn of y.natives) if (x.natives.some((xn) => xn === yn) === false) return false;
    for (const ys of y.sets) if (x.sets.some((xs) => Metadata2.covers(xs, ys)) === false) return false;
    if (y.atomics.some((ya) => x.atomics.some((xa) => xa.type === ya.type) === false)) return false;
    for (const yc of y.constants) {
      if (x.atomics.some((atom) => yc.type === atom.type)) continue;
      const xc = x.constants.find((elem) => elem.type === yc.type);
      if (xc === void 0) return false;
      else if (yc.values.map((e) => e.value).some((yv) => xc.values.includes(yv) === false)) return false;
    }
    if (x.functional === false && y.functional) return false;
    return true;
  };
  Metadata2.merge = (x, y) => {
    const output = Metadata2.create({
      any: x.any || y.any,
      nullable: x.nullable || y.nullable,
      required: x.required && y.required,
      optional: x.optional || y.optional,
      functional: x.functional || y.functional,
      escaped: x.escaped !== null && y.escaped !== null ? MetadataEscaped.create({
        original: Metadata2.merge(x.escaped.original, y.escaped.original),
        returns: Metadata2.merge(x.escaped.returns, y.escaped.returns)
      }) : _nullishCoalesce(x.escaped, () => ( y.escaped)),
      atomics: mergeTaggedTypes({
        container: x.atomics,
        equals: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (x2, y2) => x2.type === y2.type, "equals"),
        getter: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (x2) => x2.tags, "getter")
      })(y.atomics),
      constants: [
        ...x.constants
      ],
      templates: x.templates.slice(),
      rest: x.rest !== null && y.rest !== null ? Metadata2.merge(x.rest, y.rest) : _nullishCoalesce(x.rest, () => ( y.rest)),
      // arrays: x.arrays.slice(),
      arrays: mergeTaggedTypes({
        container: x.arrays,
        equals: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (x2, y2) => x2.type.name === y2.type.name, "equals"),
        getter: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (x2) => x2.tags, "getter")
      })(y.arrays),
      tuples: mergeTaggedTypes({
        container: x.tuples,
        equals: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (x2, y2) => x2.type.name === y2.type.name, "equals"),
        getter: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (x2) => x2.tags, "getter")
      })(y.tuples),
      objects: x.objects.slice(),
      aliases: x.aliases.slice(),
      natives: [
        .../* @__PURE__ */ new Set([
          ...x.natives,
          ...y.natives
        ])
      ],
      sets: x.sets.slice(),
      maps: x.maps.slice()
    });
    for (const constant of y.constants) {
      const target = _chunkA7ORGSGMjs.ArrayUtil.take(output.constants, (elem) => elem.type === constant.type, () => _chunk6P6Q2LJHjs.MetadataConstant.create({
        type: constant.type,
        values: []
      }));
      for (const value of constant.values) _chunkA7ORGSGMjs.ArrayUtil.add(target.values, value, (a, b) => a.value === b.value);
    }
    for (const obj of y.objects) _chunkA7ORGSGMjs.ArrayUtil.set(output.objects, obj, (elem) => elem.name);
    for (const alias of y.aliases) _chunkA7ORGSGMjs.ArrayUtil.set(output.aliases, alias, (elem) => elem.name);
    return output;
  };
})(Metadata || (Metadata = exports.Metadata = {}));
var getName = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (metadata) => {
  if (metadata.any === true) return "any";
  const elements = [];
  if (metadata.nullable === true) elements.push("null");
  if (metadata.isRequired() === false) elements.push("undefined");
  for (const atom of metadata.atomics) {
    elements.push(atom.getName());
  }
  for (const constant of metadata.constants) for (const value of constant.values) elements.push(value.getName());
  for (const template of metadata.templates) elements.push("`" + template.map((child) => child.isConstant() && child.size() === 1 ? child.constants[0].values[0] : `\${${child.getName()}}`).join("").split("`").join("\\`") + "`");
  for (const native of metadata.natives) elements.push(native);
  for (const set of metadata.sets) elements.push(`Set<${set.getName()}>`);
  for (const map of metadata.maps) elements.push(`Map<${map.key.getName()}, ${map.value.getName()}>`);
  if (metadata.rest !== null) elements.push(`...${metadata.rest.getName()}`);
  for (const tuple of metadata.tuples) elements.push(tuple.type.name);
  for (const array of metadata.arrays) elements.push(array.getName());
  for (const object of metadata.objects) elements.push(object.name);
  for (const alias of metadata.aliases) elements.push(alias.name);
  if (metadata.escaped !== null) elements.push(metadata.escaped.getName());
  if (elements.length === 0) return "unknown";
  else if (elements.length === 1) return elements[0];
  elements.sort();
  return `(${elements.join(" | ")})`;
}, "getName");
var mergeTaggedTypes = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (props) => (opposite) => {
  const output = [
    ...props.container
  ];
  for (const elem of opposite) {
    const equal = props.container.find((x) => props.equals(x, elem));
    if (equal === void 0) {
      output.push(elem);
      continue;
    }
    const matrix = props.getter(equal).map((tags) => tags.map((t) => t.name)).sort();
    for (const tags of props.getter(elem)) {
      const names = tags.map((t) => t.name).sort();
      if (matrix.some((m) => m.length === names.length && m.every((s, i) => s === names[i]))) continue;
      props.getter(equal).push(tags);
    }
  }
  return output;
}, "mergeTaggedTypes");

// src/schemas/metadata/MetadataEscaped.ts
var MetadataEscaped = class _MetadataEscaped {
  static {
    _chunkUZ5BS2M3js.__name.call(void 0, this, "MetadataEscaped");
  }
  
  
  /**
  * @hidden
  */
  constructor(props) {
    this.original = props.original;
    this.returns = props.returns;
  }
  /**
  * @internal
  */
  static from(props, dict) {
    return _MetadataEscaped.create({
      original: Metadata.from(props.original, dict),
      returns: Metadata.from(props.returns, dict)
    });
  }
  /**
  * @internal
  */
  static create(props) {
    return new _MetadataEscaped(props);
  }
  getName() {
    return this.returns.getName();
  }
  toJSON() {
    return {
      original: this.original.toJSON(),
      returns: this.returns.toJSON()
    };
  }
};




exports.MetadataEscaped = MetadataEscaped; exports.Metadata = Metadata;
//# sourceMappingURL=chunk-6GHU2XFN.js.map