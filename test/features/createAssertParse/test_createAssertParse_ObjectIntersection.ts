import typia from "typia";

import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_ObjectIntersection = _test_assertParse(
    "ObjectIntersection",
    ObjectIntersection.generate,
    typia.createAssertParse<ObjectIntersection>(),
    ObjectIntersection.SPOILERS,
);