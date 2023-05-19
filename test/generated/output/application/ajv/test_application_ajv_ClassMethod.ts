import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ClassMethod } from "../../../../structures/ClassMethod";

export const test_application_ajv_ClassMethod = _test_application("ajv")(
    "ClassMethod",
    {
        schemas: [
            {
                $ref: "#/components/schemas/ClassMethod.Animal",
            },
        ],
        components: {
            schemas: {
                "ClassMethod.Animal": {
                    $id: "#/components/schemas/ClassMethod.Animal",
                    type: "object",
                    properties: {
                        name: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        age: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                    },
                    required: ["name", "age"],
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "#/components/schemas",
    },
);
