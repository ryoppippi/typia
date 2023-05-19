import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { DynamicNever } from "../../../../structures/DynamicNever";

export const test_application_ajv_DynamicNever = _test_application("ajv")(
    "DynamicNever",
    {
        schemas: [
            {
                $ref: "#/components/schemas/DynamicNever",
            },
        ],
        components: {
            schemas: {
                DynamicNever: {
                    $id: "#/components/schemas/DynamicNever",
                    type: "object",
                    properties: {},
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "#/components/schemas",
    },
);
