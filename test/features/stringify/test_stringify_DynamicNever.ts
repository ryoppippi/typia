import typia from "typia";

import { DynamicNever } from "../../structures/DynamicNever";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_DynamicNever = _test_stringify(
    "DynamicNever",
    DynamicNever.generate,
    (input) => typia.stringify(input),
);