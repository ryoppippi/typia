import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectOptional } from "../../../../structures/ObjectOptional";

export const test_application_ajv_ObjectOptional = _test_application("ajv")(
    "ObjectOptional",
    {
        schemas: [
            {
                $ref: "#/components/schemas/ObjectOptional",
            },
        ],
        components: {
            schemas: {
                ObjectOptional: {
                    $id: "#/components/schemas/ObjectOptional",
                    type: "object",
                    properties: {
                        id: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "string",
                        },
                        name: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "string",
                        },
                        email: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "string",
                        },
                        sequence: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "number",
                        },
                    },
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "#/components/schemas",
    },
);
