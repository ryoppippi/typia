import { IsProgrammer } from "../../programmers/IsProgrammer";

import { GenericTransformer } from "../internal/GenericTransformer";

export namespace IsTransformer {
  export const transform = (equals: boolean) =>
    GenericTransformer.scalar(equals ? "equals" : "is")(
      (project) => (importer) => IsProgrammer.write(project)(importer)(equals),
    );
}
