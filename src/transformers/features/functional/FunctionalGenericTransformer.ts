import ts from "typescript";
import { TransformerError } from "../../TransformerError";
import { TypeFactory } from "../../../factories/TypeFactory";
import { ITypiaContext } from "../../ITypiaContext";

export namespace FunctionalGenericTransformer {
  export const transform =
    (props: {
      method: string;
      programmer: (
        context: ITypiaContext,
      ) => (
        equals: boolean,
      ) => (
        expression: ts.Expression,
        declaration: ts.FunctionDeclaration,
        init?: ts.Expression,
      ) => ts.Expression;
      equals: boolean;
    }) =>
    (context: ITypiaContext) =>
    (expression: ts.CallExpression) => {
      // CHECK PARAMETER
      if (expression.arguments.length === 0)
        throw new TransformerError({
          code: `typia.functional.${props.method}`,
          message: `no input value.`,
        });

      // GET TYPE INFO
      const type: ts.Type =
        expression.typeArguments && expression.typeArguments[0]
          ? context.checker.getTypeFromTypeNode(expression.typeArguments[0])
          : context.checker.getTypeAtLocation(expression.arguments[0]!);
      if (TypeFactory.isFunction(type) === false)
        throw new TransformerError({
          code: `typia.functional.${props.method}`,
          message: `input value is not a function.`,
        });
      return props.programmer(context)(props.equals)(
        expression.arguments[0]!,
        type.symbol!.declarations![0] as ts.FunctionDeclaration,
        expression.arguments[1],
      );
    };
}
