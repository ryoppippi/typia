import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_json_application_v3_0_ObjectGenericAlias =
  _test_json_application({
    version: "3.0",
    name: "ObjectGenericAlias",
  })(typia.json.application<[ObjectGenericAlias], "3.0">());
