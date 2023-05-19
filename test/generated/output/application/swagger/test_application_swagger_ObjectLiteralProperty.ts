import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectLiteralProperty } from "../../../../structures/ObjectLiteralProperty";

export const test_application_swagger_ObjectLiteralProperty = _test_application(
    "swagger",
)("ObjectLiteralProperty", {
    schemas: [
        {
            $ref: "#/components/schemas/ObjectLiteralProperty.ISomething",
        },
    ],
    components: {
        schemas: {
            "ObjectLiteralProperty.ISomething": {
                type: "object",
                properties: {
                    "something-interesting-do-you-want?": {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                    "or-something-crazy-do-you-want?": {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                },
                nullable: false,
                required: [
                    "something-interesting-do-you-want?",
                    "or-something-crazy-do-you-want?",
                ],
                "x-typia-jsDocTags": [],
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});
