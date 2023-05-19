import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { DynamicSimple } from "../../../../structures/DynamicSimple";

export const test_application_swagger_DynamicSimple = _test_application(
    "swagger",
)("DynamicSimple", {
    schemas: [
        {
            $ref: "#/components/schemas/DynamicSimple",
        },
    ],
    components: {
        schemas: {
            DynamicSimple: {
                type: "object",
                properties: {},
                nullable: false,
                "x-typia-jsDocTags": [],
                "x-typia-additionalProperties": {
                    "x-typia-required": true,
                    "x-typia-optional": false,
                    type: "number",
                },
                additionalProperties: {
                    "x-typia-required": true,
                    "x-typia-optional": false,
                    type: "number",
                },
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});
