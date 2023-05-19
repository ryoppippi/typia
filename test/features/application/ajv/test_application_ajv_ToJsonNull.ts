import typia from "../../../../src";
import { _test_application } from "../../../internal/_test_application";
import { ToJsonNull } from "../../../structures/ToJsonNull";

export const test_application_ajv_ToJsonNull = _test_application("ajv")(
    "ToJsonNull",
    typia.application<[ToJsonNull], "ajv">(),
);
