import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectInternal } from "../../../../structures/ObjectInternal";

export const test_application_swagger_ObjectInternal = _test_application(
    "swagger",
)("ObjectInternal", {
    schemas: [
        {
            $ref: "#/components/schemas/ObjectInternal",
        },
    ],
    components: {
        schemas: {
            ObjectInternal: {
                type: "object",
                properties: {
                    id: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                    name: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                },
                nullable: false,
                required: ["id", "name"],
                description: "@internal",
                "x-typia-jsDocTags": [],
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});
