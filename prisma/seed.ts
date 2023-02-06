import { PrismaClient } from "@prisma/client";
import { CreateUser, CreateModule, CreateTopic } from "../src/interfaces/createData";
import * as passUtils from "../src/utils/passUtils.js";

const prisma = new PrismaClient();

export async function main() {
  const createUser: CreateUser = {
    name: "Role Admin",
    email: "admin@admin.com",
    password: passUtils.encryptPassword("admin123"),
  };

  const createModule: CreateModule[] = [];

  const createTopics: CreateTopic[] = [];

  await prisma.$queryRaw`TRUNCATE TABLE users, modules, topics RESTART IDENTITY CASCADE;`;

  await prisma.user.create({ data: createUser });
  await prisma.module.createMany({ data: createModule });
  await prisma.topic.createMany({ data: createTopics });
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });