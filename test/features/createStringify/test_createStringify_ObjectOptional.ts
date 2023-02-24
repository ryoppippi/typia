import typia from "typia";

import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_ObjectOptional = _test_stringify(
    "ObjectOptional",
    ObjectOptional.generate,
    typia.createStringify<ObjectOptional>(),
);