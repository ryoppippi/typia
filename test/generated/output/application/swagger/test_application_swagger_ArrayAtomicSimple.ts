import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ArrayAtomicSimple } from "../../../../structures/ArrayAtomicSimple";

export const test_application_swagger_ArrayAtomicSimple = _test_application(
    "swagger",
)("ArrayAtomicSimple", {
    schemas: [
        {
            type: "array",
            items: {
                oneOf: [
                    {
                        type: "array",
                        items: {
                            type: "boolean",
                        },
                    },
                    {
                        type: "array",
                        items: {
                            type: "number",
                        },
                    },
                    {
                        type: "array",
                        items: {
                            type: "string",
                        },
                    },
                ],
            },
            "x-typia-tuple": {
                type: "array",
                items: [
                    {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "array",
                        items: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "boolean",
                        },
                    },
                    {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "array",
                        items: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                    },
                    {
                        "x-typia-rest": false,
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "array",
                        items: {
                            "x-typia-rest": false,
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                    },
                ],
            },
        },
    ],
    components: {
        schemas: {},
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});
