import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectSimple } from "../../../structures/ObjectSimple";

export const test_json_application_v3_0_ObjectSimple = _test_json_application({
  version: "3.0",
  name: "ObjectSimple",
})(typia.json.application<[ObjectSimple], "3.0">());
