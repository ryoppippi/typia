import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { SetUnion } from "../../../../structures/SetUnion";

export const test_application_swagger_SetUnion = _test_application("swagger")(
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
                    properties: {},
                    nullable: false,
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
