import {
  CommandExecutor
} from "./chunk-CIFJYCM3.mjs";
import {
  FileRetriever
} from "./chunk-WS5NBOYV.mjs";
import {
  __name
} from "./chunk-TX5EWQFG.mjs";

// src/executable/setup/PackageManager.ts
import fs from "fs";
import path from "path";
var PackageManager = class _PackageManager {
  static {
    __name(this, "PackageManager");
  }
  directory;
  data;
  manager;
  get file() {
    return path.join(this.directory, "package.json");
  }
  static async mount() {
    const location = await FileRetriever.directory("package.json")(process.cwd());
    if (location === null) throw new URIError(`Unable to find "package.json" file`);
    return new _PackageManager(location, await this.load(path.join(location, "package.json")));
  }
  async save(modifier) {
    const content = await fs.promises.readFile(this.file, "utf8");
    this.data = JSON.parse(content);
    modifier(this.data);
    return fs.promises.writeFile(this.file, JSON.stringify(this.data, null, 2), "utf8");
  }
  install(props) {
    const middle = this.manager === "yarn" ? `add${props.dev ? " -D" : ""}` : `install ${props.dev ? "--save-dev" : "--save"}`;
    CommandExecutor.run(`${this.manager} ${middle} ${props.modulo}${props.version ? `@${props.version}` : ""}`);
    return true;
  }
  constructor(directory, data) {
    this.directory = directory;
    this.data = data;
    this.manager = "npm";
  }
  static async load(file) {
    const content = await fs.promises.readFile(file, "utf8");
    return JSON.parse(content);
  }
};

export {
  PackageManager
};
//# sourceMappingURL=chunk-GFJEBGDI.mjs.map