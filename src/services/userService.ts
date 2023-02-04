import { CreateUser } from "../interfaces/createData.js";
import * as userRepository from "../repositories/userRepository.js";
import { conflictError, unauthorizedError } from "../utils/errorsUtils.js";
import * as passUtils from "../utils/passUtils.js";
import jwt from "jsonwebtoken";

export type userAccessData = {
  email: string;
  password: string;
};

export async function createUser(user: CreateUser) {
  const existingUser = await userRepository.checkUser("email", user.email);

  if (existingUser) {
    throw conflictError("This user already has an account!");
  }

  const hashedPassword = passUtils.encryptPassword(user.password);
  const newUser = await userRepository.createUser({
    ...user,
    password: hashedPassword,
  });

  return newUser;
}

export async function access(user: userAccessData) {
  const findedUser = await findedUserOrError("email", user.email);
  const { id, name, password } = findedUser;

  const valid = passUtils.decryptPassword(user.password, password);
  if (!valid) {
    throw unauthorizedError("Try again, user or password are incorrect");
  }

  const data = { id, name };
  const token = jwt.sign(data, process.env.JWT_SECRET);

  return { token };
}

export async function findedUserOrError(param: string, value: string | number) {
  const user = await userRepository.checkUser(param, value);
  if (!user) {
    throw unauthorizedError("This user wasn't found");
  }

  return user;
}