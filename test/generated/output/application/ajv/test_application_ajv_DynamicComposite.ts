import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { DynamicComposite } from "../../../../structures/DynamicComposite";

export const test_application_ajv_DynamicComposite = _test_application("ajv")(
    "DynamicComposite",
    {
        schemas: [
            {
                $ref: "#/components/schemas/DynamicComposite",
            },
        ],
        components: {
            schemas: {
                DynamicComposite: {
                    $id: "#/components/schemas/DynamicComposite",
                    type: "object",
                    properties: {
                        id: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        name: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                    },
                    required: ["id", "name"],
                    description: "",
                    "x-typia-jsDocTags": [],
                    patternProperties: {
                        "^-?\\d+\\.?\\d*$": {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
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
                        "^(value_-?\\d+\\.?\\d*)$": {
                            oneOf: [
                                {
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "string",
                                },
                                {
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "number",
                                },
                                {
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "boolean",
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
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
