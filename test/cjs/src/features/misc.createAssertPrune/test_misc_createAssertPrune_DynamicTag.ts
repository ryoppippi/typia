import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_misc_createAssertPrune_DynamicTag = _test_misc_assertPrune(
  TypeGuardError,
)("DynamicTag")<DynamicTag>(DynamicTag)(
  typia.misc.createAssertPrune<DynamicTag>(),
);
