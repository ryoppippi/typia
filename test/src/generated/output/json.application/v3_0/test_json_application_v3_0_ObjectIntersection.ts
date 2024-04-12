import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectIntersection } from "../../../../structures/ObjectIntersection";

export const test_json_application_v3_0_ObjectIntersection =
  _test_json_application({
    version: "3.0",
    name: "ObjectIntersection",
  })({
    version: "3.0",
    components: {
      schemas: {
        ObjectIntersection: {
          type: "object",
          properties: {
            email: {
              type: "string",
            },
            name: {
              type: "string",
            },
            vulnerable: {
              type: "boolean",
            },
          },
          nullable: false,
          required: ["email", "name", "vulnerable"],
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/ObjectIntersection",
      },
    ],
  });