import { parseArgs } from "node:util";
import { DeployRunner } from "./internal/DeployRunner.js";

const args = process.argv.slice(2);
const {
  values: { tag, template },
} = parseArgs({
  args,
  options: {
    tag: { type: "string", short: "t" },
    template: { type: "boolean", short: "p", default: false },
  },
});

if (tag === undefined) {
  console.log("specify tag name like latest or next");
  process.exit(-1);
}

await DeployRunner.main({
  tag,
  publish: tag !== "test",
  setup: true,
  testExecutors: [
    {
      name: "test",
      commands:
      tag === "test" && template === true
        ? [
          "npm run template",
          "npm run build",
          "npm start",
          "npm run generate",
        ]
        : ["npm run build", "npm start", "npm run generate"],
    },
    {
      name: "test-esm",
      commands: ["npm run build", "npm start"],
    },
    {
      name: "test-error",
      commands: ["npm start"],
    },
    {
      name: "benchmark",
      commands: ["npm run build"],
    },
  ],
});

