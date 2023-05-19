import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { DynamicUndefined } from "../../../../structures/DynamicUndefined";

export const test_application_swagger_DynamicUndefined = _test_application(
    "swagger",
)("DynamicUndefined", {
    schemas: [
        {
            $ref: "#/components/schemas/DynamicUndefined",
        },
    ],
    components: {
        schemas: {
            DynamicUndefined: {
                type: "object",
                properties: {},
                nullable: false,
                description: "",
                "x-typia-jsDocTags": [],
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});
