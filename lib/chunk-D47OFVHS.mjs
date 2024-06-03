import {
  Metadata
} from "./chunk-RD644GUB.mjs";
import {
  MetadataArray
} from "./chunk-HXFVCUNO.mjs";
import {
  MetadataArrayType
} from "./chunk-S6FVASNO.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/programmers/internal/wrap_metadata_rest_tuple.ts
var wrap_metadata_rest_tuple = /* @__PURE__ */ __name((rest) => {
  const wrapper = Metadata.initialize();
  wrapper.arrays.push(MetadataArray.create({
    type: MetadataArrayType.create({
      name: `...${rest.getName()}`,
      value: rest,
      nullables: [],
      recursive: false,
      index: null
    }),
    tags: []
  }));
  return wrapper;
}, "wrap_metadata_rest_tuple");

export {
  wrap_metadata_rest_tuple
};
//# sourceMappingURL=chunk-D47OFVHS.mjs.map