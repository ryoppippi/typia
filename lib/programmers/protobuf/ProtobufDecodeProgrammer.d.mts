/// <reference types="ts-expose-internals/typescript" />
import ts from "typescript";
import { IProject } from "../../transformers/IProject";
export declare namespace ProtobufDecodeProgrammer {
    const write: (project: IProject) => (modulo: ts.LeftHandSideExpression) => (type: ts.Type, name?: string) => ts.ArrowFunction;
}
