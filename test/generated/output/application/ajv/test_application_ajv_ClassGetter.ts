import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ClassGetter } from "../../../../structures/ClassGetter";

export const test_application_ajv_ClassGetter = _test_application("ajv")(
    "ClassGetter",
    {
        schemas: [
            {
                $ref: "#/components/schemas/ClassGetter.Person",
            },
        ],
        components: {
            schemas: {
                "ClassGetter.Person": {
                    $id: "#/components/schemas/ClassGetter.Person",
                    type: "object",
                    properties: {
                        id: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        name: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        dead: {
                            oneOf: [
                                {
                                    description: "",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "null",
                                },
                                {
                                    description: "",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "boolean",
                                },
                            ],
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                    },
                    required: ["id", "name", "dead"],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "#/components/schemas",
    },
);
