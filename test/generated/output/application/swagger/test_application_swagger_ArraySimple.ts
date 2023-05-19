import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ArraySimple } from "../../../../structures/ArraySimple";

export const test_application_swagger_ArraySimple = _test_application(
    "swagger",
)("ArraySimple", {
    schemas: [
        {
            type: "array",
            items: {
                $ref: "#/components/schemas/ArraySimple.IPerson",
            },
        },
    ],
    components: {
        schemas: {
            "ArraySimple.IPerson": {
                type: "object",
                properties: {
                    name: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                    email: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                    hobbies: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/ArraySimple.IHobby",
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                    },
                },
                nullable: false,
                required: ["name", "email", "hobbies"],
                description: "",
                "x-typia-jsDocTags": [],
            },
            "ArraySimple.IHobby": {
                type: "object",
                properties: {
                    name: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                    body: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                    rank: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                },
                nullable: false,
                required: ["name", "body", "rank"],
                description: "",
                "x-typia-jsDocTags": [],
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});
