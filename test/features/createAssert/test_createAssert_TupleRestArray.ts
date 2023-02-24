import typia from "typia";

import { TupleRestArray } from "../../structures/TupleRestArray";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_TupleRestArray = _test_assert(
    "TupleRestArray",
    TupleRestArray.generate,
    typia.createAssert<TupleRestArray>(),
    TupleRestArray.SPOILERS,
);