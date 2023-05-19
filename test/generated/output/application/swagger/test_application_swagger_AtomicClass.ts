import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { AtomicClass } from "../../../../structures/AtomicClass";

export const test_application_swagger_AtomicClass = _test_application(
    "swagger",
)("AtomicClass", {
    schemas: [
        {
            type: "array",
            items: {
                oneOf: [
                    {
                        type: "boolean",
                    },
                    {
                        type: "number",
                    },
                    {
                        type: "string",
                    },
                ],
            },
            "x-typia-tuple": {
                type: "array",
                items: [
                    {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "boolean",
                    },
                    {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "boolean",
                    },
                    {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "boolean",
                    },
                    {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                    {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                    {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                    {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                    {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                    {
                        "x-typia-rest": false,
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
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
