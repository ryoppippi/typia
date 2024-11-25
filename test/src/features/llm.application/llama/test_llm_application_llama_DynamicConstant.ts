import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_llm_application_llama_DynamicConstant = _test_llm_application(
  {
    model: "llama",
    name: "DynamicConstant",
  },
)(typia.llm.application<DynamicConstantApplication, "llama">());

interface DynamicConstantApplication {
  insert(first: DynamicConstant): Promise<void>;
  reduce(
    first: DynamicConstant,
    second: DynamicConstant | null,
  ): Promise<DynamicConstant>;
  coalesce(
    first: DynamicConstant | null,
    second: DynamicConstant | null,
    third?: DynamicConstant | null,
  ): Promise<DynamicConstant | null>;
}
