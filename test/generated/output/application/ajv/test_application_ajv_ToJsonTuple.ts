import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ToJsonTuple } from "../../../../structures/ToJsonTuple";

export const test_application_ajv_ToJsonTuple = _test_application("ajv")(
    "ToJsonTuple",
    {
        schemas: [
            {
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
        ],
        components: {
            schemas: {
                "ToJsonTuple.IHobby": {
                    $id: "#/components/schemas/ToJsonTuple.IHobby",
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
                    required: ["code", "name"],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "#/components/schemas",
    },
);
