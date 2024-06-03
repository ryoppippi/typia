"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUJIU45F6js = require('./chunk-UJIU45F6.js');


var _chunkZGVGLUH4js = require('./chunk-ZGVGLUH4.js');


var _chunkDEEK72LSjs = require('./chunk-DEEK72LS.js');


var _chunkH3MUGVKWjs = require('./chunk-H3MUGVKW.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/programmers/json/JsonApplicationProgrammer.ts
var JsonApplicationProgrammer;
(function(JsonApplicationProgrammer2) {
  JsonApplicationProgrammer2.validate = (meta) => {
    const output = [];
    if (meta.atomics.some((a) => a.type === "bigint") || meta.constants.some((c) => c.type === "bigint")) output.push("JSON schema does not support bigint type.");
    if (meta.tuples.some((t) => t.type.elements.some((e) => e.isRequired() === false)) || meta.arrays.some((a) => a.type.value.isRequired() === false)) output.push("JSON schema does not support undefined type in array.");
    if (meta.maps.length) output.push("JSON schema does not support Map type.");
    if (meta.sets.length) output.push("JSON schema does not support Set type.");
    for (const native of meta.natives) if (_chunkDEEK72LSjs.AtomicPredicator.native(native) === false && native !== "Date" && native !== "Blob" && native !== "File") output.push(`JSON schema does not support ${native} type.`);
    return output;
  };
  JsonApplicationProgrammer2.write = (version) => version === "3.0" ? v30 : v31;
  const v30 = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (metadatas) => {
    const components = {};
    const generator = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (meta) => _chunkUJIU45F6js.application_v30_schema.call(void 0, true)(components)({})(meta), "generator");
    return {
      version: "3.0",
      components,
      schemas: metadatas.map((meta, i) => {
        const schema = generator(meta);
        if (schema === null) throw new (0, _chunkH3MUGVKWjs.TransformerError)({
          code: "typia.json.application",
          message: `invalid type on argument - (${meta.getName()}, ${i})`
        });
        return schema;
      })
    };
  }, "v30");
  const v31 = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (metadatas) => {
    const components = {
      schemas: {}
    };
    const generator = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (meta) => _chunkZGVGLUH4js.application_v31_schema.call(void 0, true)(components)({})(meta), "generator");
    return {
      version: "3.1",
      components,
      schemas: metadatas.map((meta, i) => {
        const schema = generator(meta);
        if (schema === null) throw new (0, _chunkH3MUGVKWjs.TransformerError)({
          code: "typia.json.application",
          message: `invalid type on argument - (${meta.getName()}, ${i})`
        });
        return schema;
      })
    };
  }, "v31");
})(JsonApplicationProgrammer || (JsonApplicationProgrammer = exports.JsonApplicationProgrammer = {}));



exports.JsonApplicationProgrammer = JsonApplicationProgrammer;
//# sourceMappingURL=chunk-52UMHPEK.js.map