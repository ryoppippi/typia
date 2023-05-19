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
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                    data: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/ObjectGenericArray.IPerson",
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                    },
                },
                nullable: false,
                required: ["pagination", "data"],
                description: "",
                "x-typia-jsDocTags": [],
            },
            "ObjectGenericArray.IPagination": {
                type: "object",
                properties: {
                    page: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                    limit: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                    total_count: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                    total_pages: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                },
                nullable: false,
                required: ["page", "limit", "total_count", "total_pages"],
                description: "",
                "x-typia-jsDocTags": [],
            },
            "ObjectGenericArray.IPerson": {
                type: "object",
                properties: {
                    name: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                    age: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                },
                nullable: false,
                required: ["name", "age"],
                description: "",
                "x-typia-jsDocTags": [],
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});
