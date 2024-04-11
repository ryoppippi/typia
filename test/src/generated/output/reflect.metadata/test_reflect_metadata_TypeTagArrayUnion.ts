import typia from "typia";

import { _test_reflect_metadata } from "../../../internal/_test_reflect_metadata";
import { TypeTagArrayUnion } from "../../../structures/TypeTagArrayUnion";

export const test_reflect_metadata_TypeTagArrayUnion = _test_reflect_metadata(
  "TypeTagArrayUnion",
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
      arrays: [
        {
          name: "TypeTagArrayUnion",
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
  ],
  components: {
    objects: [
      {
        name: "TypeTagArrayUnion.Type",
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
                  name: 'Array<string & Format<"uuid">>',
                  tags: [
                    [
                      {
                        target: "array",
                        name: "MinItems<3>",
                        kind: "minItems",
                        value: 3,
                        validate: "3 <= $input.length",
                        exclusive: true,
                        schema: {
                          minItems: 3,
                        },
                      },
                      {
                        target: "array",
                        name: "MaxItems<3>",
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
            jsDocTags: [],
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
                  name: "Array<number & Minimum<3>>",
                  tags: [
                    [
                      {
                        target: "array",
                        name: "MinItems<3>",
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
            jsDocTags: [],
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
                      value: "maxItems",
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
                  name: "Array<(string & MaxLength<7>) | (number & Maximum<7>)>",
                  tags: [
                    [
                      {
                        target: "array",
                        name: "MaxItems<7>",
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
            jsDocTags: [],
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
                  name: 'Array<string & Format<"uuid">>',
                  tags: [
                    [
                      {
                        target: "array",
                        name: "MinItems<3>",
                        kind: "minItems",
                        value: 3,
                        validate: "3 <= $input.length",
                        exclusive: true,
                        schema: {
                          minItems: 3,
                        },
                      },
                      {
                        target: "array",
                        name: "MaxItems<7>",
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
            jsDocTags: [],
          },
        ],
        jsDocTags: [],
        index: 0,
        recursive: false,
        nullables: [false],
      },
    ],
    aliases: [],
    arrays: [
      {
        name: "TypeTagArrayUnion",
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
          objects: ["TypeTagArrayUnion.Type"],
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
        name: 'Array<string & Format<"uuid">>',
        value: {
          any: false,
          required: true,
          optional: false,
          nullable: false,
          functional: false,
          atomics: [
            {
              type: "string",
              tags: [
                [
                  {
                    target: "string",
                    name: 'Format<"uuid">',
                    kind: "format",
                    value: "uuid",
                    validate:
                      "/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test($input)",
                    exclusive: ["format", "pattern"],
                    schema: {
                      format: "uuid",
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
        nullables: [false],
        recursive: false,
        index: null,
      },
      {
        name: "Array<number & Minimum<3>>",
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
        nullables: [false],
        recursive: false,
        index: null,
      },
      {
        name: "Array<(string & MaxLength<7>) | (number & Maximum<7>)>",
        value: {
          any: false,
          required: true,
          optional: false,
          nullable: false,
          functional: false,
          atomics: [
            {
              type: "string",
              tags: [
                [
                  {
                    target: "string",
                    name: "MaxLength<7>",
                    kind: "maxLength",
                    value: 7,
                    validate: "$input.length <= 7",
                    exclusive: true,
                    schema: {
                      maxLength: 7,
                    },
                  },
                ],
              ],
            },
            {
              type: "number",
              tags: [
                [
                  {
                    target: "number",
                    name: "Maximum<7>",
                    kind: "maximum",
                    value: 7,
                    validate: "$input <= 7",
                    exclusive: ["maximum", "exclusiveMaximum"],
                    schema: {
                      maximum: 7,
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
        nullables: [false],
        recursive: false,
        index: null,
      },
    ],
    tuples: [],
  },
});
