import typia from "typia";

import { ToJsonDouble } from "../../structures/ToJsonDouble";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_ToJsonDouble = _test_assertEquals(
    "ToJsonDouble",
    ToJsonDouble.generate,
    typia.createAssertEquals<ToJsonDouble>(),
);