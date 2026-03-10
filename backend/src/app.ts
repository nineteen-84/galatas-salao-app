import fastify from "fastify";
import { appRoutes } from "./http/routes";
import { PrismaClient } from "@prisma/client";

export const app = fastify();

const prisma = new PrismaClient();

prisma.user.create({
  data: {
    name: 'Henrry',
    email: 'Henrrylimadasilva@gmail.com',
  }
});

app.register(appRoutes, {
  prefix: 'app',
  logLevel: "info",
});
