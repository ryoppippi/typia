import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { TagObjectUnion } from "../../../../structures/TagObjectUnion";

export const test_application_swagger_TagObjectUnion = _test_application(
    "swagger",
)("TagObjectUnion", {
    schemas: [
        {
            type: "array",
            items: {
                oneOf: [
                    {
                        $ref: "#/components/schemas/TagObjectUnion.Numeric",
                    },
                    {
                        $ref: "#/components/schemas/TagObjectUnion.Literal",
                    },
                ],
            },
        },
    ],
    components: {
        schemas: {
            "TagObjectUnion.Numeric": {
                type: "object",
                properties: {
                    value: {
                        description: "@minimum 3",
                        "x-typia-metaTags": [
                            {
                                kind: "minimum",
                                value: 3,
                            },
                        ],
                        "x-typia-jsDocTags": [
                            {
                                name: "minimum",
                                text: [
                                    {
                                        text: "3",
                                        kind: "text",
                                    },
                                ],
                            },
                        ],
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                        minimum: 3,
                    },
                },
                nullable: false,
                required: ["value"],
                description: "@minimum 3",
                "x-typia-jsDocTags": [],
            },
            "TagObjectUnion.Literal": {
                type: "object",
                properties: {
                    value: {
                        description: "@minLength 3\n@maxLength 7",
                        "x-typia-metaTags": [
                            {
                                kind: "minLength",
                                value: 3,
                            },
                            {
                                kind: "maxLength",
                                value: 7,
                            },
                        ],
                        "x-typia-jsDocTags": [
                            {
                                name: "minLength",
                                text: [
                                    {
                                        text: "3",
                                        kind: "text",
                                    },
                                ],
                            },
                            {
                                name: "maxLength",
                                text: [
                                    {
                                        text: "7",
                                        kind: "text",
                                    },
                                ],
                            },
                        ],
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                        minLength: 3,
                        maxLength: 7,
                    },
                },
                nullable: false,
                required: ["value"],
                description: "@minLength 3\n@maxLength 7",
                "x-typia-jsDocTags": [],
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});
