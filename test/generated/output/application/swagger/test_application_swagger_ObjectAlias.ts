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
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                        nullable: true,
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
                                type: "number",
                                enum: [1, 2],
                                nullable: true,
                            },
                            {
                                "x-typia-required": true,
                                "x-typia-optional": false,
                                type: "string",
                                enum: ["male", "female"],
                                nullable: true,
                            },
                        ],
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                    age: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                        nullable: true,
                    },
                    dead: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "boolean",
                        nullable: true,
                    },
                },
                nullable: false,
                required: ["id", "email", "name", "sex", "age", "dead"],
                "x-typia-jsDocTags": [],
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});
