import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ConstantAtomicAbsorbed } from "../../../../structures/ConstantAtomicAbsorbed";

export const test_json_application_v3_0_ConstantAtomicAbsorbed =
  _test_json_application({
    version: "3.0",
    name: "ConstantAtomicAbsorbed",
  })({
    version: "3.0",
    components: {
      schemas: {
        ConstantAtomicAbsorbed: {
          type: "object",
          properties: {
            id: {
              type: "string",
              default: "something",
            },
            age: {
              type: "number",
              default: 20,
            },
          },
          nullable: false,
          required: ["id", "age"],
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/ConstantAtomicAbsorbed",
      },
    ],
  });