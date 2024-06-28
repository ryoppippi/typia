import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_functional_assertParameters_NativeAlias =
  _test_functional_assertParameters(TypeGuardError)("NativeAlias")(NativeAlias)(
    (p: (input: NativeAlias) => NativeAlias) =>
      typia.functional.assertParameters(p),
  );
