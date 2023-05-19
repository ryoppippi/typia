import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ConstantAtomicWrapper } from "../../../../structures/ConstantAtomicWrapper";

export const test_application_ajv_ConstantAtomicWrapper = _test_application(
    "ajv",
)("ConstantAtomicWrapper", {
    schemas: [
        {
            type: "array",
            items: [
                {
                    $ref: "#/components/schemas/ConstantAtomicWrapper.IPointer_lt_boolean_gt_",
                    "x-typia-required": true,
                    "x-typia-optional": false,
                },
                {
                    $ref: "#/components/schemas/ConstantAtomicWrapper.IPointer_lt_number_gt_",
                    "x-typia-required": true,
                    "x-typia-optional": false,
                },
                {
                    $ref: "#/components/schemas/ConstantAtomicWrapper.IPointer_lt_string_gt_",
                    "x-typia-rest": false,
                    "x-typia-required": true,
                    "x-typia-optional": false,
                },
            ],
        },
    ],
    components: {
        schemas: {
            "ConstantAtomicWrapper.IPointer_lt_boolean_gt_": {
                $id: "#/components/schemas/ConstantAtomicWrapper.IPointer_lt_boolean_gt_",
                type: "object",
                properties: {
                    value: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "boolean",
                    },
                },
                required: ["value"],
                "x-typia-jsDocTags": [],
            },
            "ConstantAtomicWrapper.IPointer_lt_number_gt_": {
                $id: "#/components/schemas/ConstantAtomicWrapper.IPointer_lt_number_gt_",
                type: "object",
                properties: {
                    value: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                },
                required: ["value"],
                "x-typia-jsDocTags": [],
            },
            "ConstantAtomicWrapper.IPointer_lt_string_gt_": {
                $id: "#/components/schemas/ConstantAtomicWrapper.IPointer_lt_string_gt_",
                type: "object",
                properties: {
                    value: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                },
                required: ["value"],
                "x-typia-jsDocTags": [],
            },
        },
    },
    purpose: "ajv",
    prefix: "#/components/schemas",
});
