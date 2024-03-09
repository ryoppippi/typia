import { MetadataObject } from "../../../schemas/metadata/MetadataObject";

import { MetadataCommentTagFactory } from "../../MetadataCommentTagFactory";
import { MetadataFactory } from "../../MetadataFactory";

/**
 * @internal
 */
export const iterate_metadata_comment_tags =
  (ctx: MetadataFactory.IContext) => (object: MetadataObject) => {
    if (object.tagged_ === true) return;
    object.tagged_ = true;

    for (const property of object.properties) {
      MetadataCommentTagFactory.analyze(ctx.errors)(
        property.value,
        property.jsDocTags,
        {
          top: false,
          object,
          property: property.key.isSoleLiteral()
            ? property.key.getSoleLiteral()!
            : {},
          nested: null,
          escaped: false,
          aliased: false,
        },
      );
    }
  };
