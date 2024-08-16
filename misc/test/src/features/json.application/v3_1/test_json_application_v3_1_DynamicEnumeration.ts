import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";

export const test_json_application_v3_1_DynamicEnumeration =
  _test_json_application({
    version: "3.1",
    name: "DynamicEnumeration",
  })(typia.json.application<[DynamicEnumeration], "3.1">());
