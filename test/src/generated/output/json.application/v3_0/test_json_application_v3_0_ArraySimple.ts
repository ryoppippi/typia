import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArraySimple } from "../../../../structures/ArraySimple";

export const test_json_application_v3_0_ArraySimple = _test_json_application({
  version: "3.0",
  name: "ArraySimple",
})({
  version: "3.0",
  components: {
    schemas: {
      ArraySimple: {
        type: "array",
        items: {
          $ref: "#/components/schemas/ArraySimple.IPerson",
        },
      },
      "ArraySimple.IPerson": {
        type: "object",
        properties: {
          name: {
            type: "string",
          },
          email: {
            type: "string",
          },
          hobbies: {
            type: "array",
            items: {
              $ref: "#/components/schemas/ArraySimple.IHobby",
            },
          },
        },
        nullable: false,
        required: ["name", "email", "hobbies"],
      },
      "ArraySimple.IHobby": {
        type: "object",
        properties: {
          name: {
            type: "string",
          },
          body: {
            type: "string",
          },
          rank: {
            type: "number",
          },
        },
        nullable: false,
        required: ["name", "body", "rank"],
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/ArraySimple",
    },
  ],
});