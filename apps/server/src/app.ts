import cors from "cors";
import express from "express";
import helmet from "helmet";
import { pinoHttp } from "pino-http";
import type { HealthStatus } from "@tbp/shared";
import { parseEnvironment } from "@tbp/validation";

export function createApp() {
  const env = parseEnvironment();
  const app = express();

  app.disable("x-powered-by");
  app.use(helmet());
  app.use(cors({ origin: env.WEB_ORIGIN }));
  app.use(express.json({ limit: "1mb" }));
  app.use(pinoHttp());

  app.get("/health", (_request, response) => {
    const body: HealthStatus = {
      status: "ok",
      service: "tbp-api",
      timestamp: new Date().toISOString()
    };
    response.setHeader("Cache-Control", "no-store");
    response.status(200).json(body);
  });

  app.use((_request, response) => {
    response.status(404).json({
      error: { code: "NOT_FOUND", message: "Route not found" }
    });
  });

  return app;
}
