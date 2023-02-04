import { prisma } from "../config/database.js";
import { CreateUser } from "../interfaces/createData.js";

export async function checkUser(param: string, value: string) {
  return prisma.user.findFirst({
    where: {
      [param]: value,
    },
  });
}

export async function createUser(user: CreateUser) {
  return prisma.user.create({
    data: {
      ...user,
    },
  });
}