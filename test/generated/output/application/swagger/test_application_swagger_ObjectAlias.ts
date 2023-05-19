import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectAlias } from "../../../../structures/ObjectAlias";

export const test_application_swagger_ObjectAlias = _test_application(
    "swagger",
)("ObjectAlias", {
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
                type: "object",
                properties: {
                    id: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                        nullable: true,
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
                                type: "number",
                                enum: [1, 2],
                                nullable: true,
                            },
                            {
                                description: "",
                                "x-typia-required": true,
                                "x-typia-optional": false,
                                type: "string",
                                enum: ["male", "female"],
                                nullable: true,
                            },
                        ],
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                    age: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                        nullable: true,
                    },
                    dead: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "boolean",
                        nullable: true,
                    },
                },
                nullable: false,
                required: ["id", "email", "name", "sex", "age", "dead"],
                description: "",
                "x-typia-jsDocTags": [],
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});
