/// <reference types="ts-expose-internals/typescript" />
import ts from "typescript";
import { IProject } from "../../transformers/IProject";
export declare namespace FunctionalIsFunctionProgrammer {
    const write: (project: IProject) => (modulo: ts.LeftHandSideExpression) => (equals: boolean) => (expression: ts.Expression, declaration: ts.FunctionDeclaration) => ts.ArrowFunction;
    const getReturnTypeNode: (declaration: ts.FunctionDeclaration, async: boolean) => ts.TypeNode | undefined;
}
