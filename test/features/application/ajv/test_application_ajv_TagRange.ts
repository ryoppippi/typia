import typia from "../../../../src";
import { _test_application } from "../../../internal/_test_application";
import { TagRange } from "../../../structures/TagRange";

export const test_application_ajv_TagRange = _test_application("ajv")(
    "TagRange",
    typia.application<[TagRange], "ajv">(),
);
