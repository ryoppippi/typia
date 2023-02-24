import typia from "typia";

import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_ConstantAtomicSimple = _test_assert(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    typia.createAssert<ConstantAtomicSimple>(),
    ConstantAtomicSimple.SPOILERS,
);