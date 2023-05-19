import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ToJsonDouble } from "../../../../structures/ToJsonDouble";

export const test_application_ajv_ToJsonDouble = _test_application("ajv")(
    "ToJsonDouble",
    {
        schemas: [
            {
                $ref: "#/components/schemas/ToJsonDouble.Child",
            },
        ],
        components: {
            schemas: {
                "ToJsonDouble.Child": {
                    $id: "#/components/schemas/ToJsonDouble.Child",
                    type: "object",
                    properties: {
                        id: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        flag: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "boolean",
                        },
                    },
                    required: ["id", "flag"],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "#/components/schemas",
    },
);
