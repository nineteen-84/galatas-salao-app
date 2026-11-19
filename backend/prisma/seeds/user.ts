import { hash } from "bcryptjs";

import { prisma } from "@/lib/prisma";

async function run() {
  await prisma.user.upsert({
    where: { email: "admin@gmail.com" },
    update: {},
    create: {
      name: 'admin',
      email: 'admin@gmail.com',
      password_hash: await hash("123456", 6),
    },
  });
}

run()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
