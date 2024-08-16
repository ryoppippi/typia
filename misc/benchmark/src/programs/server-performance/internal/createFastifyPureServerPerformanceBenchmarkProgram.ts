import fastify from "fastify";
import tgrid from "tgrid";
import typia from "typia";

import { IServerPerformanceProgram } from "./IServerPerformanceProgram";

export const createFastifyPureServerPerformanceBenchmarkProgram = async <T>(
  app: typia.IJsonApplication<"3.0">,
) => {
  // OPEN SERVER
  const server = fastify({
    bodyLimit: 50_000_000,
    ajv: {
      customOptions: {
        strict: true,
        strictNumbers: true,
      },
    },
  });
  for (const [key, value] of Object.entries(app.components.schemas ?? {}))
    server.addSchema({
      ...value,
      $id: `#/components/schemas/${key}`,
    });

  // PROVIDER
  const provider: IServerPerformanceProgram = {
    open: async () => {
      server.post(
        "/performance",
        {
          schema: {
            body: app.schemas[0],
            response: {
              200: {
                ...app.schemas[0],
                ...app,
              },
            },
          },
        },
        (income, outcome) => outcome.send(income.body),
      );
      await server.listen({ port: PORT });
      return PORT;
    },
    close: () => server.close(),
  };

  // OPEN WORKER
  const worker = new tgrid.WorkerServer();
  await worker.open(provider);
};

const PORT = 44_444;
