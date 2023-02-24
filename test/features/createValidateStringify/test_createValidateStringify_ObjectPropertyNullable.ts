import typia from "typia";

import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_ObjectPropertyNullable = _test_validateStringify(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    typia.createValidateStringify<ObjectPropertyNullable>(),
    ObjectPropertyNullable.SPOILERS,
);