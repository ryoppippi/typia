import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { CommentTagArray } from "../../../structures/CommentTagArray";

export const test_json_application_v3_0_CommentTagArray =
  _test_json_application({
    version: "3.0",
    name: "CommentTagArray",
  })(typia.json.application<[CommentTagArray], "3.0">());
