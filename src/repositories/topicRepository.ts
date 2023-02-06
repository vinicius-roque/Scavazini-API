import { prisma } from "../config/database.js";

export async function getAll(id: number) {
  const module = await prisma.module.findFirst({
    where: {
      id,
    },
    include: {
      Topic: true,
    },
  });

  return module;
}