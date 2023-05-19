import typia from "../../../../src";
import { _test_application } from "../../../internal/_test_application";
import { ArrayAtomicAlias } from "../../../structures/ArrayAtomicAlias";

export const test_application_ajv_ArrayAtomicAlias = _test_application("ajv")(
    "ArrayAtomicAlias",
    typia.application<[ArrayAtomicAlias], "ajv">(),
);
