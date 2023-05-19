import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { DynamicUnion } from "../../../../structures/DynamicUnion";

export const test_application_ajv_DynamicUnion = _test_application("ajv")(
    "DynamicUnion",
    {
        schemas: [
            {
                $ref: "#/components/schemas/DynamicUnion",
            },
        ],
        components: {
            schemas: {
                DynamicUnion: {
                    $id: "#/components/schemas/DynamicUnion",
                    type: "object",
                    properties: {},
                    "x-typia-jsDocTags": [],
                    patternProperties: {
                        "^-?\\d+\\.?\\d*$": {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
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
                        "^(value_between_-?\\d+\\.?\\d*_and_-?\\d+\\.?\\d*)$": {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                    },
                },
            },
        },
        purpose: "ajv",
        prefix: "#/components/schemas",
    },
);
