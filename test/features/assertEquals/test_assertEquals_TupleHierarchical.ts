import typia from "typia";

import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_TupleHierarchical = _test_assertEquals(
    "TupleHierarchical",
    TupleHierarchical.generate,
    (input) => typia.assertEquals(input),
);