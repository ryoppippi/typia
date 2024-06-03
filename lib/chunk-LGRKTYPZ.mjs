import {
  Metadata
} from "./chunk-RD644GUB.mjs";
import {
  MetadataConstant
} from "./chunk-NKBJZZWD.mjs";
import {
  MetadataConstantValue
} from "./chunk-AKMTTBJF.mjs";

// src/factories/internal/metadata/MetadataHelper.ts
var MetadataHelper;
(function(MetadataHelper2) {
  MetadataHelper2.literal_to_metadata = (key) => {
    const metadata = Metadata.initialize();
    metadata.constants.push(MetadataConstant.create({
      type: "string",
      values: [
        MetadataConstantValue.create({
          value: key,
          tags: void 0
        })
      ]
    }));
    return metadata;
  };
})(MetadataHelper || (MetadataHelper = {}));

export {
  MetadataHelper
};
//# sourceMappingURL=chunk-LGRKTYPZ.mjs.map