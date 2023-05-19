import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { DynamicTemplate } from "../../../../structures/DynamicTemplate";

export const test_application_ajv_DynamicTemplate = _test_application("ajv")(
    "DynamicTemplate",
    {
        schemas: [
            {
                $ref: "#/components/schemas/DynamicTemplate",
            },
        ],
        components: {
            schemas: {
                DynamicTemplate: {
                    $id: "#/components/schemas/DynamicTemplate",
                    type: "object",
                    properties: {},
                    description: "",
                    "x-typia-jsDocTags": [],
                    patternProperties: {
                        "^(prefix_(.*))": {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        "((.*)_postfix)$": {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        "^(value_-?\\d+\\.?\\d*)$": {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        "^(between_(.*)_and_-?\\d+\\.?\\d*)$": {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "boolean",
                        },
                    },
                },
            },
        },
        purpose: "ajv",
        prefix: "#/components/schemas",
    },
);
