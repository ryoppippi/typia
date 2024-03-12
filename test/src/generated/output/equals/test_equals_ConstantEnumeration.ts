import typia from "typia";
import { _test_equals } from "../../../internal/_test_equals";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";
export const test_equals_ConstantEnumeration = _test_equals(
  "ConstantEnumeration",
)<ConstantEnumeration>(ConstantEnumeration)((input) =>
  ((
    input: any,
    _exceptionable: boolean = true,
  ): input is ConstantEnumeration => {
    return (
      Array.isArray(input) &&
      input.every(
        (elem: any, _index1: number) =>
          0 === elem ||
          1 === elem ||
          2 === elem ||
          "Four" === elem ||
          "Three" === elem,
      )
    );
  })(input),
);
