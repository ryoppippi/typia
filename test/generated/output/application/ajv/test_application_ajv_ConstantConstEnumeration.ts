import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ConstantConstEnumeration } from "../../../../structures/ConstantConstEnumeration";

export const test_application_ajv_ConstantConstEnumeration = _test_application(
    "ajv",
)("ConstantConstEnumeration", {
    schemas: [
        {
            type: "array",
            items: {
                oneOf: [
                    {
                        type: "number",
                        enum: [0, 1, 2],
                    },
                    {
                        type: "string",
                        enum: ["Three", "Four"],
                    },
                ],
            },
        },
    ],
    components: {
        schemas: {},
    },
    purpose: "ajv",
    prefix: "#/components/schemas",
});
