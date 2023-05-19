import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ToJsonUnion } from "../../../../structures/ToJsonUnion";

export const test_application_swagger_ToJsonUnion = _test_application(
    "swagger",
)("ToJsonUnion", {
    schemas: [
        {
            type: "array",
            items: {
                oneOf: [
                    {},
                    {
                        type: "string",
                    },
                    {
                        type: "number",
                    },
                    {
                        type: "boolean",
                    },
                    {
                        $ref: "#/components/schemas/ToJsonUnion.ICitizen",
                    },
                    {
                        $ref: "#/components/schemas/ToJsonUnion.IProduct",
                    },
                ],
            },
        },
    ],
    components: {
        schemas: {
            "ToJsonUnion.ICitizen": {
                type: "object",
                properties: {
                    id: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                    mobile: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                    name: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                },
                nullable: false,
                required: ["id", "mobile", "name"],
                "x-typia-jsDocTags": [],
            },
            "ToJsonUnion.IProduct": {
                type: "object",
                properties: {
                    manufacturer: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                    brand: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                    name: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                },
                nullable: false,
                required: ["manufacturer", "brand", "name"],
                "x-typia-jsDocTags": [],
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});
