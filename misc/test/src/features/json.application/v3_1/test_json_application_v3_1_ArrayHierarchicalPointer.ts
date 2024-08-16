import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayHierarchicalPointer } from "../../../structures/ArrayHierarchicalPointer";

export const test_json_application_v3_1_ArrayHierarchicalPointer =
  _test_json_application({
    version: "3.1",
    name: "ArrayHierarchicalPointer",
  })(typia.json.application<[ArrayHierarchicalPointer], "3.1">());
