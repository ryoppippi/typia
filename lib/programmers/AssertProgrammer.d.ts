/// <reference types="ts-expose-internals/typescript" />
import ts from "typescript";
import { IProject } from "../transformers/IProject";
export declare namespace AssertProgrammer {
    const write: (project: IProject) => (modulo: ts.LeftHandSideExpression) => (props: boolean | {
        equals: boolean;
        guard: boolean;
    }) => (type: ts.Type, name?: string, init?: ts.Expression) => ts.ArrowFunction;
    namespace Guardian {
        const identifier: () => ts.Identifier;
        const parameter: (init: ts.Expression | undefined) => ts.ParameterDeclaration;
        const type: () => ts.FunctionTypeNode;
    }
}
