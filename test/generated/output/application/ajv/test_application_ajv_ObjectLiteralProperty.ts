import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectLiteralProperty } from "../../../../structures/ObjectLiteralProperty";

export const test_application_ajv_ObjectLiteralProperty = _test_application(
    "ajv",
)("ObjectLiteralProperty", {
    schemas: [
        {
            $ref: "#/components/schemas/ObjectLiteralProperty.ISomething",
        },
    ],
    components: {
        schemas: {
            "ObjectLiteralProperty.ISomething": {
                $id: "#/components/schemas/ObjectLiteralProperty.ISomething",
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
                required: [
                    "something-interesting-do-you-want?",
                    "or-something-crazy-do-you-want?",
                ],
                "x-typia-jsDocTags": [],
            },
        },
    },
    purpose: "ajv",
    prefix: "#/components/schemas",
});
