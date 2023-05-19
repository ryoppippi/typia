import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { SetUnion } from "../../../../structures/SetUnion";

export const test_application_ajv_SetUnion = _test_application("ajv")(
    "SetUnion",
    {
        schemas: [
            {
                type: "array",
                items: {
                    $ref: "#/components/schemas/Set",
                },
            },
        ],
        components: {
            schemas: {
                Set: {
                    type: "object",
                    $id: "#/components/schemas/Set",
                    properties: {},
                },
            },
        },
        purpose: "ajv",
        prefix: "#/components/schemas",
    },
);
