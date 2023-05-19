import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ConstantEnumeration } from "../../../../structures/ConstantEnumeration";

export const test_application_swagger_ConstantEnumeration = _test_application(
    "swagger",
)("ConstantEnumeration", {
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
    purpose: "swagger",
    prefix: "#/components/schemas",
});
