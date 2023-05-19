import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ArrayUnion } from "../../../../structures/ArrayUnion";

export const test_application_ajv_ArrayUnion = _test_application("ajv")(
    "ArrayUnion",
    {
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
            },
        ],
        components: {
            schemas: {},
        },
        purpose: "ajv",
        prefix: "#/components/schemas",
    },
);
