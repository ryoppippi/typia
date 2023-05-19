import typia from "../../../../src";
import { _test_application } from "../../../internal/_test_application";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_application_ajv_AtomicUnion = _test_application("ajv")(
    "AtomicUnion",
    typia.application<[AtomicUnion], "ajv">(),
);
