import typia from "typia";

import { _test_reflect_metadata } from "../../../internal/_test_reflect_metadata";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_reflect_metadata_ClassMethod = _test_reflect_metadata(
  "ClassMethod",
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
      objects: ["ClassMethod.Animal"],
      aliases: [],
      natives: [],
      sets: [],
      maps: [],
    },
  ],
  components: {
    objects: [
      {
        name: "ClassMethod.Animal",
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
                      value: "name",
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
                      value: "age",
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
    arrays: [],
    tuples: [],
  },
});
