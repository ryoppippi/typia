import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_functional_assertEqualsFunctionCustom_DynamicTag =
  _test_functional_assertEqualsFunction(CustomGuardError)("DynamicTag")(
    DynamicTag,
  )((p: (input: DynamicTag) => DynamicTag) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
