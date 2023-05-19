import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectIntersection } from "../../../../structures/ObjectIntersection";

export const test_application_ajv_ObjectIntersection = _test_application("ajv")(
    "ObjectIntersection",
    {
        schemas: [
            {
                $ref: "#/components/schemas/ObjectIntersection",
            },
        ],
        components: {
            schemas: {
                ObjectIntersection: {
                    $id: "#/components/schemas/ObjectIntersection",
                    type: "object",
                    properties: {
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
                        vulnerable: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "boolean",
                        },
                    },
                    required: ["email", "name", "vulnerable"],
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "#/components/schemas",
    },
);
