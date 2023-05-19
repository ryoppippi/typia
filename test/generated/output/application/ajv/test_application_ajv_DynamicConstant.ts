import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { DynamicConstant } from "../../../../structures/DynamicConstant";

export const test_application_ajv_DynamicConstant = _test_application("ajv")(
    "DynamicConstant",
    {
        schemas: [
            {
                $ref: "#/components/schemas/DynamicConstant",
            },
        ],
        components: {
            schemas: {
                DynamicConstant: {
                    $id: "#/components/schemas/DynamicConstant",
                    type: "object",
                    properties: {
                        a: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        b: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        c: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        d: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                    },
                    required: ["a", "b", "c", "d"],
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "#/components/schemas",
    },
);
