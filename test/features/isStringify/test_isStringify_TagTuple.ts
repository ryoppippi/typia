import typia from "typia";

import { TagTuple } from "../../structures/TagTuple";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_TagTuple = _test_isStringify(
    "TagTuple",
    TagTuple.generate,
    (input) => typia.isStringify(input),
    TagTuple.SPOILERS,
);