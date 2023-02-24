import typia from "typia";

import { FunctionalProperty } from "../../structures/FunctionalProperty";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_FunctionalProperty = _test_assertEquals(
    "FunctionalProperty",
    FunctionalProperty.generate,
    (input) => typia.assertEquals(input),
);