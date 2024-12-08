import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_llm_applicationOfValidate_claude_ToJsonDouble =
  _test_llm_applicationOfValidate({
    model: "claude",
    name: "ToJsonDouble",
    factory: ToJsonDouble,
  })(typia.llm.applicationOfValidate<ToJsonDoubleApplication, "claude">());

interface ToJsonDoubleApplication {
  insert(p: { first: ToJsonDouble }): Promise<void>;
  reduce(p: {
    first: ToJsonDouble;
    second: ToJsonDouble | null;
  }): Promise<ToJsonDouble>;
  coalesce(p: {
    first: ToJsonDouble | null;
    second: ToJsonDouble | null;
    third?: ToJsonDouble | null;
  }): Promise<ToJsonDouble | null>;
}
