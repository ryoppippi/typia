import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TupleHierarchical } from "../../../../structures/TupleHierarchical";

export const test_json_application_v3_0_TupleHierarchical =
  _test_json_application({
    version: "3.0",
    name: "TupleHierarchical",
  })({
    version: "3.0",
    components: {
      schemas: {
        TupleHierarchical: {
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
              {
                type: "array",
                items: {
                  oneOf: [
                    {
                      type: "boolean",
                      nullable: true,
                    },
                    {
                      type: "array",
                      items: {
                        oneOf: [
                          {
                            type: "number",
                          },
                          {
                            type: "array",
                            items: {
                              oneOf: [
                                {
                                  type: "boolean",
                                },
                                {
                                  type: "string",
                                },
                              ],
                            },
                            minItems: 2,
                            maxItems: 2,
                          },
                        ],
                      },
                      minItems: 2,
                      maxItems: 2,
                      nullable: true,
                    },
                  ],
                },
                minItems: 3,
                maxItems: 3,
                nullable: true,
              },
              {
                type: "array",
                items: {
                  oneOf: [
                    {
                      type: "number",
                    },
                    {
                      type: "array",
                      items: {
                        type: "array",
                        items: {
                          oneOf: [
                            {
                              type: "string",
                            },
                            {
                              type: "boolean",
                            },
                            {
                              type: "array",
                              items: {
                                type: "array",
                                items: {
                                  oneOf: [
                                    {
                                      type: "number",
                                    },
                                    {
                                      type: "array",
                                      items: {
                                        oneOf: [
                                          {
                                            type: "boolean",
                                          },
                                          {
                                            type: "string",
                                          },
                                        ],
                                      },
                                      minItems: 2,
                                      maxItems: 2,
                                    },
                                  ],
                                },
                                minItems: 3,
                                maxItems: 3,
                              },
                            },
                          ],
                        },
                        minItems: 3,
                        maxItems: 3,
                      },
                    },
                  ],
                },
                minItems: 2,
                maxItems: 2,
                nullable: true,
              },
            ],
          },
          minItems: 5,
          maxItems: 5,
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/TupleHierarchical",
      },
    ],
  });
