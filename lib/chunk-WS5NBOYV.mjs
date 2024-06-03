// src/executable/setup/FileRetriever.ts
import fs from "fs";
import path from "path";
var FileRetriever;
(function(FileRetriever2) {
  FileRetriever2.directory = (name) => (dir, depth = 0) => {
    const location = path.join(dir, name);
    if (fs.existsSync(location)) return dir;
    else if (depth > 2) return null;
    return FileRetriever2.directory(name)(path.join(dir, ".."), depth + 1);
  };
  FileRetriever2.file = (name) => (directory, depth = 0) => {
    const location = path.join(directory, name);
    if (fs.existsSync(location)) return location;
    else if (depth > 2) return null;
    return FileRetriever2.file(name)(path.join(directory, ".."), depth + 1);
  };
})(FileRetriever || (FileRetriever = {}));

export {
  FileRetriever
};
//# sourceMappingURL=chunk-WS5NBOYV.mjs.map