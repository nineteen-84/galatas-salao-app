import { UserAlreadyExistsError } from "@/use-cases/errors/user-already-exists-error";
import { makeRegisterUseCase } from "@/use-cases/factories/make-register-users-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export const register = async (req: FastifyRequest, reply: FastifyReply) => {
  const registerBodySchema = z.object({
    email: z
      .email("E-mail é obrigatório.")
      .trim()
      .toLowerCase()
      .max(255, "E-mail muito longo."),
    name: z
      .string()
      .trim()
      .min(2, "Nome deve ter pelo menos 2 caracteres.")
      .max(80, "Nome deve ter no máximo 80 caracteres.")
      .transform((val) => val.replace(/\s+/g, " ")), // substitui múltiplos espaços seguidos por um único espaço
    password: z
      .string({ error: "Senha é obrigatória." })
      .min(8, "Senha deve ter pelo menos 8 caracteres.")
      .max(64, "Senha deve ter no máximo 64 caracteres.")
      // Regex feedback exato ao usuário:
      .regex(/[A-Z]/, "Senha deve conter pelo menos uma letra maiúscula.")
      .regex(/[a-z]/, "Senha deve conter pelo menos uma letra minúscula.")
      .regex(/[0-9]/, "Senha deve conter pelo menos um número."),
  });

  const { name, password, email } = registerBodySchema.parse(req.body);

  try {
    const registerUsersUseCase = makeRegisterUseCase();

    await registerUsersUseCase.execute({
      name,
      email,
      password,
    });

    return reply.status(201).send();
  } catch (err) {
    if (err instanceof UserAlreadyExistsError) {
      return reply.status(409).send({ message: err.message });
    }

    throw err;
  }
};
