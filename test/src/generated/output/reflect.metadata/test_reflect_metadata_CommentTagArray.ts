import typia from "typia";

import { _test_reflect_metadata } from "../../../internal/_test_reflect_metadata";
import { CommentTagArray } from "../../../structures/CommentTagArray";

export const test_reflect_metadata_CommentTagArray = _test_reflect_metadata(
  "CommentTagArray",
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
      objects: ["CommentTagArray"],
      aliases: [],
      natives: [],
      sets: [],
      maps: [],
    },
  ],
  components: {
    objects: [
      {
        name: "CommentTagArray",
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
                      value: "value",
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
              atomics: [],
              constants: [],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [
                {
                  name: "Array<CommentTagArray.Type>",
                  tags: [],
                },
              ],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            description: null,
            jsDocTags: [],
          },
        ],
        jsDocTags: [],
        index: 0,
        recursive: false,
        nullables: [false],
      },
      {
        name: "CommentTagArray.Type",
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
                      value: "items",
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
              atomics: [],
              constants: [],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [
                {
                  name: "Array<string>",
                  tags: [
                    [
                      {
                        name: "MinItems<3>",
                        target: "array",
                        kind: "minItems",
                        value: 3,
                        validate: "3 <= $input.length",
                        exclusive: true,
                        schema: {
                          minItems: 3,
                        },
                      },
                      {
                        name: "MaxItems<3>",
                        target: "array",
                        kind: "maxItems",
                        value: 3,
                        validate: "$input.length <= 3",
                        exclusive: true,
                        schema: {
                          maxItems: 3,
                        },
                      },
                    ],
                  ],
                },
              ],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            description: null,
            jsDocTags: [
              {
                name: "items",
                text: [
                  {
                    text: "3",
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
                      value: "minItems",
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
              atomics: [],
              constants: [],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [
                {
                  name: "Array<number>",
                  tags: [
                    [
                      {
                        name: "MinItems<3>",
                        target: "array",
                        kind: "minItems",
                        value: 3,
                        validate: "3 <= $input.length",
                        exclusive: true,
                        schema: {
                          minItems: 3,
                        },
                      },
                    ],
                  ],
                },
              ],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            description: null,
            jsDocTags: [
              {
                name: "minItems",
                text: [
                  {
                    text: "3",
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
                      value: "both",
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
              atomics: [],
              constants: [],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [
                {
                  name: "Array<string>",
                  tags: [
                    [
                      {
                        name: "MinItems<3>",
                        target: "array",
                        kind: "minItems",
                        value: 3,
                        validate: "3 <= $input.length",
                        exclusive: true,
                        schema: {
                          minItems: 3,
                        },
                      },
                      {
                        name: "MaxItems<7>",
                        target: "array",
                        kind: "maxItems",
                        value: 7,
                        validate: "$input.length <= 7",
                        exclusive: true,
                        schema: {
                          maxItems: 7,
                        },
                      },
                    ],
                  ],
                },
              ],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            description: null,
            jsDocTags: [
              {
                name: "minItems",
                text: [
                  {
                    text: "3",
                    kind: "text",
                  },
                ],
              },
              {
                name: "maxItems",
                text: [
                  {
                    text: "7",
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
                      value: "equal",
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
              atomics: [],
              constants: [],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [
                {
                  name: "Array<number>",
                  tags: [
                    [
                      {
                        name: "MinItems<10>",
                        target: "array",
                        kind: "minItems",
                        value: 10,
                        validate: "10 <= $input.length",
                        exclusive: true,
                        schema: {
                          minItems: 10,
                        },
                      },
                      {
                        name: "MaxItems<10>",
                        target: "array",
                        kind: "maxItems",
                        value: 10,
                        validate: "$input.length <= 10",
                        exclusive: true,
                        schema: {
                          maxItems: 10,
                        },
                      },
                    ],
                  ],
                },
              ],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            description: null,
            jsDocTags: [
              {
                name: "minItems",
                text: [
                  {
                    text: "10",
                    kind: "text",
                  },
                ],
              },
              {
                name: "maxItems",
                text: [
                  {
                    text: "10",
                    kind: "text",
                  },
                ],
              },
            ],
          },
        ],
        jsDocTags: [],
        index: 1,
        recursive: false,
        nullables: [false],
      },
    ],
    aliases: [],
    arrays: [
      {
        name: "Array<CommentTagArray.Type>",
        value: {
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
          objects: ["CommentTagArray.Type"],
          aliases: [],
          natives: [],
          sets: [],
          maps: [],
        },
        nullables: [false],
        recursive: false,
        index: null,
      },
      {
        name: "Array<string>",
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
        nullables: [false],
        recursive: false,
        index: null,
      },
      {
        name: "Array<number>",
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
        nullables: [false],
        recursive: false,
        index: null,
      },
    ],
    tuples: [],
  },
});
