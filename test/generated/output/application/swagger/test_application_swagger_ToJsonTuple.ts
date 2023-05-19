import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ToJsonTuple } from "../../../../structures/ToJsonTuple";

export const test_application_swagger_ToJsonTuple = _test_application(
    "swagger",
)("ToJsonTuple", {
    schemas: [
        {
            type: "array",
            items: {
                oneOf: [
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
                        $ref: "#/components/schemas/ToJsonTuple.IHobby",
                    },
                ],
            },
            "x-typia-tuple": {
                type: "array",
                items: [
                    {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                    {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                    {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "boolean",
                    },
                    {
                        $ref: "#/components/schemas/ToJsonTuple.IHobby",
                        "x-typia-rest": false,
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                ],
            },
        },
    ],
    components: {
        schemas: {
            "ToJsonTuple.IHobby": {
                type: "object",
                properties: {
                    code: {
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
                },
                nullable: false,
                required: ["code", "name"],
                description: "",
                "x-typia-jsDocTags": [],
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});
