import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_misc_createAssertCloneCustom_ConstantEnumeration =
  _test_misc_assertClone(CustomGuardError)(
    "ConstantEnumeration",
  )<ConstantEnumeration>(ConstantEnumeration)(
    typia.misc.createAssertClone<ConstantEnumeration>(
      (p) => new CustomGuardError(p),
    ),
  );
