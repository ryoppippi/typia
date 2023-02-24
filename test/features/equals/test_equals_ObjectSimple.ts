import typia from "typia";

import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_ObjectSimple = _test_equals(
    "ObjectSimple",
    ObjectSimple.generate,
    (input) => typia.equals(input),
);