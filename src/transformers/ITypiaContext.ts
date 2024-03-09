import ts from "typescript";
import { ITypiaProject } from "./ITypiaProject";
import { ImportProgrammer } from "../programmers/ImportProgrammer";

export interface ITypiaContext extends ITypiaProject {
  context: ts.TransformationContext;
  importer: ImportProgrammer;
}
