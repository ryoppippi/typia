import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectIntersection } from "../../../../structures/ObjectIntersection";

export const test_application_swagger_ObjectIntersection = _test_application(
    "swagger",
)("ObjectIntersection", {
    schemas: [
        {
            $ref: "#/components/schemas/ObjectIntersection",
        },
    ],
    components: {
        schemas: {
            ObjectIntersection: {
                type: "object",
                properties: {
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
                    vulnerable: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "boolean",
                    },
                },
                nullable: false,
                required: ["email", "name", "vulnerable"],
                "x-typia-jsDocTags": [],
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});
