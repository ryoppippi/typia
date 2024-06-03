import {
  ImportTransformer
} from "./chunk-F3OZXVTA.mjs";
import {
  transform_default
} from "./chunk-SQOUZHEJ.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/programmers/TypiaProgrammer.ts
import fs from "fs";
import path from "path";
import ts from "typescript";
var TypiaProgrammer;
(function(TypiaProgrammer2) {
  TypiaProgrammer2.build = async (props) => {
    props.input = path.resolve(props.input);
    props.output = path.resolve(props.output);
    if (await is_directory(props.input) === false) throw new URIError("Error on TypiaGenerator.generate(): input path is not a directory.");
    else if (fs.existsSync(props.output) === false) await fs.promises.mkdir(props.output, {
      recursive: true
    });
    else if (await is_directory(props.output) === false) {
      const parent = path.join(props.output, "..");
      if (await is_directory(parent) === false) throw new URIError("Error on TypiaGenerator.generate(): output path is not a directory.");
      await fs.promises.mkdir(props.output);
    }
    const { options: compilerOptions } = ts.parseJsonConfigFileContent(ts.readConfigFile(props.project, ts.sys.readFile).config, {
      fileExists: ts.sys.fileExists,
      readFile: ts.sys.readFile,
      readDirectory: ts.sys.readDirectory,
      useCaseSensitiveFileNames: ts.sys.useCaseSensitiveFileNames
    }, path.dirname(props.project));
    const program = ts.createProgram(await (async () => {
      const container = [];
      await gather(props)(container)(props.input)(props.output);
      return container;
    })(), compilerOptions);
    const diagnostics = [];
    const result = ts.transform(program.getSourceFiles().filter((file) => !file.isDeclarationFile && path.resolve(file.fileName).indexOf(props.input) !== -1), [
      ImportTransformer.transform(props.input)(props.output),
      transform_default(program, (compilerOptions.plugins ?? []).find((p) => p.transform === "typia/lib/transform" || p.transform === "../src/transform.ts") ?? {}, {
        addDiagnostic: /* @__PURE__ */ __name((diag) => diagnostics.push(diag), "addDiagnostic")
      })
    ], program.getCompilerOptions());
    for (const diag of diagnostics) {
      const file = diag.file ? path.relative(diag.file.fileName, process.cwd()) : "(unknown file)";
      const category = diag.category === ts.DiagnosticCategory.Warning ? "warning" : diag.category === ts.DiagnosticCategory.Error ? "error" : diag.category === ts.DiagnosticCategory.Suggestion ? "suggestion" : diag.category === ts.DiagnosticCategory.Message ? "message" : "unkown";
      const [line, pos] = diag.file ? (() => {
        const lines = diag.file.text.substring(0, diag.start).split("\n");
        if (lines.length === 0) return [
          0,
          0
        ];
        return [
          lines.length,
          lines.at(-1).length + 1
        ];
      })() : [
        0,
        0
      ];
      console.error(`${file}:${line}:${pos} - ${category} TS${diag.code}: ${diag.messageText}`);
    }
    if (diagnostics.length) process.exit(-1);
    const printer = ts.createPrinter({
      newLine: ts.NewLineKind.LineFeed
    });
    for (const file of result.transformed) {
      const to = path.resolve(file.fileName).replace(props.input, props.output);
      const content = printer.printFile(file);
      await fs.promises.writeFile(to, content, "utf8");
    }
  };
  const is_directory = /* @__PURE__ */ __name(async (current) => {
    const stat = await fs.promises.stat(current);
    return stat.isDirectory();
  }, "is_directory");
  const gather = /* @__PURE__ */ __name((props) => (container) => (from) => async (to) => {
    if (from === props.output) return;
    else if (fs.existsSync(to) === false) await fs.promises.mkdir(to);
    for (const file of await fs.promises.readdir(from)) {
      const next = path.join(from, file);
      const stat = await fs.promises.stat(next);
      if (stat.isDirectory()) {
        await gather(props)(container)(next)(path.join(to, file));
        continue;
      } else if (is_supported_extension(file)) container.push(next);
    }
  }, "gather");
  const is_supported_extension = /* @__PURE__ */ __name((filename) => {
    return filename.endsWith(".ts") && !filename.endsWith(".d.ts") || filename.endsWith(".tsx") && !filename.endsWith(".d.tsx");
  }, "is_supported_extension");
})(TypiaProgrammer || (TypiaProgrammer = {}));

export {
  TypiaProgrammer
};
//# sourceMappingURL=chunk-EPRWQDNF.mjs.map