import fastify from "fastify";
import { appRoutes } from "./http/routes";

export const app = fastify();

app.register(appRoutes, {
  prefix: '/api/v1',
  logLevel: "info",
});
