import typia from "../../../../src";
import { _test_application } from "../../../internal/_test_application";
import { NativeUnion } from "../../../structures/NativeUnion";

export const test_application_ajv_NativeUnion = _test_application("ajv")(
    "NativeUnion",
    typia.application<[NativeUnion], "ajv">(),
);
