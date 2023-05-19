import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ToJsonAtomicUnion } from "../../../../structures/ToJsonAtomicUnion";

export const test_application_swagger_ToJsonAtomicUnion = _test_application(
    "swagger",
)("ToJsonAtomicUnion", {
    schemas: [
        {
            type: "array",
            items: {
                oneOf: [
                    {
                        type: "string",
                        nullable: true,
                    },
                    {
                        type: "number",
                        nullable: true,
                    },
                    {
                        type: "boolean",
                        nullable: true,
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
