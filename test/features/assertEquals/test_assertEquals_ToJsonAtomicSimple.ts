import typia from "typia";

import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_ToJsonAtomicSimple = _test_assertEquals(
    "ToJsonAtomicSimple",
    ToJsonAtomicSimple.generate,
    (input) => typia.assertEquals(input),
);