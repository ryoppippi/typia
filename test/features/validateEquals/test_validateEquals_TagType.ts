import typia from "typia";

import { TagType } from "../../structures/TagType";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_TagType = _test_validateEquals(
    "TagType",
    TagType.generate,
    (input) => typia.validateEquals(input),
);