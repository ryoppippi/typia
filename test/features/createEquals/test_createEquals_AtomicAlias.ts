import typia from "typia";

import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_AtomicAlias = _test_equals(
    "AtomicAlias",
    AtomicAlias.generate,
    typia.createEquals<AtomicAlias>(),
);