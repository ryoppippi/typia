import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectAlias } from "../../../structures/ObjectAlias";

export const test_llm_application_llama_ObjectAlias = _test_llm_application({
  model: "llama",
  name: "ObjectAlias",
})(typia.llm.application<ObjectAliasApplication, "llama">());

interface ObjectAliasApplication {
  insert(first: ObjectAlias): Promise<void>;
  reduce(first: ObjectAlias, second: ObjectAlias | null): Promise<ObjectAlias>;
  coalesce(
    first: ObjectAlias | null,
    second: ObjectAlias | null,
    third?: ObjectAlias | null,
  ): Promise<ObjectAlias | null>;
}
