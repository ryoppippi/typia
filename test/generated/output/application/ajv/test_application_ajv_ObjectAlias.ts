import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectAlias } from "../../../../structures/ObjectAlias";

export const test_application_ajv_ObjectAlias = _test_application("ajv")(
    "ObjectAlias",
    {
        schemas: [
            {
                type: "array",
                items: {
                    $ref: "#/components/schemas/ObjectAlias.IMember",
                },
            },
        ],
        components: {
            schemas: {
                "ObjectAlias.IMember": {
                    $id: "#/components/schemas/ObjectAlias.IMember",
                    type: "object",
                    properties: {
                        id: {
                            oneOf: [
                                {
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "null",
                                },
                                {
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "string",
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                        email: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        name: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        sex: {
                            oneOf: [
                                {
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "null",
                                },
                                {
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "number",
                                    enum: [1, 2],
                                },
                                {
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "string",
                                    enum: ["male", "female"],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                        age: {
                            oneOf: [
                                {
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "null",
                                },
                                {
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "number",
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                        dead: {
                            oneOf: [
                                {
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "null",
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
                    },
                    required: ["id", "email", "name", "sex", "age", "dead"],
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "#/components/schemas",
    },
);
