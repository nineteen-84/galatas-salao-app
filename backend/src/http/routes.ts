import { FastifyInstance } from "fastify";
import { register } from "./controllers/register";
import { authenticate } from "./controllers/authenticate";

export async function appRoutes(app: FastifyInstance) {
  // rotas do usuário
  app.post('/users', register);

  // rotas de autenticação
  app.post('/sessions', authenticate);
}