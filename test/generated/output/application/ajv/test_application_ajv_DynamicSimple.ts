import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { DynamicSimple } from "../../../../structures/DynamicSimple";

export const test_application_ajv_DynamicSimple = _test_application("ajv")(
    "DynamicSimple",
    {
        schemas: [
            {
                $ref: "#/components/schemas/DynamicSimple",
            },
        ],
        components: {
            schemas: {
                DynamicSimple: {
                    $id: "#/components/schemas/DynamicSimple",
                    type: "object",
                    properties: {},
                    description: "",
                    "x-typia-jsDocTags": [],
                    additionalProperties: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                },
            },
        },
        purpose: "ajv",
        prefix: "#/components/schemas",
    },
);
