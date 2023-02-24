import typia from "typia";

import { TagType } from "../../structures/TagType";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_TagType = _test_clone(
    "TagType",
    TagType.generate,
    typia.createClone<TagType>(),
);