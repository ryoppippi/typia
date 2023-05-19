import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectGenericAlias } from "../../../../structures/ObjectGenericAlias";

export const test_application_ajv_ObjectGenericAlias = _test_application("ajv")(
    "ObjectGenericAlias",
    {
        schemas: [
            {
                $ref: "#/components/schemas/ObjectGenericAlias.Alias",
            },
        ],
        components: {
            schemas: {
                "ObjectGenericAlias.Alias": {
                    $id: "#/components/schemas/ObjectGenericAlias.Alias",
                    type: "object",
                    properties: {
                        value: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                    },
                    required: ["value"],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "#/components/schemas",
    },
);
