import ts from "typescript";

import { MetadataObject } from "../../schemas/metadata/MetadataObject";

import { FeatureProgrammer } from "../FeatureProgrammer";

/**
 * @internal
 */
export const decode_union_object =
  (
    checker: (p: {
      input: ts.Expression;
      object: MetadataObject;
      explore: FeatureProgrammer.IExplore;
    }) => ts.Expression,
  ) =>
  (
    decoder: (p: {
      input: ts.Expression;
      object: MetadataObject;
      explore: FeatureProgrammer.IExplore;
    }) => ts.Expression,
  ) =>
  (success: (exp: ts.Expression) => ts.Expression) =>
  (escaper: (value: ts.Expression, expected: string) => ts.Statement) =>
  (p: {
    input: ts.Expression;
    targets: MetadataObject[];
    explore: FeatureProgrammer.IExplore;
  }): ts.CallExpression =>
    ts.factory.createCallExpression(
      ts.factory.createArrowFunction(
        undefined,
        undefined,
        [],
        undefined,
        undefined,
        iterate(escaper)({
          input: p.input,
          unions: p.targets.map((object) => ({
            type: "object",
            is: () =>
              success(
                checker({
                  input: p.input,
                  object,
                  explore: p.explore,
                }),
              ),
            value: () =>
              decoder({
                input: p.input,
                object,
                explore: p.explore,
              }),
          })),
          expected: `(${p.targets.map((t) => t.name).join(" | ")})`,
        }),
      ),
      undefined,
      undefined,
    );

/**
 * @internal
 */
const iterate =
  (escaper: (value: ts.Expression, expected: string) => ts.Statement) =>
  (p: { input: ts.Expression; unions: IUnion[]; expected: string }) => {
    interface IBranch {
      condition: null | ts.Expression;
      value: ts.Expression;
    }
    const branches: IBranch[] = [];

    for (const u of p.unions) {
      const condition: ts.Expression = u.is();
      if (condition.kind === ts.SyntaxKind.TrueKeyword) {
        branches.push({
          condition: null,
          value: u.value(),
        });
        break;
      }
      branches.push({
        condition,
        value: u.value(),
      });
    }
    if (branches.length === 0)
      return ts.factory.createBlock([escaper(p.input, p.expected)], true);
    else if (branches.length === 1 && branches[0]!.condition === null)
      return branches[0]!.value;

    const statements: ts.Statement[] = branches.map((b) =>
      b.condition !== null
        ? ts.factory.createIfStatement(
            b.condition,
            ts.factory.createReturnStatement(b.value),
            undefined,
          )
        : ts.factory.createReturnStatement(b.value),
    );
    if (branches.at(-1)!.condition !== null)
      statements.push(escaper(p.input, p.expected));
    return ts.factory.createBlock(statements, true);
  };

/**
 * @internal
 */
interface IUnion {
  type: string;
  is: () => ts.Expression;
  value: () => ts.Expression;
}
