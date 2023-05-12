import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_createAssert_TupleRestObject = _test_assert(
    "TupleRestObject",
    TupleRestObject.generate,
    typia.createAssert<TupleRestObject>(),
    TupleRestObject.SPOILERS,
);