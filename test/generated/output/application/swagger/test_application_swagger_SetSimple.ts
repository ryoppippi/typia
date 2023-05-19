import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { SetSimple } from "../../../../structures/SetSimple";

export const test_application_swagger_SetSimple = _test_application("swagger")(
    "SetSimple",
    {
        schemas: [
            {
                $ref: "#/components/schemas/SetSimple",
            },
        ],
        components: {
            schemas: {
                SetSimple: {
                    type: "object",
                    properties: {
                        booleans: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            $ref: "#/components/schemas/Set",
                        },
                        numbers: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            $ref: "#/components/schemas/Set",
                        },
                        strings: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            $ref: "#/components/schemas/Set",
                        },
                        arrays: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            $ref: "#/components/schemas/Set",
                        },
                        objects: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            $ref: "#/components/schemas/Set",
                        },
                    },
                    nullable: false,
                    required: [
                        "booleans",
                        "numbers",
                        "strings",
                        "arrays",
                        "objects",
                    ],
                    "x-typia-jsDocTags": [],
                },
                Set: {
                    type: "object",
                    properties: {},
                    nullable: false,
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
