import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { TemplateConstant } from "../../../../structures/TemplateConstant";

export const test_application_ajv_TemplateConstant = _test_application("ajv")(
    "TemplateConstant",
    {
        schemas: [
            {
                type: "array",
                items: {
                    $ref: "#/components/schemas/TemplateConstant.Type",
                },
            },
        ],
        components: {
            schemas: {
                "TemplateConstant.Type": {
                    $id: "#/components/schemas/TemplateConstant.Type",
                    type: "object",
                    properties: {
                        prefix: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["prefix_A", "prefix_B", "prefix_C"],
                        },
                        postfix: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["1_postfix", "3_postfix", "2_postfix"],
                        },
                        combined: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: [
                                "the_1_value_with_label_A",
                                "the_1_value_with_label_B",
                                "the_1_value_with_label_C",
                                "the_3_value_with_label_A",
                                "the_3_value_with_label_B",
                                "the_3_value_with_label_C",
                                "the_2_value_with_label_A",
                                "the_2_value_with_label_B",
                                "the_2_value_with_label_C",
                            ],
                        },
                    },
                    required: ["prefix", "postfix", "combined"],
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "#/components/schemas",
    },
);
