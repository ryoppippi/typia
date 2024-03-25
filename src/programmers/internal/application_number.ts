import { IJsonSchema } from "../../schemas/json/IJsonSchema";
import { IMetadataTypeTag } from "../../schemas/metadata/IMetadataTypeTag";
import { MetadataAtomic } from "../../schemas/metadata/MetadataAtomic";

type Schema = IJsonSchema.INumber | IJsonSchema.IInteger;

/**
 * @internal
 */
export const application_number = (atomic: MetadataAtomic): Array<Schema> => {
  const base: Schema = {
    type: "number",
  };
  const matrix: IMetadataTypeTag[][] = atomic.tags
    .filter((row) => row.some((tag) => tag.schema !== undefined))
    .map((row) => row.filter((tag) => tag.schema !== undefined));
  if (matrix.length === 0) return [base];
  return matrix.map((row) => {
    const schema: Schema = { ...base };
    for (const tag of row) Object.assign(schema, tag.schema);
    return schema;
  });
};
