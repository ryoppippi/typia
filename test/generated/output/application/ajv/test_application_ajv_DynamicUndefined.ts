import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { DynamicUndefined } from "../../../../structures/DynamicUndefined";

export const test_application_ajv_DynamicUndefined = _test_application("ajv")(
    "DynamicUndefined",
    {
        schemas: [
            {
                $ref: "#/components/schemas/DynamicUndefined",
            },
        ],
        components: {
            schemas: {
                DynamicUndefined: {
                    $id: "#/components/schemas/DynamicUndefined",
                    type: "object",
                    properties: {},
                    description: "",
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "#/components/schemas",
    },
);
