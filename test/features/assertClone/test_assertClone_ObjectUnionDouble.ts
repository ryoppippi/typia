import typia from "typia";

import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_ObjectUnionDouble = _test_assertClone(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    (input) => typia.assertClone(input),
    ObjectUnionDouble.SPOILERS,
);