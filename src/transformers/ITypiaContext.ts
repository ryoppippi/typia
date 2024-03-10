import ts from "typescript";
import { ITypiaProject } from "./ITypiaProject";
import { ImportProgrammer } from "../programmers/ImportProgrammer";

export interface ITypiaContext extends ITypiaProject {
  transform: ts.TransformationContext;
  importer: ImportProgrammer;
}
