import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { DynamicArray } from "../../../../structures/DynamicArray";

export const test_application_ajv_DynamicArray = _test_application("ajv")(
    "DynamicArray",
    {
        schemas: [
            {
                $ref: "#/components/schemas/DynamicArray",
            },
        ],
        components: {
            schemas: {
                DynamicArray: {
                    $id: "#/components/schemas/DynamicArray",
                    type: "object",
                    properties: {},
                    description: "",
                    "x-typia-jsDocTags": [],
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
        purpose: "ajv",
        prefix: "#/components/schemas",
    },
);
