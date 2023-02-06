import { User, Module, Topic } from "@prisma/client";

export type CreateUser = Omit<User, "id" | "createdAt" | "score">;
export type CreateModule = Omit<Module, "id">;
export type CreateTopic = Omit<Topic, "id">;