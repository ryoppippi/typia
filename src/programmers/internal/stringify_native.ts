import type ts from "typescript/lib/tsclibrary";

/**
 * @internal
 */
export const stringify_native = (tsc: typeof ts): ts.Expression =>
    tsc.factory.createStringLiteral("{}");
