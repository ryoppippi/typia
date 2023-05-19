import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectTuple } from "../../../../structures/ObjectTuple";

export const test_application_ajv_ObjectTuple = _test_application("ajv")(
    "ObjectTuple",
    {
        schemas: [
            {
                type: "array",
                items: [
                    {
                        $ref: "#/components/schemas/ObjectTuple.ISection",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                    {
                        $ref: "#/components/schemas/ObjectTuple.ICitizen",
                        "x-typia-rest": false,
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                ],
            },
        ],
        components: {
            schemas: {
                "ObjectTuple.ISection": {
                    $id: "#/components/schemas/ObjectTuple.ISection",
                    type: "object",
                    properties: {
                        id: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
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
                    required: ["id", "code", "name"],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
                "ObjectTuple.ICitizen": {
                    $id: "#/components/schemas/ObjectTuple.ICitizen",
                    type: "object",
                    properties: {
                        id: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        mobile: {
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
                    required: ["id", "mobile", "name"],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "#/components/schemas",
    },
);
