"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkS4XWOJV7js = require('./chunk-S4XWOJV7.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/factories/internal/metadata/iterate_metadata_comment_tags.ts
var iterate_metadata_comment_tags = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (errors) => (object) => {
  if (object.tagged_ === true) return;
  object.tagged_ = true;
  for (const property of object.properties) {
    _chunkS4XWOJV7js.MetadataCommentTagFactory.analyze(errors)(property.value)(property.jsDocTags, {
      top: false,
      object,
      property: property.key.isSoleLiteral() ? property.key.getSoleLiteral() : {},
      nested: null,
      escaped: false,
      aliased: false
    });
  }
}, "iterate_metadata_comment_tags");



exports.iterate_metadata_comment_tags = iterate_metadata_comment_tags;
//# sourceMappingURL=chunk-XVFNUK4Y.js.map