import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectOptional } from "../../../../structures/ObjectOptional";

export const test_application_swagger_ObjectOptional = _test_application(
    "swagger",
)("ObjectOptional", {
    schemas: [
        {
            $ref: "#/components/schemas/ObjectOptional",
        },
    ],
    components: {
        schemas: {
            ObjectOptional: {
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
                nullable: false,
                "x-typia-jsDocTags": [],
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});
