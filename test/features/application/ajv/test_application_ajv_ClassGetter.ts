import typia from "../../../../src";
import { _test_application } from "../../../internal/_test_application";
import { ClassGetter } from "../../../structures/ClassGetter";

export const test_application_ajv_ClassGetter = _test_application("ajv")(
    "ClassGetter",
    typia.application<[ClassGetter], "ajv">(),
);
