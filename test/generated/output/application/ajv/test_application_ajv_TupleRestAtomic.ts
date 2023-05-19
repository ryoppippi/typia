import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { TupleRestAtomic } from "../../../../structures/TupleRestAtomic";

export const test_application_ajv_TupleRestAtomic = _test_application("ajv")(
    "TupleRestAtomic",
    {
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
                            type: "boolean",
                        },
                        {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        {
                            "x-typia-rest": true,
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
        purpose: "ajv",
        prefix: "#/components/schemas",
    },
);
