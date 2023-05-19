import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { TupleHierarchical } from "../../../../structures/TupleHierarchical";

export const test_application_swagger_TupleHierarchical = _test_application(
    "swagger",
)("TupleHierarchical", {
    schemas: [
        {
            type: "array",
            items: {
                oneOf: [
                    {
                        type: "boolean",
                        nullable: true,
                    },
                    {
                        type: "number",
                        nullable: true,
                    },
                ],
            },
            "x-typia-tuple": {
                type: "array",
                items: [
                    {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "boolean",
                    },
                    {
                        type: "null",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                    {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                    {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "array",
                        items: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "boolean",
                            nullable: true,
                        },
                        "x-typia-tuple": {
                            type: "array",
                            items: [
                                {
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "boolean",
                                },
                                {
                                    type: "null",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                                {
                                    "x-typia-rest": false,
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "array",
                                    items: {
                                        "x-typia-rest": false,
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                        type: "number",
                                    },
                                    "x-typia-tuple": {
                                        type: "array",
                                        items: [
                                            {
                                                "x-typia-required": true,
                                                "x-typia-optional": false,
                                                type: "number",
                                            },
                                            {
                                                "x-typia-rest": false,
                                                "x-typia-required": true,
                                                "x-typia-optional": false,
                                                type: "array",
                                                items: {
                                                    oneOf: [
                                                        {
                                                            "x-typia-rest":
                                                                false,
                                                            "x-typia-required":
                                                                true,
                                                            "x-typia-optional":
                                                                false,
                                                            type: "boolean",
                                                        },
                                                        {
                                                            "x-typia-rest":
                                                                false,
                                                            "x-typia-required":
                                                                true,
                                                            "x-typia-optional":
                                                                false,
                                                            type: "string",
                                                        },
                                                    ],
                                                    "x-typia-rest": false,
                                                    "x-typia-required": true,
                                                    "x-typia-optional": false,
                                                },
                                                "x-typia-tuple": {
                                                    type: "array",
                                                    items: [
                                                        {
                                                            "x-typia-required":
                                                                true,
                                                            "x-typia-optional":
                                                                false,
                                                            type: "boolean",
                                                        },
                                                        {
                                                            "x-typia-rest":
                                                                false,
                                                            "x-typia-required":
                                                                true,
                                                            "x-typia-optional":
                                                                false,
                                                            type: "string",
                                                        },
                                                    ],
                                                    "x-typia-rest": false,
                                                    "x-typia-required": true,
                                                    "x-typia-optional": false,
                                                },
                                            },
                                        ],
                                        "x-typia-rest": false,
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                    },
                    {
                        "x-typia-rest": false,
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "array",
                        items: {
                            oneOf: [
                                {
                                    "x-typia-rest": false,
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "number",
                                },
                                {
                                    "x-typia-rest": false,
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "array",
                                    items: {
                                        "x-typia-rest": false,
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                        type: "array",
                                        items: {
                                            oneOf: [
                                                {
                                                    "x-typia-rest": false,
                                                    "x-typia-required": true,
                                                    "x-typia-optional": false,
                                                    type: "string",
                                                },
                                                {
                                                    "x-typia-rest": false,
                                                    "x-typia-required": true,
                                                    "x-typia-optional": false,
                                                    type: "boolean",
                                                },
                                                {
                                                    "x-typia-rest": false,
                                                    "x-typia-required": true,
                                                    "x-typia-optional": false,
                                                    type: "array",
                                                    items: {
                                                        "x-typia-rest": false,
                                                        "x-typia-required":
                                                            true,
                                                        "x-typia-optional":
                                                            false,
                                                        type: "array",
                                                        items: {
                                                            "x-typia-rest":
                                                                false,
                                                            "x-typia-required":
                                                                true,
                                                            "x-typia-optional":
                                                                false,
                                                            type: "number",
                                                        },
                                                        "x-typia-tuple": {
                                                            type: "array",
                                                            items: [
                                                                {
                                                                    "x-typia-required":
                                                                        true,
                                                                    "x-typia-optional":
                                                                        false,
                                                                    type: "number",
                                                                },
                                                                {
                                                                    "x-typia-required":
                                                                        true,
                                                                    "x-typia-optional":
                                                                        false,
                                                                    type: "number",
                                                                },
                                                                {
                                                                    "x-typia-rest":
                                                                        false,
                                                                    "x-typia-required":
                                                                        true,
                                                                    "x-typia-optional":
                                                                        false,
                                                                    type: "array",
                                                                    items: {
                                                                        oneOf: [
                                                                            {
                                                                                "x-typia-rest":
                                                                                    false,
                                                                                "x-typia-required":
                                                                                    true,
                                                                                "x-typia-optional":
                                                                                    false,
                                                                                type: "boolean",
                                                                            },
                                                                            {
                                                                                "x-typia-rest":
                                                                                    false,
                                                                                "x-typia-required":
                                                                                    true,
                                                                                "x-typia-optional":
                                                                                    false,
                                                                                type: "string",
                                                                            },
                                                                        ],
                                                                        "x-typia-rest":
                                                                            false,
                                                                        "x-typia-required":
                                                                            true,
                                                                        "x-typia-optional":
                                                                            false,
                                                                    },
                                                                    "x-typia-tuple":
                                                                        {
                                                                            type: "array",
                                                                            items: [
                                                                                {
                                                                                    "x-typia-required":
                                                                                        true,
                                                                                    "x-typia-optional":
                                                                                        false,
                                                                                    type: "boolean",
                                                                                },
                                                                                {
                                                                                    "x-typia-rest":
                                                                                        false,
                                                                                    "x-typia-required":
                                                                                        true,
                                                                                    "x-typia-optional":
                                                                                        false,
                                                                                    type: "string",
                                                                                },
                                                                            ],
                                                                            "x-typia-rest":
                                                                                false,
                                                                            "x-typia-required":
                                                                                true,
                                                                            "x-typia-optional":
                                                                                false,
                                                                        },
                                                                },
                                                            ],
                                                            "x-typia-rest":
                                                                false,
                                                            "x-typia-required":
                                                                true,
                                                            "x-typia-optional":
                                                                false,
                                                        },
                                                    },
                                                },
                                            ],
                                            "x-typia-rest": false,
                                            "x-typia-required": true,
                                            "x-typia-optional": false,
                                        },
                                        "x-typia-tuple": {
                                            type: "array",
                                            items: [
                                                {
                                                    "x-typia-required": true,
                                                    "x-typia-optional": false,
                                                    type: "string",
                                                },
                                                {
                                                    "x-typia-required": true,
                                                    "x-typia-optional": false,
                                                    type: "boolean",
                                                },
                                                {
                                                    "x-typia-rest": false,
                                                    "x-typia-required": true,
                                                    "x-typia-optional": false,
                                                    type: "array",
                                                    items: {
                                                        "x-typia-rest": false,
                                                        "x-typia-required":
                                                            true,
                                                        "x-typia-optional":
                                                            false,
                                                        type: "array",
                                                        items: {
                                                            "x-typia-rest":
                                                                false,
                                                            "x-typia-required":
                                                                true,
                                                            "x-typia-optional":
                                                                false,
                                                            type: "number",
                                                        },
                                                        "x-typia-tuple": {
                                                            type: "array",
                                                            items: [
                                                                {
                                                                    "x-typia-required":
                                                                        true,
                                                                    "x-typia-optional":
                                                                        false,
                                                                    type: "number",
                                                                },
                                                                {
                                                                    "x-typia-required":
                                                                        true,
                                                                    "x-typia-optional":
                                                                        false,
                                                                    type: "number",
                                                                },
                                                                {
                                                                    "x-typia-rest":
                                                                        false,
                                                                    "x-typia-required":
                                                                        true,
                                                                    "x-typia-optional":
                                                                        false,
                                                                    type: "array",
                                                                    items: {
                                                                        oneOf: [
                                                                            {
                                                                                "x-typia-rest":
                                                                                    false,
                                                                                "x-typia-required":
                                                                                    true,
                                                                                "x-typia-optional":
                                                                                    false,
                                                                                type: "boolean",
                                                                            },
                                                                            {
                                                                                "x-typia-rest":
                                                                                    false,
                                                                                "x-typia-required":
                                                                                    true,
                                                                                "x-typia-optional":
                                                                                    false,
                                                                                type: "string",
                                                                            },
                                                                        ],
                                                                        "x-typia-rest":
                                                                            false,
                                                                        "x-typia-required":
                                                                            true,
                                                                        "x-typia-optional":
                                                                            false,
                                                                    },
                                                                    "x-typia-tuple":
                                                                        {
                                                                            type: "array",
                                                                            items: [
                                                                                {
                                                                                    "x-typia-required":
                                                                                        true,
                                                                                    "x-typia-optional":
                                                                                        false,
                                                                                    type: "boolean",
                                                                                },
                                                                                {
                                                                                    "x-typia-rest":
                                                                                        false,
                                                                                    "x-typia-required":
                                                                                        true,
                                                                                    "x-typia-optional":
                                                                                        false,
                                                                                    type: "string",
                                                                                },
                                                                            ],
                                                                            "x-typia-rest":
                                                                                false,
                                                                            "x-typia-required":
                                                                                true,
                                                                            "x-typia-optional":
                                                                                false,
                                                                        },
                                                                },
                                                            ],
                                                            "x-typia-rest":
                                                                false,
                                                            "x-typia-required":
                                                                true,
                                                            "x-typia-optional":
                                                                false,
                                                        },
                                                    },
                                                },
                                            ],
                                            "x-typia-rest": false,
                                            "x-typia-required": true,
                                            "x-typia-optional": false,
                                        },
                                    },
                                },
                            ],
                            "x-typia-rest": false,
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                        "x-typia-tuple": {
                            type: "array",
                            items: [
                                {
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "number",
                                },
                                {
                                    "x-typia-rest": false,
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "array",
                                    items: {
                                        "x-typia-rest": false,
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                        type: "array",
                                        items: {
                                            oneOf: [
                                                {
                                                    "x-typia-rest": false,
                                                    "x-typia-required": true,
                                                    "x-typia-optional": false,
                                                    type: "string",
                                                },
                                                {
                                                    "x-typia-rest": false,
                                                    "x-typia-required": true,
                                                    "x-typia-optional": false,
                                                    type: "boolean",
                                                },
                                                {
                                                    "x-typia-rest": false,
                                                    "x-typia-required": true,
                                                    "x-typia-optional": false,
                                                    type: "array",
                                                    items: {
                                                        "x-typia-rest": false,
                                                        "x-typia-required":
                                                            true,
                                                        "x-typia-optional":
                                                            false,
                                                        type: "array",
                                                        items: {
                                                            "x-typia-rest":
                                                                false,
                                                            "x-typia-required":
                                                                true,
                                                            "x-typia-optional":
                                                                false,
                                                            type: "number",
                                                        },
                                                        "x-typia-tuple": {
                                                            type: "array",
                                                            items: [
                                                                {
                                                                    "x-typia-required":
                                                                        true,
                                                                    "x-typia-optional":
                                                                        false,
                                                                    type: "number",
                                                                },
                                                                {
                                                                    "x-typia-required":
                                                                        true,
                                                                    "x-typia-optional":
                                                                        false,
                                                                    type: "number",
                                                                },
                                                                {
                                                                    "x-typia-rest":
                                                                        false,
                                                                    "x-typia-required":
                                                                        true,
                                                                    "x-typia-optional":
                                                                        false,
                                                                    type: "array",
                                                                    items: {
                                                                        oneOf: [
                                                                            {
                                                                                "x-typia-rest":
                                                                                    false,
                                                                                "x-typia-required":
                                                                                    true,
                                                                                "x-typia-optional":
                                                                                    false,
                                                                                type: "boolean",
                                                                            },
                                                                            {
                                                                                "x-typia-rest":
                                                                                    false,
                                                                                "x-typia-required":
                                                                                    true,
                                                                                "x-typia-optional":
                                                                                    false,
                                                                                type: "string",
                                                                            },
                                                                        ],
                                                                        "x-typia-rest":
                                                                            false,
                                                                        "x-typia-required":
                                                                            true,
                                                                        "x-typia-optional":
                                                                            false,
                                                                    },
                                                                    "x-typia-tuple":
                                                                        {
                                                                            type: "array",
                                                                            items: [
                                                                                {
                                                                                    "x-typia-required":
                                                                                        true,
                                                                                    "x-typia-optional":
                                                                                        false,
                                                                                    type: "boolean",
                                                                                },
                                                                                {
                                                                                    "x-typia-rest":
                                                                                        false,
                                                                                    "x-typia-required":
                                                                                        true,
                                                                                    "x-typia-optional":
                                                                                        false,
                                                                                    type: "string",
                                                                                },
                                                                            ],
                                                                            "x-typia-rest":
                                                                                false,
                                                                            "x-typia-required":
                                                                                true,
                                                                            "x-typia-optional":
                                                                                false,
                                                                        },
                                                                },
                                                            ],
                                                            "x-typia-rest":
                                                                false,
                                                            "x-typia-required":
                                                                true,
                                                            "x-typia-optional":
                                                                false,
                                                        },
                                                    },
                                                },
                                            ],
                                            "x-typia-rest": false,
                                            "x-typia-required": true,
                                            "x-typia-optional": false,
                                        },
                                        "x-typia-tuple": {
                                            type: "array",
                                            items: [
                                                {
                                                    "x-typia-required": true,
                                                    "x-typia-optional": false,
                                                    type: "string",
                                                },
                                                {
                                                    "x-typia-required": true,
                                                    "x-typia-optional": false,
                                                    type: "boolean",
                                                },
                                                {
                                                    "x-typia-rest": false,
                                                    "x-typia-required": true,
                                                    "x-typia-optional": false,
                                                    type: "array",
                                                    items: {
                                                        "x-typia-rest": false,
                                                        "x-typia-required":
                                                            true,
                                                        "x-typia-optional":
                                                            false,
                                                        type: "array",
                                                        items: {
                                                            "x-typia-rest":
                                                                false,
                                                            "x-typia-required":
                                                                true,
                                                            "x-typia-optional":
                                                                false,
                                                            type: "number",
                                                        },
                                                        "x-typia-tuple": {
                                                            type: "array",
                                                            items: [
                                                                {
                                                                    "x-typia-required":
                                                                        true,
                                                                    "x-typia-optional":
                                                                        false,
                                                                    type: "number",
                                                                },
                                                                {
                                                                    "x-typia-required":
                                                                        true,
                                                                    "x-typia-optional":
                                                                        false,
                                                                    type: "number",
                                                                },
                                                                {
                                                                    "x-typia-rest":
                                                                        false,
                                                                    "x-typia-required":
                                                                        true,
                                                                    "x-typia-optional":
                                                                        false,
                                                                    type: "array",
                                                                    items: {
                                                                        oneOf: [
                                                                            {
                                                                                "x-typia-rest":
                                                                                    false,
                                                                                "x-typia-required":
                                                                                    true,
                                                                                "x-typia-optional":
                                                                                    false,
                                                                                type: "boolean",
                                                                            },
                                                                            {
                                                                                "x-typia-rest":
                                                                                    false,
                                                                                "x-typia-required":
                                                                                    true,
                                                                                "x-typia-optional":
                                                                                    false,
                                                                                type: "string",
                                                                            },
                                                                        ],
                                                                        "x-typia-rest":
                                                                            false,
                                                                        "x-typia-required":
                                                                            true,
                                                                        "x-typia-optional":
                                                                            false,
                                                                    },
                                                                    "x-typia-tuple":
                                                                        {
                                                                            type: "array",
                                                                            items: [
                                                                                {
                                                                                    "x-typia-required":
                                                                                        true,
                                                                                    "x-typia-optional":
                                                                                        false,
                                                                                    type: "boolean",
                                                                                },
                                                                                {
                                                                                    "x-typia-rest":
                                                                                        false,
                                                                                    "x-typia-required":
                                                                                        true,
                                                                                    "x-typia-optional":
                                                                                        false,
                                                                                    type: "string",
                                                                                },
                                                                            ],
                                                                            "x-typia-rest":
                                                                                false,
                                                                            "x-typia-required":
                                                                                true,
                                                                            "x-typia-optional":
                                                                                false,
                                                                        },
                                                                },
                                                            ],
                                                            "x-typia-rest":
                                                                false,
                                                            "x-typia-required":
                                                                true,
                                                            "x-typia-optional":
                                                                false,
                                                        },
                                                    },
                                                },
                                            ],
                                            "x-typia-rest": false,
                                            "x-typia-required": true,
                                            "x-typia-optional": false,
                                        },
                                    },
                                },
                            ],
                            "x-typia-rest": false,
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                    },
                ],
            },
        },
    ],
    components: {
        schemas: {},
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});
