import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_functional_assertEqualsFunctionAsync_DynamicTag =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)("DynamicTag")(
    DynamicTag,
  )((p: (input: DynamicTag) => Promise<DynamicTag>) =>
    typia.functional.assertEqualsFunction(p),
  );
