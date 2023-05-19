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
                                    description: "",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "null",
                                },
                                {
                                    description: "",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "string",
                                },
                            ],
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                        email: {
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
                        sex: {
                            oneOf: [
                                {
                                    description: "",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "null",
                                },
                                {
                                    description: "",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "number",
                                    enum: [1, 2],
                                },
                                {
                                    description: "",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "string",
                                    enum: ["male", "female"],
                                },
                            ],
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                        age: {
                            oneOf: [
                                {
                                    description: "",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "null",
                                },
                                {
                                    description: "",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "number",
                                },
                            ],
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                        dead: {
                            oneOf: [
                                {
                                    description: "",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "null",
                                },
                                {
                                    description: "",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "boolean",
                                },
                            ],
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                    },
                    required: ["id", "email", "name", "sex", "age", "dead"],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "#/components/schemas",
    },
);
