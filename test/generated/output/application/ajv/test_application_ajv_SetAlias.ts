import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { SetAlias } from "../../../../structures/SetAlias";

export const test_application_ajv_SetAlias = _test_application("ajv")(
    "SetAlias",
    {
        schemas: [
            {
                $ref: "#/components/schemas/SetAlias",
            },
        ],
        components: {
            schemas: {
                SetAlias: {
                    $id: "#/components/schemas/SetAlias",
                    type: "object",
                    properties: {
                        booleans: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            $ref: "#/components/schemas/Set",
                        },
                        numbers: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            $ref: "#/components/schemas/Set",
                        },
                        strings: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            $ref: "#/components/schemas/Set",
                        },
                        arrays: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            $ref: "#/components/schemas/Set",
                        },
                        objects: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            $ref: "#/components/schemas/Set",
                        },
                    },
                    required: [
                        "booleans",
                        "numbers",
                        "strings",
                        "arrays",
                        "objects",
                    ],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
                Set: {
                    type: "object",
                    $id: "#/components/schemas/Set",
                    properties: {},
                },
            },
        },
        purpose: "ajv",
        prefix: "#/components/schemas",
    },
);
