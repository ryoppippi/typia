import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { CommentTagRange } from "../../../structures/CommentTagRange";

export const test_llm_application_llama_CommentTagRange = _test_llm_application(
  {
    model: "llama",
    name: "CommentTagRange",
  },
)(typia.llm.application<CommentTagRangeApplication, "llama">());

interface CommentTagRangeApplication {
  insert(first: CommentTagRange): Promise<void>;
  reduce(
    first: CommentTagRange,
    second: CommentTagRange | null,
  ): Promise<CommentTagRange>;
  coalesce(
    first: CommentTagRange | null,
    second: CommentTagRange | null,
    third?: CommentTagRange | null,
  ): Promise<CommentTagRange | null>;
}
