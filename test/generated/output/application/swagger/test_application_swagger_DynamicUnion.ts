import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { DynamicUnion } from "../../../../structures/DynamicUnion";

export const test_application_swagger_DynamicUnion = _test_application(
    "swagger",
)("DynamicUnion", {
    schemas: [
        {
            $ref: "#/components/schemas/DynamicUnion",
        },
    ],
    components: {
        schemas: {
            DynamicUnion: {
                type: "object",
                properties: {},
                nullable: false,
                "x-typia-jsDocTags": [],
                "x-typia-patternProperties": {
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
                additionalProperties: {
                    oneOf: [
                        {
                            "x-typia-required": false,
                            type: "string",
                        },
                        {
                            "x-typia-required": false,
                            type: "number",
                        },
                    ],
                    "x-typia-required": false,
                },
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});
