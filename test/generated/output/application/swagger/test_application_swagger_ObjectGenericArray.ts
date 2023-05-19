import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectGenericArray } from "../../../../structures/ObjectGenericArray";

export const test_application_swagger_ObjectGenericArray = _test_application(
    "swagger",
)("ObjectGenericArray", {
    schemas: [
        {
            $ref: "#/components/schemas/ObjectGenericArray",
        },
    ],
    components: {
        schemas: {
            ObjectGenericArray: {
                type: "object",
                properties: {
                    pagination: {
                        $ref: "#/components/schemas/ObjectGenericArray.IPagination",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                    data: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/ObjectGenericArray.IPerson",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                    },
                },
                nullable: false,
                required: ["pagination", "data"],
                "x-typia-jsDocTags": [],
            },
            "ObjectGenericArray.IPagination": {
                type: "object",
                properties: {
                    page: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                    limit: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                    total_count: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                    total_pages: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                },
                nullable: false,
                required: ["page", "limit", "total_count", "total_pages"],
                "x-typia-jsDocTags": [],
            },
            "ObjectGenericArray.IPerson": {
                type: "object",
                properties: {
                    name: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                    age: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                },
                nullable: false,
                required: ["name", "age"],
                "x-typia-jsDocTags": [],
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});
