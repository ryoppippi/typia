import typia from "typia";

import { _test_reflect_metadata } from "../../../internal/_test_reflect_metadata";
import { CommentTagDefault } from "../../../structures/CommentTagDefault";

export const test_reflect_metadata_CommentTagDefault = _test_reflect_metadata(
  "CommentTagDefault",
)({
  metadatas: [
    {
      any: false,
      required: true,
      optional: false,
      nullable: false,
      functional: false,
      atomics: [],
      constants: [],
      templates: [],
      escaped: null,
      rest: null,
      arrays: [],
      tuples: [],
      objects: ["CommentTagDefault"],
      aliases: [],
      natives: [],
      sets: [],
      maps: [],
    },
  ],
  components: {
    objects: [
      {
        name: "CommentTagDefault",
        properties: [
          {
            key: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [],
              constants: [
                {
                  type: "string",
                  values: [
                    {
                      value: "boolean",
                    },
                  ],
                },
              ],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            value: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [
                {
                  type: "boolean",
                  tags: [],
                },
              ],
              constants: [],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            description: "Default tag on `boolean` typed value.",
            jsDocTags: [
              {
                name: "default",
                text: [
                  {
                    text: "false",
                    kind: "text",
                  },
                ],
              },
            ],
          },
          {
            key: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [],
              constants: [
                {
                  type: "string",
                  values: [
                    {
                      value: "number",
                    },
                  ],
                },
              ],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            value: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [
                {
                  type: "number",
                  tags: [],
                },
              ],
              constants: [],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            description: "Default tag on `number` typed value.",
            jsDocTags: [
              {
                name: "default",
                text: [
                  {
                    text: "1",
                    kind: "text",
                  },
                ],
              },
            ],
          },
          {
            key: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [],
              constants: [
                {
                  type: "string",
                  values: [
                    {
                      value: "string",
                    },
                  ],
                },
              ],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            value: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [
                {
                  type: "string",
                  tags: [],
                },
              ],
              constants: [],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            description: "Default tag on `string` typed value.",
            jsDocTags: [
              {
                name: "default",
                text: [
                  {
                    text: "two",
                    kind: "text",
                  },
                ],
              },
            ],
          },
          {
            key: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [],
              constants: [
                {
                  type: "string",
                  values: [
                    {
                      value: "text",
                    },
                  ],
                },
              ],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            value: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [
                {
                  type: "string",
                  tags: [],
                },
              ],
              constants: [],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            description:
              "Default tag on `string` typed value with long characters.",
            jsDocTags: [
              {
                name: "default",
                text: [
                  {
                    text: "Very long text, can you understand it?",
                    kind: "text",
                  },
                ],
              },
            ],
          },
          {
            key: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [],
              constants: [
                {
                  type: "string",
                  values: [
                    {
                      value: "boolean_and_number_and_string",
                    },
                  ],
                },
              ],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            value: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [
                {
                  type: "string",
                  tags: [],
                },
                {
                  type: "number",
                  tags: [],
                },
                {
                  type: "boolean",
                  tags: [],
                },
              ],
              constants: [],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            description: "Default value on union typed property.",
            jsDocTags: [
              {
                name: "default",
                text: [
                  {
                    text: "false",
                    kind: "text",
                  },
                ],
              },
              {
                name: "default",
                text: [
                  {
                    text: "1",
                    kind: "text",
                  },
                ],
              },
              {
                name: "default",
                text: [
                  {
                    text: "two",
                    kind: "text",
                  },
                ],
              },
            ],
          },
          {
            key: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [],
              constants: [
                {
                  type: "string",
                  values: [
                    {
                      value: "union_but_boolean",
                    },
                  ],
                },
              ],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            value: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [
                {
                  type: "string",
                  tags: [],
                },
                {
                  type: "number",
                  tags: [],
                },
                {
                  type: "boolean",
                  tags: [],
                },
              ],
              constants: [],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            description: "Default value on union typed property.",
            jsDocTags: [
              {
                name: "default",
                text: [
                  {
                    text: "false",
                    kind: "text",
                  },
                ],
              },
            ],
          },
          {
            key: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [],
              constants: [
                {
                  type: "string",
                  values: [
                    {
                      value: "union_but_number",
                    },
                  ],
                },
              ],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            value: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [
                {
                  type: "string",
                  tags: [],
                },
                {
                  type: "number",
                  tags: [],
                },
                {
                  type: "boolean",
                  tags: [],
                },
              ],
              constants: [],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            description: "Default value on union typed property.",
            jsDocTags: [
              {
                name: "default",
                text: [
                  {
                    text: "1",
                    kind: "text",
                  },
                ],
              },
            ],
          },
          {
            key: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [],
              constants: [
                {
                  type: "string",
                  values: [
                    {
                      value: "union_but_string",
                    },
                  ],
                },
              ],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            value: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [
                {
                  type: "string",
                  tags: [],
                },
                {
                  type: "number",
                  tags: [],
                },
                {
                  type: "boolean",
                  tags: [],
                },
              ],
              constants: [],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            description: "Default value on union typed property.",
            jsDocTags: [
              {
                name: "default",
                text: [
                  {
                    text: "two",
                    kind: "text",
                  },
                ],
              },
            ],
          },
          {
            key: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [],
              constants: [
                {
                  type: "string",
                  values: [
                    {
                      value: "vulnerable_range",
                    },
                  ],
                },
              ],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            value: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [
                {
                  type: "number",
                  tags: [
                    [
                      {
                        target: "number",
                        name: "Minimum<3>",
                        kind: "minimum",
                        value: 3,
                        validate: "3 <= $input",
                        exclusive: ["minimum", "exclusiveMinimum"],
                        schema: {
                          minimum: 3,
                        },
                      },
                      {
                        target: "number",
                        name: "Maximum<5>",
                        kind: "maximum",
                        value: 5,
                        validate: "$input <= 5",
                        exclusive: ["maximum", "exclusiveMaximum"],
                        schema: {
                          maximum: 5,
                        },
                      },
                    ],
                  ],
                },
              ],
              constants: [],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            description: "Default value on union typed property.",
            jsDocTags: [
              {
                name: "default",
                text: [
                  {
                    text: "7",
                    kind: "text",
                  },
                ],
              },
              {
                name: "minimum",
                text: [
                  {
                    text: "3",
                    kind: "text",
                  },
                ],
              },
              {
                name: "maximum",
                text: [
                  {
                    text: "5",
                    kind: "text",
                  },
                ],
              },
            ],
          },
          {
            key: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [],
              constants: [
                {
                  type: "string",
                  values: [
                    {
                      value: "boolean_and_number_and_template",
                    },
                  ],
                },
              ],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            value: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [
                {
                  type: "number",
                  tags: [],
                },
                {
                  type: "boolean",
                  tags: [],
                },
              ],
              constants: [],
              templates: [
                [
                  {
                    any: false,
                    required: true,
                    optional: false,
                    nullable: false,
                    functional: false,
                    atomics: [],
                    constants: [
                      {
                        type: "string",
                        values: [
                          {
                            value: "prefix_",
                          },
                        ],
                      },
                    ],
                    templates: [],
                    escaped: null,
                    rest: null,
                    arrays: [],
                    tuples: [],
                    objects: [],
                    aliases: [],
                    natives: [],
                    sets: [],
                    maps: [],
                  },
                  {
                    any: false,
                    required: true,
                    optional: false,
                    nullable: false,
                    functional: false,
                    atomics: [
                      {
                        type: "string",
                        tags: [],
                      },
                    ],
                    constants: [],
                    templates: [],
                    escaped: null,
                    rest: null,
                    arrays: [],
                    tuples: [],
                    objects: [],
                    aliases: [],
                    natives: [],
                    sets: [],
                    maps: [],
                  },
                ],
              ],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            description: "Default value on union typed property.",
            jsDocTags: [
              {
                name: "default",
                text: [
                  {
                    text: "false",
                    kind: "text",
                  },
                ],
              },
              {
                name: "default",
                text: [
                  {
                    text: "1",
                    kind: "text",
                  },
                ],
              },
            ],
          },
        ],
        jsDocTags: [],
        index: 0,
        recursive: false,
        nullables: [false],
      },
    ],
    aliases: [],
    arrays: [],
    tuples: [],
  },
});
