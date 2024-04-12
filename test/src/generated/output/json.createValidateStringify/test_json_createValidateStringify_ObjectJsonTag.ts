import typia from "typia";

import { _test_json_validateStringify } from "../../../internal/_test_json_validateStringify";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";

export const test_json_createValidateStringify_ObjectJsonTag =
  _test_json_validateStringify("ObjectJsonTag")<ObjectJsonTag>(ObjectJsonTag)(
    (input: ObjectJsonTag): typia.IValidation<string> => {
      const validate = (input: any): typia.IValidation<ObjectJsonTag> => {
        const errors = [] as any[];
        const __is = (input: any): input is ObjectJsonTag => {
          return (
            "object" === typeof input &&
            null !== input &&
            "string" === typeof (input as any).vulnerable &&
            "string" === typeof (input as any).description &&
            "string" === typeof (input as any).title &&
            "string" === typeof (input as any).complicate_title
          );
        };
        if (false === __is(input)) {
          const $report = (typia.json.createValidateStringify as any).report(
            errors,
          );
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ObjectJsonTag => {
            const $vo0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                "string" === typeof input.vulnerable ||
                  $report(_exceptionable, {
                    path: _path + ".vulnerable",
                    expected: "string",
                    value: input.vulnerable,
                  }),
                "string" === typeof input.description ||
                  $report(_exceptionable, {
                    path: _path + ".description",
                    expected: "string",
                    value: input.description,
                  }),
                "string" === typeof input.title ||
                  $report(_exceptionable, {
                    path: _path + ".title",
                    expected: "string",
                    value: input.title,
                  }),
                "string" === typeof input.complicate_title ||
                  $report(_exceptionable, {
                    path: _path + ".complicate_title",
                    expected: "string",
                    value: input.complicate_title,
                  }),
              ].every((flag: boolean) => flag);
            return (
              ((("object" === typeof input && null !== input) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectJsonTag",
                  value: input,
                })) &&
                $vo0(input, _path + "", true)) ||
              $report(true, {
                path: _path + "",
                expected: "ObjectJsonTag",
                value: input,
              })
            );
          })(input, "$input", true);
        }
        const success = 0 === errors.length;
        return {
          success,
          errors,
          data: success ? input : undefined,
        } as any;
      };
      const stringify = (input: ObjectJsonTag): string => {
        const $string = (typia.json.createValidateStringify as any).string;
        return `{"vulnerable":${$string((input as any).vulnerable)},"description":${$string((input as any).description)},"title":${$string((input as any).title)},"complicate_title":${$string((input as any).complicate_title)}}`;
      };
      const output = validate(input) as any;
      if (output.success) output.data = stringify(input);
      return output;
    },
  );