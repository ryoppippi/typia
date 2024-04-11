import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TemplateAtomic } from "../../../../structures/TemplateAtomic";

export const test_json_application_v3_1_TemplateAtomic = _test_json_application(
  {
    version: "3.1",
    name: "TemplateAtomic",
  },
)({
  version: "3.1",
  components: {
    schemas: {
      TemplateAtomic: {
        type: "object",
        properties: {
          prefix: {
            type: "string",
            pattern: "^(prefix_(.*))",
          },
          postfix: {
            type: "string",
            pattern: "((.*)_postfix)$",
          },
          middle_string: {
            type: "string",
            pattern: "^(the_(.*)_value)$",
          },
          middle_string_empty: {
            type: "string",
            pattern: "^(the_(.*)_value)$",
          },
          middle_numeric: {
            type: "string",
            pattern: "^(the_[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?_value)$",
          },
          middle_boolean: {
            oneOf: [
              {
                const: "the_false_value",
              },
              {
                const: "the_true_value",
              },
            ],
          },
          ipv4: {
            type: "string",
            pattern:
              "^([+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?\\.[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?\\.[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?\\.[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?)$",
          },
          email: {
            type: "string",
            pattern: "((.*)@(.*)\\.(.*))",
          },
        },
        required: [
          "prefix",
          "postfix",
          "middle_string",
          "middle_string_empty",
          "middle_numeric",
          "middle_boolean",
          "ipv4",
          "email",
        ],
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/TemplateAtomic",
    },
  ],
});
