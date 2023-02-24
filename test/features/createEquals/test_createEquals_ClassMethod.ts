import typia from "typia";

import { ClassMethod } from "../../structures/ClassMethod";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_ClassMethod = _test_equals(
    "ClassMethod",
    ClassMethod.generate,
    typia.createEquals<ClassMethod>(),
);