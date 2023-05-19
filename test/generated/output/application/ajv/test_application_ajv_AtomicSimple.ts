import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { AtomicSimple } from "../../../../structures/AtomicSimple";

export const test_application_ajv_AtomicSimple = _test_application("ajv")(
    "AtomicSimple",
    {
        schemas: [
            {
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
                        "x-typia-rest": false,
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
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
