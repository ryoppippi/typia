import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { AtomicAlias } from "../../../../structures/AtomicAlias";

export const test_application_swagger_AtomicAlias = _test_application(
    "swagger",
)("AtomicAlias", {
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
        },
    ],
    components: {
        schemas: {},
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});
