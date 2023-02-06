import { prisma } from "../config/database.js";

export async function getAll() {
  const modules = await prisma.module.findMany();

  return modules;
}