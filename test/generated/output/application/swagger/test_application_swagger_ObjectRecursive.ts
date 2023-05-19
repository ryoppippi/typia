import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectRecursive } from "../../../../structures/ObjectRecursive";

export const test_application_swagger_ObjectRecursive = _test_application(
    "swagger",
)("ObjectRecursive", {
    schemas: [
        {
            $ref: "#/components/schemas/ObjectRecursive.IDepartment",
        },
    ],
    components: {
        schemas: {
            "ObjectRecursive.IDepartment": {
                type: "object",
                properties: {
                    parent: {
                        $ref: "#/components/schemas/ObjectRecursive.IDepartment.Nullable",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                    id: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                    code: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                    name: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                    sequence: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                    created_at: {
                        $ref: "#/components/schemas/ObjectRecursive.ITimestamp",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                },
                nullable: false,
                required: [
                    "parent",
                    "id",
                    "code",
                    "name",
                    "sequence",
                    "created_at",
                ],
                "x-typia-jsDocTags": [],
            },
            "ObjectRecursive.IDepartment.Nullable": {
                type: "object",
                properties: {
                    parent: {
                        $ref: "#/components/schemas/ObjectRecursive.IDepartment.Nullable",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                    id: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                    code: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                    name: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                    sequence: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                    created_at: {
                        $ref: "#/components/schemas/ObjectRecursive.ITimestamp",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                },
                nullable: true,
                required: [
                    "parent",
                    "id",
                    "code",
                    "name",
                    "sequence",
                    "created_at",
                ],
                "x-typia-jsDocTags": [],
            },
            "ObjectRecursive.ITimestamp": {
                type: "object",
                properties: {
                    time: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                    zone: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                },
                nullable: false,
                required: ["time", "zone"],
                "x-typia-jsDocTags": [],
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});
