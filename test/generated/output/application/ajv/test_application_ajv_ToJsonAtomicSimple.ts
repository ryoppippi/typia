import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ToJsonAtomicSimple } from "../../../../structures/ToJsonAtomicSimple";

export const test_application_ajv_ToJsonAtomicSimple = _test_application("ajv")(
    "ToJsonAtomicSimple",
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
