import { ITypiaTransformOptions } from "../../transformers/ITypiaTransformOptions";

export namespace OptionPredicator {
  export const numeric = (options: ITypiaTransformOptions): boolean =>
    finite(options) || options.numeric === true;

  export const functional = (options: ITypiaTransformOptions): boolean =>
    options.functional === true;

  export const finite = (options: ITypiaTransformOptions): boolean =>
    options.finite === true;

  export const undefined = (options: ITypiaTransformOptions): boolean =>
    options.undefined !== false;
}
