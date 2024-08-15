import { defineCommand } from "citty";

import { TypiaProgrammer } from "../../programmers/TypiaProgrammer";

import { bail } from "../utils/message";
import { logger } from "../utils/logger";
import { findTsConfig } from "../utils/confFiles";

export const generateCommand = defineCommand({
  meta: {
    name: "generate",
    description: "Generate Typia files",
  },
  args:{
    input: {
      type: "string",
      description: "input directory",
      required: true,
    },
    output: {
      type: "string",
      description: "output directory",
      required: true,
    },
    project: {
      type: "string",
      description: "tsconfig.json file location",
      required: false,
    },
  },
  async run({args}) {
    // TODO: select

    const {
      input,
      output,
      project: _project,
    } = args;


    const project = _project ?? await findTsConfig();

    if (project==null) {
      bail("tsconfig.json not found");
    }

    await TypiaProgrammer.build({input, output, project});
  }
});

