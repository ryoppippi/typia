import typia from "typia";

import { TagStep } from "../../structures/TagStep";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_TagStep = _test_stringify(
    "TagStep",
    TagStep.generate,
    (input) => typia.stringify(input),
);