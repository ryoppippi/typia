import typia from "../../../../src";
import { _test_application } from "../../../internal/_test_application";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";

export const test_application_ajv_ObjectUndefined = _test_application("ajv")(
    "ObjectUndefined",
    typia.application<[ObjectUndefined], "ajv">(),
);
