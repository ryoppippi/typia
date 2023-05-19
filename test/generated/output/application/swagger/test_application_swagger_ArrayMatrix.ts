import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ArrayMatrix } from "../../../../structures/ArrayMatrix";

export const test_application_swagger_ArrayMatrix = _test_application(
    "swagger",
)("ArrayMatrix", {
    schemas: [
        {
            type: "array",
            items: {
                type: "array",
                items: {
                    type: "array",
                    items: {
                        type: "number",
                    },
                },
            },
        },
    ],
    components: {
        schemas: {},
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});
