import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";

export const test_llm_application_llama_ToJsonAtomicUnion =
  _test_llm_application({
    model: "llama",
    name: "ToJsonAtomicUnion",
  })(typia.llm.application<ToJsonAtomicUnionApplication, "llama">());

interface ToJsonAtomicUnionApplication {
  insert(first: ToJsonAtomicUnion): Promise<void>;
  reduce(
    first: ToJsonAtomicUnion,
    second: ToJsonAtomicUnion | null,
  ): Promise<ToJsonAtomicUnion>;
  coalesce(
    first: ToJsonAtomicUnion | null,
    second: ToJsonAtomicUnion | null,
    third?: ToJsonAtomicUnion | null,
  ): Promise<ToJsonAtomicUnion | null>;
}
