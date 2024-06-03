"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }

var _chunkYH7AXL7Rjs = require('./chunk-YH7AXL7R.js');


var _chunkSTVA3BY2js = require('./chunk-STVA3BY2.js');


var _chunkUZ5BS2M3js = require('./chunk-UZ5BS2M3.js');

// src/programmers/TypiaProgrammer.ts
var _fs = require('fs'); var _fs2 = _interopRequireDefault(_fs);
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var TypiaProgrammer;
(function(TypiaProgrammer2) {
  TypiaProgrammer2.build = async (props) => {
    props.input = _path2.default.resolve(props.input);
    props.output = _path2.default.resolve(props.output);
    if (await is_directory(props.input) === false) throw new URIError("Error on TypiaGenerator.generate(): input path is not a directory.");
    else if (_fs2.default.existsSync(props.output) === false) await _fs2.default.promises.mkdir(props.output, {
      recursive: true
    });
    else if (await is_directory(props.output) === false) {
      const parent = _path2.default.join(props.output, "..");
      if (await is_directory(parent) === false) throw new URIError("Error on TypiaGenerator.generate(): output path is not a directory.");
      await _fs2.default.promises.mkdir(props.output);
    }
    const { options: compilerOptions } = _typescript2.default.parseJsonConfigFileContent(_typescript2.default.readConfigFile(props.project, _typescript2.default.sys.readFile).config, {
      fileExists: _typescript2.default.sys.fileExists,
      readFile: _typescript2.default.sys.readFile,
      readDirectory: _typescript2.default.sys.readDirectory,
      useCaseSensitiveFileNames: _typescript2.default.sys.useCaseSensitiveFileNames
    }, _path2.default.dirname(props.project));
    const program = _typescript2.default.createProgram(await (async () => {
      const container = [];
      await gather(props)(container)(props.input)(props.output);
      return container;
    })(), compilerOptions);
    const diagnostics = [];
    const result = _typescript2.default.transform(program.getSourceFiles().filter((file) => !file.isDeclarationFile && _path2.default.resolve(file.fileName).indexOf(props.input) !== -1), [
      _chunkYH7AXL7Rjs.ImportTransformer.transform(props.input)(props.output),
      _chunkSTVA3BY2js.transform_default.call(void 0, program, _nullishCoalesce((_nullishCoalesce(compilerOptions.plugins, () => ( []))).find((p) => p.transform === "typia/lib/transform" || p.transform === "../src/transform.ts"), () => ( {})), {
        addDiagnostic: /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (diag) => diagnostics.push(diag), "addDiagnostic")
      })
    ], program.getCompilerOptions());
    for (const diag of diagnostics) {
      const file = diag.file ? _path2.default.relative(diag.file.fileName, process.cwd()) : "(unknown file)";
      const category = diag.category === _typescript2.default.DiagnosticCategory.Warning ? "warning" : diag.category === _typescript2.default.DiagnosticCategory.Error ? "error" : diag.category === _typescript2.default.DiagnosticCategory.Suggestion ? "suggestion" : diag.category === _typescript2.default.DiagnosticCategory.Message ? "message" : "unkown";
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
    const printer = _typescript2.default.createPrinter({
      newLine: _typescript2.default.NewLineKind.LineFeed
    });
    for (const file of result.transformed) {
      const to = _path2.default.resolve(file.fileName).replace(props.input, props.output);
      const content = printer.printFile(file);
      await _fs2.default.promises.writeFile(to, content, "utf8");
    }
  };
  const is_directory = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, async (current) => {
    const stat = await _fs2.default.promises.stat(current);
    return stat.isDirectory();
  }, "is_directory");
  const gather = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (props) => (container) => (from) => async (to) => {
    if (from === props.output) return;
    else if (_fs2.default.existsSync(to) === false) await _fs2.default.promises.mkdir(to);
    for (const file of await _fs2.default.promises.readdir(from)) {
      const next = _path2.default.join(from, file);
      const stat = await _fs2.default.promises.stat(next);
      if (stat.isDirectory()) {
        await gather(props)(container)(next)(_path2.default.join(to, file));
        continue;
      } else if (is_supported_extension(file)) container.push(next);
    }
  }, "gather");
  const is_supported_extension = /* @__PURE__ */ _chunkUZ5BS2M3js.__name.call(void 0, (filename) => {
    return filename.endsWith(".ts") && !filename.endsWith(".d.ts") || filename.endsWith(".tsx") && !filename.endsWith(".d.tsx");
  }, "is_supported_extension");
})(TypiaProgrammer || (TypiaProgrammer = exports.TypiaProgrammer = {}));



exports.TypiaProgrammer = TypiaProgrammer;
//# sourceMappingURL=chunk-2XOQKLPA.js.map