import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicUnion } from "../../../../structures/DynamicUnion";

export const test_json_application_v3_0_DynamicUnion = _test_json_application({
  version: "3.0",
  name: "DynamicUnion",
})({
  version: "3.0",
  components: {
    schemas: {
      DynamicUnion: {
        type: "object",
        properties: {},
        nullable: false,
        additionalProperties: {
          oneOf: [
            {
              type: "string",
            },
            {
              type: "number",
            },
          ],
        },
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/DynamicUnion",
    },
  ],
});
