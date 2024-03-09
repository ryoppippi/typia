import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";

import { IMetadataTypeTag } from "../../schemas/metadata/IMetadataTypeTag";
import { MetadataArray } from "../../schemas/metadata/MetadataArray";

import { ITypiaProject } from "../../transformers/ITypiaProject";

import { ICheckEntry } from "../helpers/ICheckEntry";

/**
 * @internal
 */
export const check_array_length =
  (project: ITypiaProject) =>
  (array: MetadataArray) =>
  (input: ts.Expression): ICheckEntry => {
    const conditions: ICheckEntry.ICondition[][] = check_string_type_tags(
      project,
    )(array.tags)(input);

    return {
      expected: array.getName(),
      expression: null,
      conditions,
    };
  };

const check_string_type_tags =
  (project: ITypiaProject) =>
  (matrix: IMetadataTypeTag[][]) =>
  (input: ts.Expression): ICheckEntry.ICondition[][] =>
    matrix
      .map((row) => row.filter((tag) => !!tag.validate))
      .filter((row) => !!row.length)
      .map((row) =>
        row.map((tag) => ({
          expected: `Array<> & ${tag.name}`,
          expression: (
            tag.predicate ??
            ExpressionFactory.transpile(project.context)(tag.validate!)
          )(input),
        })),
      );
