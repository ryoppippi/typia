/// <reference types="ts-expose-internals/typescript" />
import ts from "typescript";
import { IProject } from "../../transformers/IProject";
export declare namespace FunctionalIsReturnProgrammer {
    const write: (project: IProject) => (modulo: ts.LeftHandSideExpression) => (equals: boolean) => (expression: ts.Expression, declaration: ts.FunctionDeclaration) => ts.ArrowFunction;
    const writeStatements: (project: IProject) => (modulo: ts.LeftHandSideExpression) => (equals: boolean) => (expression: ts.Expression, declaration: ts.FunctionDeclaration) => {
        async: boolean;
        statements: ts.Statement[];
    };
}
