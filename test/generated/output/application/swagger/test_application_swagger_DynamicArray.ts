import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { DynamicArray } from "../../../../structures/DynamicArray";

export const test_application_swagger_DynamicArray = _test_application(
    "swagger",
)("DynamicArray", {
    schemas: [
        {
            $ref: "#/components/schemas/DynamicArray",
        },
    ],
    components: {
        schemas: {
            DynamicArray: {
                type: "object",
                properties: {},
                nullable: false,
                description: "",
                "x-typia-jsDocTags": [],
                "x-typia-additionalProperties": {
                    "x-typia-required": true,
                    "x-typia-optional": false,
                    type: "array",
                    items: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                },
                additionalProperties: {
                    "x-typia-required": true,
                    "x-typia-optional": false,
                    type: "array",
                    items: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                },
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});
