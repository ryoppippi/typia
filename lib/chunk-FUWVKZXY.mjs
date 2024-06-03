import {
  MetadataCommentTagFactory
} from "./chunk-NSJTAKAP.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/factories/internal/metadata/iterate_metadata_comment_tags.ts
var iterate_metadata_comment_tags = /* @__PURE__ */ __name((errors) => (object) => {
  if (object.tagged_ === true) return;
  object.tagged_ = true;
  for (const property of object.properties) {
    MetadataCommentTagFactory.analyze(errors)(property.value)(property.jsDocTags, {
      top: false,
      object,
      property: property.key.isSoleLiteral() ? property.key.getSoleLiteral() : {},
      nested: null,
      escaped: false,
      aliased: false
    });
  }
}, "iterate_metadata_comment_tags");

export {
  iterate_metadata_comment_tags
};
//# sourceMappingURL=chunk-FUWVKZXY.mjs.map