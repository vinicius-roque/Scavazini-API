import { PrismaClient } from "@prisma/client";
import { CreateUser } from "../src/interfaces/createData";
import * as passUtils from "../src/utils/passUtils.js";

const prisma = new PrismaClient();

export async function main() {
  const createUser: CreateUser = {
    name: "Role Admin",
    email: "admin@admin.com",
    password: passUtils.encryptPassword("admin123"),
  };

  await prisma.$queryRaw`TRUNCATE TABLE users RESTART IDENTITY CASCADE;`;

  await prisma.user.create({ data: createUser });
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });