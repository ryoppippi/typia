import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TemplateUnion } from "../../../../structures/TemplateUnion";

export const test_json_application_v3_0_TemplateUnion = _test_json_application({
  version: "3.0",
  name: "TemplateUnion",
})({
  version: "3.0",
  components: {
    schemas: {
      TemplateUnion: {
        type: "object",
        properties: {
          value: {
            type: "array",
            items: {
              $ref: "#/components/schemas/TemplateUnion.Type",
            },
          },
        },
        nullable: false,
        required: ["value"],
      },
      "TemplateUnion.Type": {
        type: "object",
        properties: {
          prefix: {
            type: "string",
            pattern:
              "^((prefix_(.*))|(prefix_[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?))$",
          },
          postfix: {
            type: "string",
            pattern:
              "(((.*)_postfix)|([+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?_postfix))$",
          },
          middle: {
            oneOf: [
              {
                type: "string",
                pattern:
                  "^(the_false_value|the_true_value|(the_[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?_value))$",
              },
              {
                type: "string",
                enum: ["the_false_value", "the_true_value"],
              },
            ],
          },
          mixed: {
            oneOf: [
              {
                type: "string",
                pattern:
                  "^(the_A_value|the_B_value|[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?|true|false|(the_[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?_value))$",
              },
              {
                type: "string",
                enum: ["the_A_value", "the_B_value"],
              },
              {
                type: "number",
              },
              {
                type: "boolean",
              },
              {
                type: "object",
                properties: {
                  name: {
                    type: "string",
                  },
                },
                nullable: false,
                required: ["name"],
              },
            ],
          },
        },
        nullable: false,
        required: ["prefix", "postfix", "middle", "mixed"],
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/TemplateUnion",
    },
  ],
});