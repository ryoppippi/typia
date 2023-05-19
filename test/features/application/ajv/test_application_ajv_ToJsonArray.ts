import typia from "../../../../src";
import { _test_application } from "../../../internal/_test_application";
import { ToJsonArray } from "../../../structures/ToJsonArray";

export const test_application_ajv_ToJsonArray = _test_application("ajv")(
    "ToJsonArray",
    typia.application<[ToJsonArray], "ajv">(),
);
