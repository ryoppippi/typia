import typia from "typia";

import { _test_functional_isReturnAsync } from "../../../internal/_test_functional_isReturnAsync";
import { ObjectHttpNullable } from "../../../structures/ObjectHttpNullable";

export const test_functional_isReturnAsync_ObjectHttpNullable =
  _test_functional_isReturnAsync("ObjectHttpNullable")(ObjectHttpNullable)(
    (p: (input: ObjectHttpNullable) => Promise<ObjectHttpNullable>) =>
      async (input: ObjectHttpNullable): Promise<ObjectHttpNullable | null> => {
        const result = await p(input);
        return ((input: any): input is ObjectHttpNullable => {
          const $io0 = (input: any): boolean =>
            (null === input.boolean || "boolean" === typeof input.boolean) &&
            (null === input.bigint || "bigint" === typeof input.bigint) &&
            (null === input.number ||
              ("number" === typeof input.number &&
                Number.isFinite(input.number) &&
                1 <= input.number)) &&
            (null === input.string || "string" === typeof input.string) &&
            (null === input.constantBoolean ||
              true === input.constantBoolean) &&
            (null === input.constantBigint ||
              BigInt(1) === input.constantBigint ||
              BigInt(2) === input.constantBigint ||
              BigInt(3) === input.constantBigint) &&
            (null === input.constantNumber ||
              1 === input.constantNumber ||
              2 === input.constantNumber ||
              3 === input.constantNumber) &&
            (null === input.constantString ||
              "three" === input.constantString ||
              "two" === input.constantString ||
              "one" === input.constantString) &&
            (null === input.nullableArray ||
              (Array.isArray(input.nullableArray) &&
                input.nullableArray.every(
                  (elem: any) =>
                    "number" === typeof elem && Number.isFinite(elem),
                )));
          return "object" === typeof input && null !== input && $io0(input);
        })(result)
          ? result
          : null;
      },
  );
