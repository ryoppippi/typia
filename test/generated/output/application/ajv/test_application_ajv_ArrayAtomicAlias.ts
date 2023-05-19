import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ArrayAtomicAlias } from "../../../../structures/ArrayAtomicAlias";

export const test_application_ajv_ArrayAtomicAlias = _test_application("ajv")(
    "ArrayAtomicAlias",
    {
        schemas: [
            {
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
        ],
        components: {
            schemas: {},
        },
        purpose: "ajv",
        prefix: "#/components/schemas",
    },
);
