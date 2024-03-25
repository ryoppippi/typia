import { IJsonSchema } from "../../schemas/json/IJsonSchema";
import { IMetadataTypeTag } from "../../schemas/metadata/IMetadataTypeTag";
import { MetadataAtomic } from "../../schemas/metadata/MetadataAtomic";

/**
 * @internal
 */
export const application_string = (
  atomic: MetadataAtomic,
): IJsonSchema.IString[] => {
  // DEFAULT CONFIGURATION
  const base: IJsonSchema.IString = {
    type: "string",
  };
  const matrix: IMetadataTypeTag[][] = atomic.tags
    .filter((row) => row.some((tag) => tag.schema !== undefined))
    .map((row) => row.filter((tag) => tag.schema !== undefined));
  if (matrix.length === 0) return [base];
  return matrix.map((row) => {
    const schema: IJsonSchema.IString = { ...base };
    for (const tag of row) Object.assign(schema, tag.schema);
    return schema;
  });
};
