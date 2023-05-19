import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { TagType } from "../../../../structures/TagType";

export const test_application_ajv_TagType = _test_application("ajv")(
    "TagType",
    {
        schemas: [
            {
                type: "array",
                items: {
                    $ref: "#/components/schemas/TagType.Type",
                },
            },
        ],
        components: {
            schemas: {
                "TagType.Type": {
                    $id: "#/components/schemas/TagType.Type",
                    type: "object",
                    properties: {
                        int: {
                            description:
                                "Integer type.\nThis is to explain {@link int} value in {@link TagType.Type}.\n@type int\n@example https://example.com",
                            "x-typia-metaTags": [
                                {
                                    kind: "type",
                                    value: "int",
                                },
                            ],
                            "x-typia-jsDocTags": [
                                {
                                    name: "type",
                                    text: [
                                        {
                                            text: "int",
                                            kind: "text",
                                        },
                                    ],
                                },
                                {
                                    name: "example",
                                    text: [
                                        {
                                            text: "https://example.com",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "integer",
                        },
                        uint: {
                            description: "Unsigned integer type.\n@type uint",
                            "x-typia-metaTags": [
                                {
                                    kind: "type",
                                    value: "uint",
                                },
                            ],
                            "x-typia-jsDocTags": [
                                {
                                    name: "type",
                                    text: [
                                        {
                                            text: "uint",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "integer",
                            minimum: 0,
                        },
                    },
                    required: ["int", "uint"],
                    description: "Unsigned integer type.\n@type uint",
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "#/components/schemas",
    },
);
