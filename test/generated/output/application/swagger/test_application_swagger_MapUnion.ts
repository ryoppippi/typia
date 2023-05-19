import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { MapUnion } from "../../../../structures/MapUnion";

export const test_application_swagger_MapUnion = _test_application("swagger")(
    "MapUnion",
    {
        schemas: [
            {
                type: "array",
                items: {
                    $ref: "#/components/schemas/Map",
                },
            },
        ],
        components: {
            schemas: {
                Map: {
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
