import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ToJsonAtomicUnion } from "../../../../structures/ToJsonAtomicUnion";

export const test_application_ajv_ToJsonAtomicUnion = _test_application("ajv")(
    "ToJsonAtomicUnion",
    {
        schemas: [
            {
                type: "array",
                items: {
                    oneOf: [
                        {
                            type: "null",
                        },
                        {
                            type: "string",
                        },
                        {
                            type: "number",
                        },
                        {
                            type: "boolean",
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
