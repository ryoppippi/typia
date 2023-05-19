import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { TemplateAtomic } from "../../../../structures/TemplateAtomic";

export const test_application_swagger_TemplateAtomic = _test_application(
    "swagger",
)("TemplateAtomic", {
    schemas: [
        {
            $ref: "#/components/schemas/TemplateAtomic",
        },
    ],
    components: {
        schemas: {
            TemplateAtomic: {
                type: "object",
                properties: {
                    prefix: {
                        type: "string",
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        pattern: "^(prefix_(.*))",
                    },
                    postfix: {
                        type: "string",
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        pattern: "((.*)_postfix)$",
                    },
                    middle_string: {
                        type: "string",
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        pattern: "^(the_(.*)_value)$",
                    },
                    middle_string_empty: {
                        type: "string",
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        pattern: "^(the_(.*)_value)$",
                    },
                    middle_numeric: {
                        type: "string",
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        pattern: "^(the_-?\\d+\\.?\\d*_value)$",
                    },
                    middle_boolean: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                        enum: ["the_false_value", "the_true_value"],
                    },
                    ipv4: {
                        type: "string",
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        pattern:
                            "^(-?\\d+\\.?\\d*\\.-?\\d+\\.?\\d*\\.-?\\d+\\.?\\d*\\.-?\\d+\\.?\\d*)$",
                    },
                    email: {
                        type: "string",
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        pattern: "((.*)@(.*)\\.(.*))",
                    },
                },
                nullable: false,
                required: [
                    "prefix",
                    "postfix",
                    "middle_string",
                    "middle_string_empty",
                    "middle_numeric",
                    "middle_boolean",
                    "ipv4",
                    "email",
                ],
                description: "",
                "x-typia-jsDocTags": [],
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});
