import typia from "typia";

import { ClassGetter } from "../../structures/ClassGetter";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_ClassGetter = _test_validateStringify(
    "ClassGetter",
    ClassGetter.generate,
    (input) => typia.validateStringify(input),
    ClassGetter.SPOILERS,
);