import typia from "typia";

import { _test_reflect_metadata } from "../../../internal/_test_reflect_metadata";
import { CommentTagArrayUnion } from "../../../structures/CommentTagArrayUnion";

export const test_reflect_metadata_CommentTagArrayUnion =
  _test_reflect_metadata("CommentTagArrayUnion")({
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
            name: "CommentTagArrayUnion",
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
          name: "CommentTagArrayUnion.Type",
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
                    name: "Array<string | number>",
                    tags: [
                      [
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
          name: "CommentTagArrayUnion",
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
            objects: ["CommentTagArrayUnion.Type"],
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
        {
          name: "Array<string | number>",
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
