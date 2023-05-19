import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { TupleRestArray } from "../../../../structures/TupleRestArray";

export const test_application_ajv_TupleRestArray = _test_application("ajv")(
    "TupleRestArray",
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
                                type: "array",
                                items: {
                                    type: "string",
                                },
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
                            type: "array",
                            items: {
                                "x-typia-rest": true,
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
        purpose: "ajv",
        prefix: "#/components/schemas",
    },
);
