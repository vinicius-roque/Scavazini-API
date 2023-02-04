import { CreateUser } from "../interfaces/createData.js";
import * as userRepository from "../repositories/userRepository.js";
import { conflictError } from "../utils/errorsUtils.js";
import * as passUtils from "../utils/passUtils.js";

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