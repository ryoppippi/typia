"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunk7RG23QWPjs = require('./chunk-7RG23QWP.js');


var _chunkOMY5FRQ3js = require('./chunk-OMY5FRQ3.js');


var _chunkHCTJVXGJjs = require('./chunk-HCTJVXGJ.js');


var _chunkGXEQC72Cjs = require('./chunk-GXEQC72C.js');


var _chunk6GHU2XFNjs = require('./chunk-6GHU2XFN.js');


var _chunkTBFJDOPAjs = require('./chunk-TBFJDOPA.js');


var _chunkERQBF2DGjs = require('./chunk-ERQBF2DG.js');


var _chunkKB6237G4js = require('./chunk-KB6237G4.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/programmers/protobuf/ProtobufMessageProgrammer.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var ProtobufMessageProgrammer;
(function(ProtobufMessageProgrammer2) {
  ProtobufMessageProgrammer2.write = (project) => (type) => {
    const collection = new (0, _chunkERQBF2DGjs.MetadataCollection)();
    _chunkOMY5FRQ3js.ProtobufFactory.metadata("message")(project.checker, project.context)(collection)(type);
    const hierarchies = /* @__PURE__ */ new Map();
    for (const obj of collection.objects()) if (is_dynamic_object(obj) === false) emplace(hierarchies)(obj);
    const content = `syntax = "proto3";

` + [
      ...hierarchies.values()
    ].map((hier) => write_hierarchy(hier)).join("\n\n");
    return _typescript2.default.factory.createStringLiteral(content);
  };
  const emplace = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (dict) => (obj) => {
    const accessors = obj.name.split(".");
    accessors.forEach((access, i) => {
      const hierarchy = _chunkKB6237G4js.MapUtil.take(dict)(access, () => ({
        key: access,
        object: null,
        children: /* @__PURE__ */ new Map()
      }));
      dict = hierarchy.children;
      if (i === accessors.length - 1) hierarchy.object = obj;
    });
  }, "emplace");
  const is_dynamic_object = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (obj) => obj.properties.length === 1 && obj.properties[0].key.isSoleLiteral() === false, "is_dynamic_object");
  const write_hierarchy = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (hierarchy) => {
    const elements = [
      `message ${_chunk7RG23QWPjs.NameEncoder.encode(hierarchy.key)} {`
    ];
    if (hierarchy.object !== null) {
      const text = write_object(hierarchy.object);
      elements.push(...text.split("\n").map((str) => `${TAB}${str}`));
    }
    if (hierarchy.children.size) elements.push([
      ...hierarchy.children.values()
    ].map((child) => write_hierarchy(child)).map((body) => body.split("\n").map((line) => `${TAB}${line}`).join("\n")).join("\n\n"));
    elements.push("}");
    return elements.join("\n");
  }, "write_hierarchy");
  const write_object = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (obj) => {
    const ptr = {
      value: 0
    };
    return obj.properties.map((prop) => {
      const key = prop.key.getSoleLiteral();
      const type = decode(ptr)(prop.value);
      return type.indexOf("${name}") !== -1 ? type.replace("${name}", key) : `${prop.value.arrays.length || type.startsWith("map<") ? "" : !prop.value.isRequired() || prop.value.nullable ? "optional " : "required "}${type} ${key} = ${++ptr.value};`;
    }).join("\n");
  }, "write_object");
  const decode = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (ptr) => (meta) => {
    const elements = /* @__PURE__ */ new Set();
    if (meta.natives.length) elements.add("bytes");
    for (const atomic of _chunkHCTJVXGJjs.ProtobufUtil.getAtomics(meta)) elements.add(atomic);
    for (const array of meta.arrays) elements.add(`repeated ${decode(ptr)(array.type.value)}`);
    for (const obj of meta.objects) elements.add(is_dynamic_object(obj) ? decode_map(ptr)(_chunkGXEQC72Cjs.MetadataProperty.create({
      ...obj.properties[0],
      key: (() => {
        const key = _chunk6GHU2XFNjs.Metadata.initialize();
        key.atomics.push(_chunkTBFJDOPAjs.MetadataAtomic.create({
          type: "string",
          tags: []
        }));
        return key;
      })()
    })) : _chunk7RG23QWPjs.NameEncoder.encode(obj.name));
    for (const map of meta.maps) elements.add(decode_map(ptr)(map));
    return elements.size === 1 ? [
      ...elements
    ][0] : [
      "oneof ${name} {",
      ...[
        ...elements
      ].map((str) => `${TAB}${str} v${ptr.value + 1} = ${++ptr.value};`),
      "}"
    ].join("\n");
  }, "decode");
  const decode_map = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (ptr) => (prop) => `map<${decode(ptr)(prop.key)}, ${decode(ptr)(prop.value)}>`, "decode_map");
})(ProtobufMessageProgrammer || (ProtobufMessageProgrammer = exports.ProtobufMessageProgrammer = {}));
var TAB = " ".repeat(2);



exports.ProtobufMessageProgrammer = ProtobufMessageProgrammer;
//# sourceMappingURL=chunk-6YCBJ5E7.js.map