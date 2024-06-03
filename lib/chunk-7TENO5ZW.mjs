import {
  NameEncoder
} from "./chunk-PF5ZP7EX.mjs";
import {
  ProtobufFactory
} from "./chunk-PVVGCRYT.mjs";
import {
  ProtobufUtil
} from "./chunk-URL374Q3.mjs";
import {
  MetadataProperty
} from "./chunk-WJSELHNL.mjs";
import {
  Metadata
} from "./chunk-RD644GUB.mjs";
import {
  MetadataAtomic
} from "./chunk-X7O4QE24.mjs";
import {
  MetadataCollection
} from "./chunk-MX63JLF5.mjs";
import {
  MapUtil
} from "./chunk-NDRJDMPV.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/programmers/protobuf/ProtobufMessageProgrammer.ts
import ts from "typescript";
var ProtobufMessageProgrammer;
(function(ProtobufMessageProgrammer2) {
  ProtobufMessageProgrammer2.write = (project) => (type) => {
    const collection = new MetadataCollection();
    ProtobufFactory.metadata("message")(project.checker, project.context)(collection)(type);
    const hierarchies = /* @__PURE__ */ new Map();
    for (const obj of collection.objects()) if (is_dynamic_object(obj) === false) emplace(hierarchies)(obj);
    const content = `syntax = "proto3";

` + [
      ...hierarchies.values()
    ].map((hier) => write_hierarchy(hier)).join("\n\n");
    return ts.factory.createStringLiteral(content);
  };
  const emplace = /* @__PURE__ */ __name((dict) => (obj) => {
    const accessors = obj.name.split(".");
    accessors.forEach((access, i) => {
      const hierarchy = MapUtil.take(dict)(access, () => ({
        key: access,
        object: null,
        children: /* @__PURE__ */ new Map()
      }));
      dict = hierarchy.children;
      if (i === accessors.length - 1) hierarchy.object = obj;
    });
  }, "emplace");
  const is_dynamic_object = /* @__PURE__ */ __name((obj) => obj.properties.length === 1 && obj.properties[0].key.isSoleLiteral() === false, "is_dynamic_object");
  const write_hierarchy = /* @__PURE__ */ __name((hierarchy) => {
    const elements = [
      `message ${NameEncoder.encode(hierarchy.key)} {`
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
  const write_object = /* @__PURE__ */ __name((obj) => {
    const ptr = {
      value: 0
    };
    return obj.properties.map((prop) => {
      const key = prop.key.getSoleLiteral();
      const type = decode(ptr)(prop.value);
      return type.indexOf("${name}") !== -1 ? type.replace("${name}", key) : `${prop.value.arrays.length || type.startsWith("map<") ? "" : !prop.value.isRequired() || prop.value.nullable ? "optional " : "required "}${type} ${key} = ${++ptr.value};`;
    }).join("\n");
  }, "write_object");
  const decode = /* @__PURE__ */ __name((ptr) => (meta) => {
    const elements = /* @__PURE__ */ new Set();
    if (meta.natives.length) elements.add("bytes");
    for (const atomic of ProtobufUtil.getAtomics(meta)) elements.add(atomic);
    for (const array of meta.arrays) elements.add(`repeated ${decode(ptr)(array.type.value)}`);
    for (const obj of meta.objects) elements.add(is_dynamic_object(obj) ? decode_map(ptr)(MetadataProperty.create({
      ...obj.properties[0],
      key: (() => {
        const key = Metadata.initialize();
        key.atomics.push(MetadataAtomic.create({
          type: "string",
          tags: []
        }));
        return key;
      })()
    })) : NameEncoder.encode(obj.name));
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
  const decode_map = /* @__PURE__ */ __name((ptr) => (prop) => `map<${decode(ptr)(prop.key)}, ${decode(ptr)(prop.value)}>`, "decode_map");
})(ProtobufMessageProgrammer || (ProtobufMessageProgrammer = {}));
var TAB = " ".repeat(2);

export {
  ProtobufMessageProgrammer
};
//# sourceMappingURL=chunk-7TENO5ZW.mjs.map