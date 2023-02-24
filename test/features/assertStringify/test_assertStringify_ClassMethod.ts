import typia from "typia";

import { ClassMethod } from "../../structures/ClassMethod";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_ClassMethod = _test_assertStringify(
    "ClassMethod",
    ClassMethod.generate,
    (input) => typia.assertStringify(input),
    ClassMethod.SPOILERS,
);