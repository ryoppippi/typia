import typia from "../../../../src";
import { _test_application } from "../../../internal/_test_application";
import { ArrayRecursive } from "../../../structures/ArrayRecursive";

export const test_application_ajv_ArrayRecursive = _test_application("ajv")(
    "ArrayRecursive",
    typia.application<[ArrayRecursive], "ajv">(),
);
