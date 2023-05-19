import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { DynamicEnumeration } from "../../../../structures/DynamicEnumeration";

export const test_application_ajv_DynamicEnumeration = _test_application("ajv")(
    "DynamicEnumeration",
    {
        schemas: [
            {
                $ref: "#/components/schemas/DynamicEnumeration",
            },
        ],
        components: {
            schemas: {
                DynamicEnumeration: {
                    $id: "#/components/schemas/DynamicEnumeration",
                    type: "object",
                    properties: {
                        ar: {
                            "x-typia-required": false,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        "zh-Hans": {
                            "x-typia-required": false,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        "zh-Hant": {
                            "x-typia-required": false,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        en: {
                            "x-typia-required": false,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        fr: {
                            "x-typia-required": false,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        de: {
                            "x-typia-required": false,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        ja: {
                            "x-typia-required": false,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        ko: {
                            "x-typia-required": false,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        pt: {
                            "x-typia-required": false,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        ru: {
                            "x-typia-required": false,
                            "x-typia-optional": false,
                            type: "string",
                        },
                    },
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "#/components/schemas",
    },
);
