import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { MapUnion } from "../../../../structures/MapUnion";

export const test_application_ajv_MapUnion = _test_application("ajv")(
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
                    $id: "#/components/schemas/Map",
                    properties: {},
                },
            },
        },
        purpose: "ajv",
        prefix: "#/components/schemas",
    },
);
