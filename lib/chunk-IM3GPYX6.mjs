import {
  application_v30_schema
} from "./chunk-ODV3SFMC.mjs";
import {
  application_v31_schema
} from "./chunk-KAZRKH6X.mjs";
import {
  AtomicPredicator
} from "./chunk-EPGYGA2I.mjs";
import {
  TransformerError
} from "./chunk-77LTYCTZ.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/programmers/json/JsonApplicationProgrammer.ts
var JsonApplicationProgrammer;
(function(JsonApplicationProgrammer2) {
  JsonApplicationProgrammer2.validate = (meta) => {
    const output = [];
    if (meta.atomics.some((a) => a.type === "bigint") || meta.constants.some((c) => c.type === "bigint")) output.push("JSON schema does not support bigint type.");
    if (meta.tuples.some((t) => t.type.elements.some((e) => e.isRequired() === false)) || meta.arrays.some((a) => a.type.value.isRequired() === false)) output.push("JSON schema does not support undefined type in array.");
    if (meta.maps.length) output.push("JSON schema does not support Map type.");
    if (meta.sets.length) output.push("JSON schema does not support Set type.");
    for (const native of meta.natives) if (AtomicPredicator.native(native) === false && native !== "Date" && native !== "Blob" && native !== "File") output.push(`JSON schema does not support ${native} type.`);
    return output;
  };
  JsonApplicationProgrammer2.write = (version) => version === "3.0" ? v30 : v31;
  const v30 = /* @__PURE__ */ __name((metadatas) => {
    const components = {};
    const generator = /* @__PURE__ */ __name((meta) => application_v30_schema(true)(components)({})(meta), "generator");
    return {
      version: "3.0",
      components,
      schemas: metadatas.map((meta, i) => {
        const schema = generator(meta);
        if (schema === null) throw new TransformerError({
          code: "typia.json.application",
          message: `invalid type on argument - (${meta.getName()}, ${i})`
        });
        return schema;
      })
    };
  }, "v30");
  const v31 = /* @__PURE__ */ __name((metadatas) => {
    const components = {
      schemas: {}
    };
    const generator = /* @__PURE__ */ __name((meta) => application_v31_schema(true)(components)({})(meta), "generator");
    return {
      version: "3.1",
      components,
      schemas: metadatas.map((meta, i) => {
        const schema = generator(meta);
        if (schema === null) throw new TransformerError({
          code: "typia.json.application",
          message: `invalid type on argument - (${meta.getName()}, ${i})`
        });
        return schema;
      })
    };
  }, "v31");
})(JsonApplicationProgrammer || (JsonApplicationProgrammer = {}));

export {
  JsonApplicationProgrammer
};
//# sourceMappingURL=chunk-IM3GPYX6.mjs.map